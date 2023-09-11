import { Request, Response } from "express";

import { TTaskController } from "../types";

const sequelizeDB = require("../db/models");
const { v4: uuidv4 } = require("uuid");

class TaskController implements TTaskController {
  public getTask = async (req: Request, res: Response): Promise<Response> => {
    const {} = req.params;

    return res.send();
  };

  public addProduct = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res.send();
  };
}

export default new TaskController();
