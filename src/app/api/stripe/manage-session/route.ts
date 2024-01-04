import { sendSubscriptionEmail } from '@/app/lib/email';
import { stripe } from '@/app/lib/stripe';
import { getPlanFromId } from '@/app/utils';
import { PaymentStatus } from '@/app/utils/enums';
import { NextResponse } from 'next/server';
import type { Stripe } from 'stripe';
import { UserFinder } from '@/modules/User/application/UserFinder';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { UserUpgrade } from '@/modules/User/application/UserUpgrade';
import { getRequestLimitFromPlan } from '@/app/lib';
import { UserCreator } from '@/modules/User/application/UserCreator';
import { randomUUID } from 'crypto';

export async function POST(req: Request): Promise<NextResponse> {
  const { sessionId } = await req.json();

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'payment_intent'],
  });

  const {
    customer,
    customer_details: customerDetails,
    line_items: lineItems,
    payment_status: paymentStatus,
    subscription,
    expires_at: expiresAt,
  } = checkoutSession;

  if (!customer || !customerDetails?.email || !lineItems || !paymentStatus || !subscription) {
    return new NextResponse('Invalid session', { status: 400 });
  }

  if (paymentStatus === PaymentStatus.PAID) {
    const userFinder = new UserFinder(new MongoUserRepository());
    const subscribedUser = await userFinder.run(customerDetails.email);

    const errorUserId = randomUUID();

    if (!subscribedUser) {
      const userCreator = new UserCreator(new MongoUserRepository());
      await userCreator.run({
        id: errorUserId,
        email: customerDetails.email,
        authProvider: 'customer',
      });
    }

    const planId = lineItems.data[0].price?.id;
    const planName = getPlanFromId(planId);

    if (!planId || !planName) {
      return new NextResponse('Plan not found', { status: 400 });
    }

    const userUpgrade = new UserUpgrade(new MongoUserRepository());
    await userUpgrade.run({
      id: subscription.toString(),
      userId: subscribedUser?.id.value ?? errorUserId,
      stripePriceId: planId,
      stripeCurrentPeriodEnd: expiresAt * 1000,
      requestCount: 0,
      requestLimit: getRequestLimitFromPlan(planId),
      requestReset: 0,
    });

    await sendSubscriptionEmail(customerDetails.email, customerDetails.email.split('@')[0], planName);
  }

  return NextResponse.json({ paymentStatus });
}
