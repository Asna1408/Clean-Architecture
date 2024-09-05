import { IUserRepository } from "../../interfaceAdapters/repositories/IUserRepository";

export class GetUserList {
    constructor(private userRepository: IUserRepository){};

    async execute(): Promise<any>{
  return this.userRepository.retriveAllUsers();
     }
}