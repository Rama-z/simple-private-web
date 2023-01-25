import { Request, Response } from "express";
import authRepo from "../repo/authRepo";
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    console.log("sini");
    try {
      const result = await authRepo.register(req.body);
      return res.status(200).json({
        status: 200,
        result,
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        status: 401,
        error: error,
      });
    }
  };
  login(req: Request, res: Response): Response {
    return res.send("Login succeed");
  }
}

export default new AuthController();
