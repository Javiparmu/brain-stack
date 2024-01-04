import { SubscriptionId } from '@/modules/Subscription/domain/value-object/SubscriptionId';
import { UserId } from '@/modules/User/domain/value-object/UserId';
import { UserRequestCount } from '@/modules/User/domain/value-object/UserRequestCount';
import { UserRequestLimit } from '@/modules/User/domain/value-object/UserRequestLimit';
import { UserRequestReset } from '@/modules/User/domain/value-object/UserRequestReset';
import { StripeCurrentPeriodEnd } from '@/modules/User/domain/value-object/stripe/StripeCurrentPeriodEnd';
import { StripePriceId } from '@/modules/User/domain/value-object/stripe/StripePriceid';
import { Schema, model, models } from 'mongoose';

const userSubscriptionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      get: (stripeSubscriptionId: string) => new SubscriptionId(stripeSubscriptionId),
      set: (stripeSubscriptionId: SubscriptionId) => stripeSubscriptionId.value,
    },
    userId: {
      type: String,
      required: true,
      get: (userId: string) => new UserId(userId),
      set: (userId: UserId) => userId.value,
    },
    stripeCurrentPeriodEnd: {
      type: Number,
      required: true,
      get: (stripeCurrentPeriodEnd: number) => new StripeCurrentPeriodEnd(stripeCurrentPeriodEnd),
      set: (stripeCurrentPeriodEnd: StripeCurrentPeriodEnd) => stripeCurrentPeriodEnd.value,
    },
    stripePriceId: {
      type: String,
      required: true,
      get: (stripePriceId: string) => new StripePriceId(stripePriceId),
      set: (stripePriceId: StripePriceId) => stripePriceId.value,
    },
    requestLimit: {
      type: Number,
      default: 0,
      get: (requestLimit: number) => new UserRequestLimit(requestLimit),
      set: (requestLimit: UserRequestLimit) => requestLimit?.value,
    },
    requestCount: {
      type: Number,
      default: 0,
      get: (requestCount: number) => new UserRequestCount(requestCount),
      set: (requestCount: UserRequestCount) => requestCount?.value,
    },
    requestReset: {
      type: Number,
      default: 0,
      get: (requestReset: number) => new UserRequestReset(requestReset),
      set: (requestReset: UserRequestReset) => requestReset?.value,
    },
  },
  {
    timestamps: true,
    collection: 'userSubscriptions',
  },
);

export default models.UserSubscription || model('UserSubscription', userSubscriptionSchema);
