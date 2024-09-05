import { User } from "../../entities/User";
import { UserModel } from "../../frameworks/database/UserModel";
import { IUserRepository } from "./IUserRepository";

export class MongoUserRepository implements IUserRepository{
  async create(user: User): Promise<User>{
    return UserModel.create(user)
  }

  async findByUsername(username: string): Promise<User | null> {
       return UserModel.findOne({ username })
  }

async retriveAllUsers(): Promise<User[]> {
     return UserModel.find()
}
}