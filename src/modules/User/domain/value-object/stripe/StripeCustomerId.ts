import { StringValueObject } from '@/modules/Shared/domain/value-object/StringValueObject';

export class StripeCustomerId extends StringValueObject {
  constructor(value: string) {
    super(value);

    this.assertIsValidStripeCustomerId(value);
  }

  assertIsValidStripeCustomerId(value: string): void {
    if (!value.match(/cus_\w{14}/)) {
      throw new Error('Invalid stripe customer id');
    }
  }
}
