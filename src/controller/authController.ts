import { Request, Response } from "express";
import { resourceLimits } from "worker_threads";
import authRepo from "../repo/authRepo";
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await authRepo.register(req.body);
      return res.status(result.status).json({
        status: result.status,
        message: result.message,
        result: result.data,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(err.status).json({
        status: err.status,
        error: err,
      });
    }
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await authRepo.login(req.body);
      return res.status(result.status).json({
        result,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(err.status).json({
        status: err.status,
        error: err,
      });
    }
  };
}

export default new AuthController();
