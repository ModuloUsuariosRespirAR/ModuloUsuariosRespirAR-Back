import { Router } from "express";
import { LoginRoutes } from "./routers/LoginRoutes.js";

export default class AppRouter {
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.use("/login", LoginRoutes.router);

    return this.router;
  }
}
