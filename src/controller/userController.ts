import { Request, Response } from "express";
// import wbm from

class UserController {
  async getAllUser(req: Request, res: Response): Promise<Response> {
    return res.send();
  }
  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      // const result = await authRepo.login(req.body);
      return res.status(201).json({
        result: "success",
      });
    } catch (err: any) {
      return res.status(err.status).json({
        status: err.status,
        error: err,
      });
    }
  };
}

export default new UserController();
