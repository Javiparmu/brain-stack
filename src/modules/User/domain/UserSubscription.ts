import { UserId } from './value-object/UserId';
import { AggregateRoot } from '@/modules/Shared/domain/AggregateRoot';
import { StripeCurrentPeriodEnd } from './value-object/stripe/StripeCurrentPeriodEnd';
import { Primitives } from '@/modules/Shared/domain/Primitives';
import { SubscriptionId } from '@/modules/Subscription/domain/value-object/SubscriptionId';
import { UserRequestLimit } from './value-object/UserRequestLimit';
import { UserRequestCount } from './value-object/UserRequestCount';
import { UserRequestReset } from './value-object/UserRequestReset';
import { StripePriceId } from './value-object/stripe/StripePriceid';

export class UserSubscription extends AggregateRoot {
  readonly id: SubscriptionId;
  readonly userId?: UserId;
  readonly stripeCurrentPeriodEnd: StripeCurrentPeriodEnd;
  readonly stripePriceId?: StripePriceId;
  readonly requestCount?: UserRequestCount;
  readonly requestLimit?: UserRequestLimit;
  readonly requestReset?: UserRequestReset;

  constructor({
    id,
    userId,
    stripeCurrentPeriodEnd,
    stripePriceId,
    requestCount,
    requestLimit,
    requestReset,
  }: {
    id: SubscriptionId;
    userId?: UserId;
    stripeCurrentPeriodEnd: StripeCurrentPeriodEnd;
    stripePriceId?: StripePriceId;
    requestCount?: UserRequestCount;
    requestLimit?: UserRequestLimit;
    requestReset?: UserRequestReset;
  }) {
    super();
    this.id = id;
    this.userId = userId;
    this.stripeCurrentPeriodEnd = stripeCurrentPeriodEnd;
    this.stripePriceId = stripePriceId;
    this.requestCount = requestCount;
    this.requestLimit = requestLimit;
    this.requestReset = requestReset;
  }

  static fromPrimitives({
    id,
    userId,
    stripeCurrentPeriodEnd,
    stripePriceId,
    requestCount,
    requestLimit,
    requestReset,
  }: Primitives<UserSubscription>): UserSubscription {
    return new UserSubscription({
      id: new SubscriptionId(id),
      userId: new UserId(userId!),
      stripeCurrentPeriodEnd: new StripeCurrentPeriodEnd(stripeCurrentPeriodEnd),
      stripePriceId: new StripePriceId(stripePriceId!),
      requestCount: new UserRequestCount(requestCount!),
      requestLimit: new UserRequestLimit(requestLimit!),
      requestReset: new UserRequestReset(requestReset!),
    });
  }

  toPrimitives(): Primitives<UserSubscription> {
    return {
      id: this.id.value,
      userId: this.userId?.value,
      stripeCurrentPeriodEnd: this.stripeCurrentPeriodEnd.value,
      stripePriceId: this.stripePriceId?.value,
      requestCount: this.requestCount?.value,
      requestLimit: this.requestLimit?.value,
      requestReset: this.requestReset?.value,
    };
  }
}
