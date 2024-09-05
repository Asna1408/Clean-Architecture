import { Router } from "express";
import { UserController } from "../controllers/UserControllers";
import { UserModel } from "../../frameworks/database/UserModel";

const router = Router();

router.post('/signup', UserController.signUp);
router.post('/login', UserController.login);
router.get("/all-users", UserController.allUsers);

export default router;