import { UserApiLimitId } from '@/backend/User/domain/UserApiLimtId';
import { UserApiHits } from '@/backend/User/domain/value-object/UserApiHits';
import { UserId } from '@/backend/User/domain/value-object/UserId';
import { UserIp } from '@/backend/User/domain/value-object/UserIp';
import { Schema, model, models } from 'mongoose';

const userApiLimitSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      get: (id: string) => new UserApiLimitId(id),
      set: (id: UserApiLimitId) => id.value,
    },
    userIp: {
      type: String,
      required: true,
      get: (ip: string) => new UserIp(ip),
      set: (ip: UserIp) => ip.value,
    },
    userId: {
      type: String,
      required: true,
      get: (userId: string) => new UserId(userId),
      set: (userId: UserId) => userId.value,
    },
    hits: {
      type: Number,
      required: true,
      get: (hits: number) => new UserApiHits(hits),
      set: (hits: UserApiHits) => hits.value,
    },
    exceeded: {
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
