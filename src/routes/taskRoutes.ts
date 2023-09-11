import MainRoutes from "./mainRoutes";
import taskController from "../controller/taskController";

class TaskRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/", taskController.getTask);
    this.router.post("/add", taskController.addProduct);
  }
}

export default new TaskRoutes().router;
