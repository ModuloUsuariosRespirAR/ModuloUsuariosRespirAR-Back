import { Router } from "express";
import { RolesController } from "../../controllers/RolesController.js";

export class RoleRoutes {
  static router = Router();

  static {
    this.router.post("/create", RolesController.create);
  }
}