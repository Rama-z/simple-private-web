import userController from "../controller/userController";
import MainRoutes from "./mainRoutes";

class UserRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/", userController.getAllUser);
  }
}

export default new UserRoutes().router;
