import { Schema } from 'mongoose';

const apiLimitSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    hits: {
      type: Number,
      required: true,
    },
    reset: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'apiLimits',
  },
);

export default apiLimitSchema;
