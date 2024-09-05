import { User } from "../../entities/User";
import { IUserRepository } from "../../interfaceAdapters/repositories/IUserRepository";

export class CreateUser{
    constructor(private userRepository: IUserRepository){}

    async execute(user: User): Promise<User>{
        return this.userRepository.create(user)
    }
}