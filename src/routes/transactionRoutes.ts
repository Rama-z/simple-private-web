import MainRoutes from "./mainRoutes";
import transactionController from "../controller/transactionController";
import { isLogin } from "../middleware/isLogin";

class TransactionRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/history", isLogin, transactionController.getHistory);
    this.router.get("/", transactionController.getTransaction);
    this.router.post(
      "/createTransaction",
      transactionController.createTransaction
    );
  }
}

export default new TransactionRoutes().router;
