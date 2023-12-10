'use server';

import type { Stripe } from 'stripe';

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

import { stripe } from '@/lib/stripe';
import { PlanEnum } from '@/utils/enums';
import { getPlanId } from '@/utils';

export async function createCheckoutSession(formData: FormData): Promise<void> {
  const planId = getPlanId(formData.get('plan') as PlanEnum);

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          quantity: 1,
          price: planId,
        },
      ],
      customer_email: formData.get('email') as string,
      success_url: `${headers().get(
        'origin',
      )}/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get('origin')}/checkout/result`,
    });

  redirect(checkoutSession.url as string);
}
