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
    this.router.post("/add-history", transactionController.addHistory);
    this.router.delete("/remove-history", transactionController.removeHistory);
    this.router.get("/get-history", transactionController.gotHistory);
  }
}

export default new TransactionRoutes().router;
