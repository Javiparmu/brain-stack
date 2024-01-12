import { CustomException } from './CustomException';

export class SubscriptionLimitException extends CustomException {
  constructor(resetTime?: number) {
    super(resetTime ? `Subscription limit reached. Wait until ${resetTime} and try again.` : 'Subscription limit reached', 400);
  }
}
