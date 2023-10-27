import { createCustomer, stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  const { email, plan } = await req.json();

  let priceId;

  switch (plan) {
    case 'basic':
      priceId = process.env.STRIPE_BASIC_PLAN_ID;
      break;
    case 'standard':
      priceId = process.env.STRIPE_STANDARD_PLAN_ID;
      break;
    case 'premium':
      priceId = process.env.STRIPE_PREMIUM_PLAN_ID;
      break;
    default:
      return NextResponse.json({ error: 'Invalid plan ID' });
  }

  const customerId = await createCustomer(email);

  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
  });

  return NextResponse.json({ subscriptionId: subscription.id });
}
