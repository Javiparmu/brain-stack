'use server';

import type { Stripe } from 'stripe';

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

import { stripe } from '@/app/lib/stripe';
import { PlanEnum } from '@/app/utils/enums';
import { getPlanId } from '@/app/utils';

export async function createCheckoutSession(email: string, plan: PlanEnum): Promise<void> {
  const planId = getPlanId(plan);

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        quantity: 1,
        price: planId,
      },
    ],
    customer_email: email,
    success_url: `${headers().get('origin')}/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${headers().get('origin')}/checkout/result`,
  });

  redirect(checkoutSession.url as string);
}
