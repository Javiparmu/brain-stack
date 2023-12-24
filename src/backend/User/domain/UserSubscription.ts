import { UserId } from './value-object/UserId';
import { AggregateRoot } from '@/backend/Shared/domain/AggregateRoot';
import { StripeSubscriptionId } from './value-object/stripe/StripeSubscriptionId';
import { StripePriceId } from './value-object/stripe/StripePriceid';
import { StripeCustomerId } from './value-object/stripe/StripeCustomerId';
import { StripeCurrentPeriodEnd } from './value-object/stripe/StripeCurrentPeriodEnd';
import { UserSubscriptionId } from './value-object/UserSubscriptionId';

export class UserSubscription extends AggregateRoot {
  readonly id: UserSubscriptionId;
  readonly userId: UserId;
  readonly stripeSubscriptionId: StripeSubscriptionId;
  readonly stripePriceId: StripePriceId;
  readonly stripeCustomerId: StripeCustomerId;
  readonly stripeCurrentPeriodEnd: StripeCurrentPeriodEnd;

  constructor({
    id,
    userId,
    stripeSubscriptionId,
    stripePriceId,
    stripeCustomerId,
    stripeCurrentPeriodEnd,
  }: {
    id: UserSubscriptionId;
    userId: UserId;
    stripeSubscriptionId: StripeSubscriptionId;
    stripePriceId: StripePriceId;
    stripeCustomerId: StripeCustomerId;
    stripeCurrentPeriodEnd: StripeCurrentPeriodEnd;
  }) {
    super();
    this.id = id;
    this.userId = userId;
    this.stripeSubscriptionId = stripeSubscriptionId;
    this.stripePriceId = stripePriceId;
    this.stripeCustomerId = stripeCustomerId;
    this.stripeCurrentPeriodEnd = stripeCurrentPeriodEnd;
  }

  static fromPrimitives({
    id,
    userId,
    stripeSubscriptionId,
    stripePriceId,
    stripeCustomerId,
    stripeCurrentPeriodEnd,
  }: {
    id: string;
    userId: string;
    stripeSubscriptionId: string;
    stripePriceId: string;
    stripeCustomerId: string;
    stripeCurrentPeriodEnd: number;
  }): UserSubscription {
    return new UserSubscription({
      id: new UserSubscriptionId(id),
      userId: new UserId(userId),
      stripeSubscriptionId: new StripeSubscriptionId(stripeSubscriptionId),
      stripePriceId: new StripePriceId(stripePriceId),
      stripeCustomerId: new StripeCustomerId(stripeCustomerId),
      stripeCurrentPeriodEnd: new StripeCurrentPeriodEnd(stripeCurrentPeriodEnd),
    });
  }

  toPrimitives(): {
    id: string;
    userId: string;
    stripeSubscriptionId: string;
    stripePriceId: string;
    stripeCustomerId: string;
    stripeCurrentPeriodEnd: number;
  } {
    return {
      id: this.id.value,
      userId: this.userId.value,
      stripeSubscriptionId: this.stripeSubscriptionId.value,
      stripePriceId: this.stripePriceId.value,
      stripeCustomerId: this.stripeCustomerId.value,
      stripeCurrentPeriodEnd: this.stripeCurrentPeriodEnd.value,
    };
  }
}
