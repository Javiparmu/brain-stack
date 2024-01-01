import { Customer } from '../domain/Customer';
import { CustomerRepository } from '../domain/CustomerRepository';
import { CustomerEmail } from '../domain/value-object/CustomerEmail';

export class CustomerFinder {
  private repository: CustomerRepository;

  constructor(repository: CustomerRepository) {
    this.repository = repository;
  }

  async run(email: string): Promise<Customer | null> {
    return this.repository.search(new CustomerEmail(email));
  }
}
