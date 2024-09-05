import { IUserRepository } from "../../interfaceAdapters/repositories/IUserRepository";
import * as jwt from 'jsonwebtoken';

export class LoginUser {
    constructor(private userRepository: IUserRepository){};

    async operate(username: string, password: string): Promise<string>{
        const user = await this.userRepository.findByUsername(username);
        if(user && user.password === password){
            const token = jwt.sign({userId: user.email}, "secretCode");
            return token;
        }
        throw new Error("Invalid credentials");
    }
}