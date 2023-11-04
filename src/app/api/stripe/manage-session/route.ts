import dbConnect from '@/db/mongoose';
import { stripe } from '@/lib/stripe';
import User from '@/models/User';
import UserSubscription from '@/models/UserSubscription';
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

    await UserSubscription.create({
      userId: subscribedUser?._id,
      stripeCustomerId: checkoutSession.customer,
      stripeSubscriptionId: checkoutSession.subscription,
      stripePriceId: checkoutSession.line_items?.data[0].price?.id,
      stripeCurrentPeriodEnd: checkoutSession.expires_at * 1000,
    });

    subscribedUser.plan = checkoutSession.line_items?.data[0].price?.id;

    await subscribedUser.save();
  }

  return NextResponse.json({ paymentStatus });
}
