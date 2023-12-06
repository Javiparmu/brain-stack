import { Schema, model, models } from 'mongoose';

const userApiLimitSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    hits: {
      type: Number,
      required: true,
    },
    exceded: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'userApiLimits',
  },
);

export default models.UserApiLimit || model('UserApiLimit', userApiLimitSchema);
