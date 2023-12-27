import { Model } from 'mongoose';
import { AggregateRoot } from '../../domain/AggregateRoot';
import { Uuid } from '../../domain/value-object/Uuid';

export class MongoRepository<T extends AggregateRoot> {
  constructor(readonly model: Model<T>) {}

  public async persist(id: Uuid, aggregateRoot: T): Promise<void> {
    const document = { ...aggregateRoot, _id: id };
    await this.model.updateOne({ _id: id }, { $set: document }, { upsert: true, strict: true });
  }
}
