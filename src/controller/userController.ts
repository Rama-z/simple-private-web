import { Request, Response } from "express";

class UserController {
  getAllUser(req: Request, res: Response): Response {
    return res.send("Get all user Success");
  }
}

export default new UserController();
