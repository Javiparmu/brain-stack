import { UserRepository } from '../domain/UserRepository';
import { UserSubscription } from '../domain/UserSubscription';
import { UserId } from '../domain/value-object/UserId';
import { UserSubscriptionId } from '../domain/value-object/UserSubscriptionId';
import { StripeCurrentPeriodEnd } from '../domain/value-object/stripe/StripeCurrentPeriodEnd';
import { StripeCustomerId } from '../domain/value-object/stripe/StripeCustomerId';
import { StripePriceId } from '../domain/value-object/stripe/StripePriceid';
import { StripeSubscriptionId } from '../domain/value-object/stripe/StripeSubscriptionId';

export class UserUpgrade {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(document: {
    id: string;
    userId: string;
    stripeSubscriptionId: string;
    stripePriceId: string;
    stripeCustomerId: string;
    stripeCurrentPeriodEnd: number;
  }): Promise<void> {
    const userSubscription = new UserSubscription({
      id: new UserSubscriptionId(document.id),
      userId: new UserId(document.userId),
      stripeSubscriptionId: new StripeSubscriptionId(document.stripeSubscriptionId),
      stripePriceId: new StripePriceId(document.stripePriceId),
      stripeCustomerId: new StripeCustomerId(document.stripeCustomerId),
      stripeCurrentPeriodEnd: new StripeCurrentPeriodEnd(document.stripeCurrentPeriodEnd),
    });

    await this.repository.subscribe(userSubscription);
  }
}
