import { Request, Response } from "express";

class AuthRepository {
  register(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      return resolve({
        email: email,
        password: password,
        message: "done",
      });
    });
  }
}

export default new AuthRepository();
