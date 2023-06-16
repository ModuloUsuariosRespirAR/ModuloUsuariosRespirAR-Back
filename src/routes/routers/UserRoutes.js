import { Router } from "express";
import { UsersController } from "../../controllers/UsersController.js";
import { Authorizations } from "../../middlewares/authorizations.js";

export class UserRoutes {
  static router = Router();

  static {
    this.router.post("/create", Authorizations.adminOnly, UsersController.create);
    this.router.get("/user/:userId", UsersController.getUser);
    this.router.get("/user/:userId/roles", UsersController.getUserRoles);
    this.router.put("/update/:userId", Authorizations.readOnlyDenied, UsersController.update);
    this.router.delete("/delete/:userId", Authorizations.adminOnly,UsersController.delete);
    this.router.get("/list", UsersController.list);
  }
}
