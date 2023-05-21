import { Router } from "express";
import { LoginRoutes } from "./routers/LoginRoutes.js";
import { UserRoutes } from "./routers/UserRoutes.js";

export default class AppRouter {
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.use("/login", LoginRoutes.router);
    this.router.use("/users", UserRoutes.router);

    return this.router;
  }
}
