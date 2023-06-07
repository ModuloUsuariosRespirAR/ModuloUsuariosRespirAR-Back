import { Router } from "express";
import { LoginRoutes } from "./routers/LoginRoutes.js";
import { UserRoutes } from "./routers/UserRoutes.js";
import { RoleRoutes } from "./routers/RoleRoutes.js";

export default class AppRouter {
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.use("/login", LoginRoutes.router);
    this.router.use("/users", UserRoutes.router);
    this.router.use("/roles", RoleRoutes.router);
    return this.router;
  }
}
