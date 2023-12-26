import { StringValueObject } from '@/modules/Shared/domain/value-object/StringValueObject';

export class StripeSubscriptionId extends StringValueObject {
  constructor(value: string) {
    super(value);

    this.assertIsValidStripeSubscriptionId(value);
  }

  assertIsValidStripeSubscriptionId(value: string): void {
    if (!value.match(/sub_\w{14}/)) {
      throw new Error('Invalid stripe subscription id');
    }
  }
}
