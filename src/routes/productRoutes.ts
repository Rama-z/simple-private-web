import MainRoutes from "./mainRoutes";
import productController from "../controller/productController";
import { isLogin } from "../middleware/isLogin";
import taskController from "../controller/taskController";

class ProductRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/", taskController.addProduct);
    this.router.post("/add", productController.addProduct);
  }
}

export default new ProductRoutes().router;
