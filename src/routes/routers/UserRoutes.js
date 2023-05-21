import { Router } from "express";
import { Keyrock } from "../../services/Keyrock.js";
import { UsersController } from "../../controllers/UsersController.js";
export class UserRoutes {
  static router = Router();

  static {
    this.router.get("/list", UsersController.list);
  }
}
