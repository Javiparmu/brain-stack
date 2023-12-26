import { NumberValueObject } from '@/modules/Shared/domain/value-object/NumberValueObject';

export class UserApiHits extends NumberValueObject {
  constructor(value: number) {
    super(value);

    this.assertIsValidUserApiHits(value);
  }

  assertIsValidUserApiHits(value: number): void {
    if (!value && value >= 0) {
      throw new Error('Invalid api hits');
    }
  }
}
