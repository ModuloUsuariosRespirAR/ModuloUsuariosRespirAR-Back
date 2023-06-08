import { Router } from "express";
import { Keyrock } from "../../services/Keyrock.js";
import { LoginController } from "../../controllers/LoginController.js";

export class LoginRoutes {
  static router = Router();

  static {
    this.router.post("/retrieve", LoginController.retrieveSession);
    this.router.post("/", LoginController.login);
  }
}
