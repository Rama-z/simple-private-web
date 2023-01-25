import MainRoutes from "./mainRoutes";
import transactionController from "../controller/transactionController";

class TransactionRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/history", transactionController.getHistory);
  }
}

export default new TransactionRoutes().router;
