import { Router } from "express";

interface IRouter {
  routes(): void;
}

abstract class MainRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default MainRoutes;
