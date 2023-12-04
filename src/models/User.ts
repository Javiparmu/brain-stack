import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    plan: {
      type: String,
      default: null,
    },
    requestLimit: {
      type: Number,
      default: null,
    },
    requestCount: {
      type: Number,
      default: 0,
    },
    requestReset: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default models.User || model('User', userSchema);
