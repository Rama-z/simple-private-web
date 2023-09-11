import { Request, Response } from "express";
import transactionRepo from "../repo/transactionRepo";

class TransactionController {
  getHistory = async (req: Request, res: Response): Promise<any> => {
    try {
      const result = await transactionRepo.getHistory(
        req?.app?.locals?.decodedPayloads?.id
      );
      return res.status(201).json({
        result,
      });
    } catch (err) {
      return res.status(501).json({
        err,
      });
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

  addHistory = async (req: Request, res: Response): Promise<Response> => {
    return res.send();
  };

  removeHistory = async (req: Request, res: Response): Promise<Response> => {
    return res.send();
  };

  gotHistory = async (req: Request, res: Response): Promise<Response> => {
    return res.send();
  };
}

export default new TransactionController();
