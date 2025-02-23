import { Router } from "express";
import { AuthController } from "../controllers/implementation/auth.controller";
import { AuthService } from "../services/implementation/auth.service";
import { UserRepository } from "../repositories/implementation/user.repository";

const authRouter = Router();

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

authRouter.post("/register", authController.signup.bind(authController));
authRouter.post("/login", authController.signin.bind(authController));
authRouter.post("/otp", authController.verifyOtp.bind(authController));

export default authRouter;
