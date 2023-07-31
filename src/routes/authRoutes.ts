import AuthController from "../controller/authController";
import MainRoutes from "./mainRoutes";
import zodValidator from "../middleware/validator";
import ValidatorScheme from "../helpers/validatorScheme";
class AuthRouters extends MainRoutes {
  public routes(): void {
    this.router.post(
      "/register",
      zodValidator(ValidatorScheme.registerScheme),
      AuthController.register
    );
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRouters().router;
