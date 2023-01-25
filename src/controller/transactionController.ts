import { Request, Response } from "express";
import transactionRepo from "../repo/transactionRepo";

class TransactionController {
  getHistory = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await transactionRepo.getHistory();
      return res.send("success");
    } catch (err) {
      throw err;
    }
  };
  getTransaction = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await transactionRepo.getTransaction();
      return res.send("success");
    } catch (err) {
      throw err;
    }
  };
  createTransaction = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const result = await transactionRepo.createTransaction();
      return res.send("success");
    } catch (err) {
      throw err;
    }
  };
}

export default new TransactionController();
