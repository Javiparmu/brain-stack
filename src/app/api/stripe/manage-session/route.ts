import { sendSubscriptionEmail } from '@/app/lib/email';
import { stripe } from '@/app/lib/stripe';
import { getPlanFromId } from '@/app/utils';
import { PaymentStatus } from '@/app/utils/enums';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { UserFinder } from '@/backend/User/application/UserFinder';
import { MongoUserRepository } from '@/backend/User/infrastructure/persistence/MongoUserRepository';
import { UserUpgrade } from '@/backend/User/application/UserUpgrade';
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

    if (!subscribedUser) {
      return NextResponse.json({
        paymentStatus,
        error: 'User not found',
      });
    }

    const planId = lineItems.data[0].price?.id;
    const planName = getPlanFromId(planId);

    if (!planId || !planName) {
      return new NextResponse('Plan not found', { status: 400 });
    }

    const userUpgrade = new UserUpgrade(new MongoUserRepository());
    await userUpgrade.run({
      id: randomUUID(),
      userId: subscribedUser.id.value,
      stripeCustomerId: customer.toString(),
      stripeSubscriptionId: subscription.toString(),
      stripePriceId: planId,
      stripeCurrentPeriodEnd: expiresAt * 1000,
    });

    await sendSubscriptionEmail(subscribedUser.email!.value, subscribedUser.email!.value.split('@')[0], planName);
  }

  return NextResponse.json({ paymentStatus });
}
