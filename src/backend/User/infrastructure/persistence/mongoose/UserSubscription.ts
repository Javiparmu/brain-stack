import { UserId } from '@/backend/User/domain/value-object/UserId';
import { UserSubscriptionId } from '@/backend/User/domain/value-object/UserSubscriptionId';
import { StripeCurrentPeriodEnd } from '@/backend/User/domain/value-object/stripe/StripeCurrentPeriodEnd';
import { StripeCustomerId } from '@/backend/User/domain/value-object/stripe/StripeCustomerId';
import { StripePriceId } from '@/backend/User/domain/value-object/stripe/StripePriceid';
import { StripeSubscriptionId } from '@/backend/User/domain/value-object/stripe/StripeSubscriptionId';
import { Schema, model, models } from 'mongoose';

const userSubscriptionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      get: (id: string) => new UserSubscriptionId(id),
      set: (id: UserSubscriptionId) => id.value,
    },
    userId: {
      type: String,
      required: true,
      get: (userId: string) => new UserId(userId),
      set: (userId: UserId) => userId.value,
    },
    stripeCustomerId: {
      type: String,
      required: true,
      get: (stripeCustomerId: string) => new StripeCustomerId(stripeCustomerId),
      set: (stripeCustomerId: StripeCustomerId) => stripeCustomerId.value,
    },
    stripeSubscriptionId: {
      type: String,
      required: true,
      get: (stripeSubscriptionId: string) => new StripeSubscriptionId(stripeSubscriptionId),
      set: (stripeSubscriptionId: StripeSubscriptionId) => stripeSubscriptionId.value,
    },
    stripePriceId: {
      type: String,
      required: true,
      get: (stripePriceId: string) => new StripePriceId(stripePriceId),
      set: (stripePriceId: StripePriceId) => stripePriceId.value,
    },
    stripeCurrentPeriodEnd: {
      type: Number,
      required: true,
      get: (stripeCurrentPeriodEnd: number) => new StripeCurrentPeriodEnd(stripeCurrentPeriodEnd),
      set: (stripeCurrentPeriodEnd: StripeCurrentPeriodEnd) => stripeCurrentPeriodEnd.value,
    },
  },
  {
    timestamps: true,
    collection: 'userSubscriptions',
  },
);

export default models.UserSubscription || model('UserSubscription', userSubscriptionSchema);
