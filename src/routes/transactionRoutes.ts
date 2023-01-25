import MainRoutes from "./mainRoutes";
import transactionController from "../controller/transactionController";

class TransactionRoutes extends MainRoutes {
  public routes(): void {
    this.router.get("/history", transactionController.getHistory);
    this.router.get("/", transactionController.getTransaction);
    this.router.post(
      "/createTransaction",
      transactionController.createTransaction
    );
  }
}

export default new TransactionRoutes().router;
