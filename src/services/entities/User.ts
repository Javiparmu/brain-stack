import { hash } from "bcrypt";
import { MongoService } from "../db/MongoService"
import UserModel from "../db/models/mongoose/User"
import { Role } from "@/interfaces/users";

export class User {
  public constructor(
    public id: string,
    public email: string,
    public password: string,
    public role: Role,
    private db = new MongoService()
  ) {}

  public async createUser() {
    try {
      const hashedPassword = await hash(this.password, 10);
  
      const user = await this.db.create(UserModel, {
        email: this.email,
        password: hashedPassword,
        role: this.role,
      });
  
      if (!user) {
        throw new Error('Could not create user');
      }
  
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  public async get() {
    try {
      const user = await this.db.findOne(UserModel, {
        email: this.email,
      });
  
      return user;
    } catch (error) {
      throw new Error('Error getting user');
    }
  }

  public async getMany() {
    try {
      const users = await this.db.find(UserModel, {});
  
      return users;
    } catch (error) {
      throw new Error('Error getting users');
    }
  }

  public async update() {
    try {
      const user = await this.db.updateOne(UserModel, {
        email: this.email,
      }, {
        role: this.role,
      });
  
      return user;
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  public async delete() {
    try {
      const user = await this.db.deleteOne(UserModel, {
        email: this.email,
      });

      return user;
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }

  public async getSubscription() {
    try {
      const user = await this.get();

      const subscription = user.subscription;
  
      return subscription;
    } catch (error) {
      throw new Error('Error getting subscription');
    }
  }

  public async getApiLimit() {
    try {
      const user = await this.get();

      const apiLimit = user.apiLimit;
  
      return apiLimit;
    } catch (error) {
      throw new Error('Error getting api limit');
    }
  }

  public async upgradeSubscription() {
    try {
      const user = await this.update();

      return user;
    } catch (error) {
      throw new Error('Error upgrading subscription');
    }
  }
}