import { Request, Response } from "express";
import db from "../config/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class AuthRepository {
  private queryCheckEmail: string = "select * from users where email = $1";
  private queryRegister: string =
    "insert into users (email, password) values ($1, $2) returning email";
  private queryCheckPassword: string = "select * from users where email = $1";
  register(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      db.query(this.queryCheckEmail, [body.email], (err, result) => {
        if (err) {
          console.log(err);
          return reject({
            status: 500,
            message: "internal server error",
          });
        }
        if (result.rows.length !== 0) {
          return reject({
            status: 401,
            message: "Email already used",
          });
        }
        bcrypt.hash(body.password, 10, (err, hashedPassword) => {
          if (err) {
            return reject({
              status: 402,
              message: "bcrypt error",
            });
          }
          db.query(
            this.queryRegister,
            [body.email, hashedPassword],
            (err, resultRegister) => {
              if (err) {
                console.log(err);
                return reject({
                  status: 401,
                  message: "register error",
                });
              }
              return resolve({
                status: 200,
                message: "Register success",
                // data: resultRegister.rows[0],
              });
            }
          );
        });
      });
    });
  }

  login(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!body.email || !body.password) {
        return reject({
          status: 403,
          message: "request body are undefined/ empty",
        });
      }
      db.query(this.queryCheckPassword, [body.email], (err, passwordResult) => {
        if (err) {
          return reject({
            status: 501,
            message: "get password error",
          });
        }
        const checkedPassword: Promise<boolean> = bcrypt.compare(
          body.password,
          passwordResult.rows[0].password
        );
        if (!checkedPassword) {
          return reject({
            status: 403,
            message: "Wrong password",
          });
        }
        const payload = {
          id: passwordResult.rows[0].id,
          email: passwordResult.rows[0].email,
          password: passwordResult.rows[0].password,
          role: passwordResult.rows[0].roles,
        };
        const token = jwt.sign(
          payload,
          process.env.JWT_SECRET_KEY || "secret",
          {
            expiresIn: "1d",
            issuer: process.env.JWT_ISSUER_KEY,
          }
        );
        return resolve({
          status: 202,
          message: "login success",
          payload: {
            id: passwordResult.rows[0].id,
            email: passwordResult.rows[0].email,
            role: passwordResult.rows[0].roles,
          },
          token,
        });
      });
    });
  }
}

export default new AuthRepository();
