import { NumberValueObject } from '@/modules/Shared/domain/value-object/NumberValueObject';

export class UserRequestLimit extends NumberValueObject {
  constructor(value: number) {
    super(value);

    this.assertIsValidLimit(value);
  }

  private assertIsValidLimit(value: number): void {
    if (value < 0) {
      throw new Error('Invalid limit');
    }
  }
}
