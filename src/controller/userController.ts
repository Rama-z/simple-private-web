import { Request, Response } from "express";
// import wbm from

class UserController {
  getAllUser(req: Request, res: Response): Response {
    return res.send("Get all user Success");
  }
  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      // console.log(typeof req.body);
      // console.log(req);
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
