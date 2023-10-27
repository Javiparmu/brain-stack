'use server';

import type { Stripe } from 'stripe';

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

import { CURRENCY } from '@/lib/stripe';
import { formatAmountForStripe } from '@/utils/stripe-helpers';
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

export async function createPaymentIntent(
  data: FormData,
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get('customDonation') as string),
        CURRENCY,
      ),
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}
