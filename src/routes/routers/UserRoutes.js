import { Router } from "express";
import { UsersController } from "../../controllers/UsersController.js";

export class UserRoutes {
  static router = Router();

  static {
    this.router.post("/create", UsersController.create);
    this.router.post("/update/:userId", UsersController.update)
    this.router.delete("/delete/:userId", UsersController.delete);
    this.router.get("/list", UsersController.list);
  }
}
