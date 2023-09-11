import { Request, Response } from "express";
import { TProductController } from "../types";

class ProductController implements TProductController {
  public addProduct = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res.send();
  };
}

export default new ProductController();
