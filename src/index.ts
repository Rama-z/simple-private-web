require("express-async-errors");
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import transactionRoutes from "./routes/transactionRoutes";
require("dotenv").config();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
class App {
  public app: Application;
  public text: object = { msg: "Capriconous web API" };
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(jsonParser);
    this.app.disable("etag");
  }

  protected routes(): void {
    this.app.use("/auth", authRoutes);
    this.app.use("/user", userRoutes);
    this.app.use("/transaction", transactionRoutes);
    this.app.get("/", (req, res) => {
      res.send(this.text);
    });
  }
}
const PORT: number = 8050;
const app = new App().app;
app.listen(PORT, () => {
  console.log(`This server running on port ${PORT}`);
});
