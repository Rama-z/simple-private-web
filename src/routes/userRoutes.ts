import userController from "../controller/userController";
import MainRoutes from "./mainRoutes";
import { isLogin } from "../middleware/isLogin";

class UserRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/", isLogin, userController.getAllUser);
  }
}

export default new UserRoutes().router;
