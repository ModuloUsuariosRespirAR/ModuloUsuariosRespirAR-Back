import { Router } from "express";
import { Keyrock } from "../../services/Keyrock.js";

export class LoginRoutes {
  static router = Router();

  static {
    this.router.post("/", async (req, res) => {
      const { username, password } = req.body;

      const accessToken = await Keyrock.getAccessToken(username, password);
      const apiToken = await Keyrock.getApiToken(
        username,
        password,
        accessToken
      );

      if (accessToken.error || apiToken.error) {
        res
          .status(apiToken.error.statusCode)
          .json({ error: apiToken.error.message });
      } else {
        res.json({
          accessToken,
          apiToken,
        });
      }
    });
  }
}
