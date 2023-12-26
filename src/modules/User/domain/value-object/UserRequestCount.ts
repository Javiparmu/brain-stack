import { NumberValueObject } from '@/modules/Shared/domain/value-object/NumberValueObject';

export class UserRequestCount extends NumberValueObject {
  constructor(value: number) {
    super(value);

    this.assertIsValidCount(value);
  }

  private assertIsValidCount(value: number): void {
    if (value < 0) {
      throw new Error('Invalid count');
    }
  }
}
