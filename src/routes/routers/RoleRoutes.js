import { Router } from "express";
import { RolesController } from "../../controllers/RolesController.js";

export class RoleRoutes {
  static router = Router();

  static {
    this.router.post("/create", RolesController.create);
    this.router.get("/list", RolesController.list);
    this.router.put("/update/:rolId", RolesController.update);
    this.router.delete("/delete/:rolId", RolesController.delete);
    this.router.put("/assign", RolesController.assignRole);
  }
}