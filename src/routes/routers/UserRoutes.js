import { Router } from "express";
import { UsersController } from "../../controllers/UsersController.js";

export class UserRoutes {
  static router = Router();

  static {
    this.router.post("/", UsersController.create)
    this.router.delete("/:userId", UsersController.delete )
    this.router.get("/list", UsersController.list);
  }
}
