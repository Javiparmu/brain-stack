import { NumberValueObject } from '@/modules/Shared/domain/value-object/NumberValueObject';

export class UserRequestReset extends NumberValueObject {
  constructor(value: number) {
    super(value);

    this.assertIsValidRequestReset(value);
  }

  private assertIsValidRequestReset(value: number): void {
    if (!this.isUnixDate(value)) {
      throw new Error('Invalid request reset');
    }
  }

  private isUnixDate(value: number): boolean {
    return String(value).length === 13 || value === 0;
  }
}
