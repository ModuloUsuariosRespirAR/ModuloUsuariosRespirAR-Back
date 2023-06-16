import { Router } from "express";
import { RolesController } from "../../controllers/RolesController.js";
import { Authorizations } from "../../middlewares/authorizations.js";

export class RoleRoutes {
  static router = Router();

  static {
    this.router.post("/create", Authorizations.adminOnly, RolesController.create);
    this.router.get("/role/:rolId", RolesController.getRole);
    this.router.get("/list", RolesController.list);
    this.router.put("/update/:rolId", Authorizations.readOnlyDenied, RolesController.update);
    this.router.delete("/delete/:rolId", Authorizations.adminOnly, RolesController.delete);
    this.router.put("/assign", Authorizations.adminOnly, RolesController.assignRole);
  }
}