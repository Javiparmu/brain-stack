import { StringValueObject } from '@/backend/Shared/domain/value-object/StringValueObject';

export class UserEmail extends StringValueObject {
  constructor(value: string) {
    super(value);

    this.assertIsValidEmail(value);
  }

  private assertIsValidEmail(value: string): void {
    if (!value.includes('@')) {
      throw new Error('Invalid email');
    }
  }
}
