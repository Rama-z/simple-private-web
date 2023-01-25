import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isLogin = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: 401,
      message: "Login first",
    });
  }
  const token: string = req.headers.authorization.split(" ")[1];
  try {
    const credential: string | object = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "",
      { issuer: process.env.JWT_ISSUER_KEY }
    );

    if (credential) {
      next();
    }
    return res.status(401).json({
      status: 401,
      message: "token invalid",
    });
  } catch (err) {
    return res.send(err);
  }
};
