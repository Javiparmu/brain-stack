import { Primitives } from '@/modules/Shared/domain/Primitives';
import { UserEmail } from './value-object/UserEmail';
import { UserId } from './value-object/UserId';
import { UserPassword } from './value-object/UserPassword';
import { UserRole } from './value-object/UserRole';
import { AggregateRoot } from '@/modules/Shared/domain/AggregateRoot';
import { UserAuthProvider } from './value-object/UserAuthProvider';
import { CustomerId } from '@/modules/Customer/domain/value-object/CustomerId';
import { SubscriptionId } from '@/modules/Subscription/domain/value-object/SubscriptionId';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly email?: UserEmail;
  readonly password?: UserPassword;
  readonly authProvider?: UserAuthProvider;
  readonly role?: UserRole;
  readonly plan?: SubscriptionId;
  readonly customerId?: CustomerId;

  constructor({
    id,
    email,
    password,
    authProvider,
    role,
    plan,
    customerId,
  }: {
    id: UserId;
    email?: UserEmail;
    password?: UserPassword;
    authProvider?: UserAuthProvider;
    role?: UserRole;
    plan?: SubscriptionId;
    customerId?: CustomerId;
  }) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.authProvider = authProvider;
    this.role = role;
    this.plan = plan;
    this.customerId = customerId;
  }

  static fromPrimitives({ id, email, password, authProvider, role, plan, customerId }: Primitives<User>): User {
    return new User({
      id: new UserId(id),
      email: new UserEmail(email!),
      password: password ? new UserPassword(password) : undefined,
      authProvider: new UserAuthProvider(authProvider!),
      role: new UserRole(role!),
      plan: new SubscriptionId(plan!),
      customerId: customerId ? new CustomerId(customerId!) : undefined,
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
      customerId: this.customerId?.value,
    };
  }
}
