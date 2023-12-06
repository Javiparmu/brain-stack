import { Schema, model, models } from 'mongoose';

const userSubscriptionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    stripeCustomerId: {
      type: String,
      required: true,
    },
    stripeSubscriptionId: {
      type: String,
      required: true,
    },
    stripePriceId: {
      type: String,
      required: true,
    },
    stripeCurrentPeriodEnd: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'userSubscriptions',
  },
);

export default models.UserSubscription ||
  model('UserSubscription', userSubscriptionSchema);
