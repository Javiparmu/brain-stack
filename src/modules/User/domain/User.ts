import { Primitives } from '@/modules/Shared/domain/Primitives';
import { UserEmail } from './value-object/UserEmail';
import { UserId } from './value-object/UserId';
import { UserPassword } from './value-object/UserPassword';
import { UserPlan } from './value-object/UserPlan';
import { UserRequestCount } from './value-object/UserRequestCount';
import { UserRequestLimit } from './value-object/UserRequestLimit';
import { UserRequestReset } from './value-object/UserRequestReset';
import { UserRole } from './value-object/UserRole';
import { AggregateRoot } from '@/modules/Shared/domain/AggregateRoot';
import { UserAuthProvider } from './value-object/UserAuthProvider';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly email?: UserEmail;
  readonly password?: UserPassword;
  readonly authProvider?: UserAuthProvider;
  readonly role?: UserRole;
  readonly plan?: UserPlan;
  readonly requestLimit?: UserRequestLimit;
  readonly requestCount?: UserRequestCount;
  readonly requestReset?: UserRequestReset;

  constructor({
    id,
    email,
    password,
    authProvider,
    role,
    plan,
    requestLimit,
    requestCount,
    requestReset,
  }: {
    id: UserId;
    email?: UserEmail;
    password?: UserPassword;
    authProvider?: UserAuthProvider;
    role?: UserRole;
    plan?: UserPlan;
    requestLimit?: UserRequestLimit;
    requestCount?: UserRequestCount;
    requestReset?: UserRequestReset;
  }) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.authProvider = authProvider;
    this.role = role;
    this.plan = plan;
    this.requestLimit = requestLimit;
    this.requestCount = requestCount;
    this.requestReset = requestReset;
  }

  static fromPrimitives({
    id,
    email,
    password,
    authProvider,
    role,
    plan,
    requestLimit,
    requestCount,
    requestReset,
  }: Primitives<User>): User {
    return new User({
      id: new UserId(id),
      email: new UserEmail(email!),
      password: password ? new UserPassword(password) : undefined,
      authProvider: new UserAuthProvider(authProvider!),
      role: new UserRole(role!),
      plan: new UserPlan(plan!),
      requestLimit: new UserRequestLimit(requestLimit!),
      requestCount: new UserRequestCount(requestCount!),
      requestReset: new UserRequestReset(requestReset!),
    });
  }

  toPrimitives(): Primitives<User> {
    return {
      id: this.id.value,
      email: this.email?.value,
      password: this.password?.value,
      authProvider: this.authProvider?.value,
      role: this.role?.value,
      plan: this.plan?.value,
      requestLimit: this.requestLimit?.value,
      requestCount: this.requestCount?.value,
      requestReset: this.requestReset?.value,
    };
  }
}
