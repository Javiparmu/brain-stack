import Stripe from 'stripe';

class StripeException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StripeException';
  }
}

export const handleStripeError = (err: Stripe.StripeRawError): void => {
  let errorMessage: string;

  switch (err.type) {
    case 'card_error':
      errorMessage = `Your card's expiration year is invalid.`;
      break;
    case 'rate_limit_error':
      errorMessage = 'Rate limit exceeded. Please try again later.';
      break;
    case 'invalid_request_error':
      errorMessage = 'Invalid parameters supplied to Stripe API.';
      break;
    case 'api_error':
      errorMessage = 'Internal error in Stripe API.';
      break;
    case 'idempotency_error':
      errorMessage = 'Idempotency key error. Please try the request again.';
      break;
    default:
      errorMessage = 'An unexpected error occurred.';
      break;
  }

  throw new StripeException(errorMessage);
};
