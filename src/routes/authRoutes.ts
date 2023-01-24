import { Router, Request, Response } from "express";
import AuthController from "../controller/authController";
interface AuthRouter {
  routes(): void;
}

class AuthRouters implements AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRouters().router;
