import { CustomException } from './CustomException';

export class FreeLimitException extends CustomException {
  constructor() {
    super('Free limit reached. You need to upgrade your account.', 400);
  }
}
