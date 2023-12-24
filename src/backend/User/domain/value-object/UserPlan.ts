import { StringValueObject } from '@/backend/Shared/domain/value-object/StringValueObject';

export class UserPlan extends StringValueObject {
  constructor(value: string) {
    super(value);

    this.assertIsValidPlan(value);
  }

  private assertIsValidPlan(value: string): void {
    if (!this.isStripePriceId(value)) {
      throw new Error('Invalid plan');
    }
  }

  private isStripePriceId(value: string): boolean {
    return value.includes('price_') || value === 'none';
  }
}
