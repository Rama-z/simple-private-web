import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class AuthController {
  register(req: Request, res: Response): Response {
    return res.send("Register succeed");
  }
  login(req: Request, res: Response): Response {
    return res.send("Login succeed");
  }
}

export default new AuthController();
