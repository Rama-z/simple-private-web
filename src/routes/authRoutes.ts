import AuthController from "../controller/authController";
import MainRoutes from "./mainRoutes";

class AuthRouters extends MainRoutes {
  public routes(): void {
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRouters().router;
