import { FilterQuery, UpdateQuery } from "mongoose";
import { Model, connect, connection, disconnect } from "mongoose";

export class MongoService {
    private async connect() {
        try {
            if (connection.readyState >= 1) return;
        
            await connect(process.env.MONGODB_URI ?? '');
          } catch (error) {
            throw new Error('Error connecting to db');
          }
    }

    private async disconnect() {
        try {
            await disconnect();
        } catch (error) {
            throw new Error('Error disconnecting from db');
        }
    }

    public async create<T>(model: Model<any, {}, {}, {}, any, any>, data: UpdateQuery<T>) {
        try {
            await this.connect();

            const result = await model.create(data);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error creating document');
        }
    }

    public async findOne<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>) {
        try {
            await this.connect();

            const result = await model.findOne(query);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error finding document');
        }
    }

    public async find<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>) {
        try {
            await this.connect();

            const result = await model.find(query);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error finding documents');
        }
    }

    public async updateOne<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>, data: UpdateQuery<T>) {
        try {
            await this.connect();

            const result = await model.updateOne(query, data);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error updating document');
        }
    }

    public async updateMany<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>, data: UpdateQuery<T>) {
        try {
            await this.connect();

            const result = await model.updateMany(query, data);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error updating documents');
        }
    }

    public async deleteOne<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>) {
        try {
            await this.connect();

            const result = await model.deleteOne(query);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error deleting document');
        }
    }

    public async deleteMany<T>(model: Model<any, {}, {}, {}, any, any>, query: FilterQuery<T>) {
        try {
            await this.connect();

            const result = await model.deleteMany(query);

            await this.disconnect();

            return result;
        } catch (error) {
            throw new Error('Error deleting documents');
        }
    }
}