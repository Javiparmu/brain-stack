import { Model, connect, connection } from 'mongoose';
import { AggregateRoot } from '../../domain/AggregateRoot';
import { Uuid } from '../../domain/value-object/Uuid';

export class MongoRepository<T extends AggregateRoot> {
  constructor(readonly model: Model<T>) {
    this.connect();
  }

  protected async connect(): Promise<void> {
    if (connection.readyState >= 1) return;

    await connect(process.env.MONGODB_URI ?? '', { ignoreUndefined: true });
  }

  public async persist(id: Uuid, aggregateRoot: T): Promise<void> {
    await this.connect();

    const document = { ...aggregateRoot, _id: id };

    await this.model.updateOne({ _id: id }, { $set: document }, { upsert: true, strict: true });
  }
}
