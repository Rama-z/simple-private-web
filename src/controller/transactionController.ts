import { Request, Response } from "express";

class TransactionController {
  getHistory(req: Request, res: Response): Response {
    return res.send("Gest history success");
  }
}

export default new TransactionController();
