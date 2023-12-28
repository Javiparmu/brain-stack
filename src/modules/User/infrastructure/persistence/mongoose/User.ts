import { UserAuthProvider } from '@/modules/User/domain/value-object/UserAuthProvider';
import { UserEmail } from '@/modules/User/domain/value-object/UserEmail';
import { UserId } from '@/modules/User/domain/value-object/UserId';
import { UserPassword } from '@/modules/User/domain/value-object/UserPassword';
import { UserPlan } from '@/modules/User/domain/value-object/UserPlan';
import { UserRequestCount } from '@/modules/User/domain/value-object/UserRequestCount';
import { UserRequestLimit } from '@/modules/User/domain/value-object/UserRequestLimit';
import { UserRequestReset } from '@/modules/User/domain/value-object/UserRequestReset';
import { UserRole } from '@/modules/User/domain/value-object/UserRole';
import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      get: (id: string) => new UserId(id),
      set: (id: UserId) => id.value,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      get: (email: string) => new UserEmail(email),
      set: (email: UserEmail) => email?.value,
    },
    password: {
      type: String,
      required: true,
      get: (password: string) => new UserPassword(password),
      set: (password: UserPassword) => password?.value,
    },
    authProvider: {
      type: String,
      enum: ['credentials', 'google', 'github'],
      default: 'credentials',
      get: (authProvider: string) => new UserAuthProvider(authProvider),
      set: (authProvider: UserAuthProvider) => authProvider?.value,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      get: (role: string) => new UserRole(role),
      set: (role: UserRole) => role?.value,
    },
    plan: {
      type: String,
      default: 'none',
      get: (plan: string) => new UserPlan(plan),
      set: (plan: UserPlan) => plan?.value,
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
    collection: 'users',
  },
);

export default models.User || model('User', userSchema);
