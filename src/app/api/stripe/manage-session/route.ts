import dbConnect from '@/db/mongoose';
import { stripe } from '@/lib/stripe';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request): Promise<NextResponse> {
  const { sessionId } = await req.json();

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'payment_intent'],
    });

  const paymentStatus = checkoutSession.payment_status;

  if (paymentStatus === 'paid') {
    await dbConnect();

    const subscribedUser = await User.findOneAndUpdate(
      { email: checkoutSession.customer_details?.email },
      { plan: checkoutSession.line_items?.data[0].price?.id },
    );

    if (!subscribedUser) {
      return NextResponse.json({
        paymentStatus,
        error: 'User not found',
      });
    }
  }

  return NextResponse.json({ paymentStatus });
}
