import dbConnect from '@/db/mongoose';
import { sendSubscriptionEmail } from '@/lib/email';
import { stripe } from '@/lib/stripe';
import { getRequestLimitFromPlan } from '@/lib/subscription';
import User from '@/services/db/models/mongoose/User';
import UserSubscription from '@/services/db/models/mongoose/UserSubscription';
import { getPlanFromId } from '@/utils';
import { PaymentStatus } from '@/utils/enums';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request): Promise<NextResponse> {
  const { sessionId } = await req.json();

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'payment_intent'],
    });

  const paymentStatus = checkoutSession.payment_status;

  if (paymentStatus === PaymentStatus.PAID) {
    await dbConnect();

    const subscribedUser = await User.findOne({
      email: checkoutSession.customer_details?.email,
    });

    if (!subscribedUser) {
      return NextResponse.json({
        paymentStatus,
        error: 'User not found',
      });
    }

    const planId = checkoutSession.line_items?.data[0].price?.id;

    const planName = getPlanFromId(planId);

    if (!planId || !planName) {
      return new NextResponse('Plan not found', { status: 400 });
    }

    await UserSubscription.create({
      userId: subscribedUser?._id,
      stripeCustomerId: checkoutSession.customer,
      stripeSubscriptionId: checkoutSession.subscription,
      stripePriceId: planId,
      stripeCurrentPeriodEnd: checkoutSession.expires_at * 1000,
    });

    subscribedUser.plan = planId;
    subscribedUser.requestLimit = getRequestLimitFromPlan(planId);

    await subscribedUser.save();

    await sendSubscriptionEmail(
      subscribedUser.email,
      subscribedUser.email.split('@')[0],
      planName,
    );
  }

  return NextResponse.json({ paymentStatus });
}
