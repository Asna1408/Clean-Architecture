import { Response, Request } from "express";
import { CreateUser } from "../../usecases/signUp/CreateUser";
import { MongoUserRepository } from "../repositories/UserRepository";
import { LoginUser } from "../../usecases/login/LoginUseCase";
import { GetUserList } from "../../usecases/getUserList/GetUserListUseCAse";

const userRepository = new MongoUserRepository();
export class UserController {
  static async signUp(req: Request, res: Response): Promise<void> {
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const loginUser = new LoginUser(userRepository);
      const token = await loginUser.operate(
        req.body.username,
        req.body.password
      );
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }

  static async allUsers(req: Request, res: Response): Promise<void>{
    const allUserData = new GetUserList(userRepository);
    const data = await allUserData.execute();
    res.json(data)
  }
}
