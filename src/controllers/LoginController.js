import { Keyrock } from "./../services/Keyrock.js";

export class LoginController {
  static async login(req, res) {
    const { username, password } = req.body;

    const accessToken = await Keyrock.getAccessToken(username, password);
    const authToken = await Keyrock.getApiToken(
      username,
      password,
      accessToken
    );
    const user = await Keyrock.getUserInfo(accessToken);

    if (accessToken.error || authToken.error) {
      res.status(authToken.error.statusCode).json({
        error: authToken.error.message,
        statusCode: authToken.error.statusCode,
      });
    } else {
      res.json({
        accessToken,
        "X-Auth-token": authToken,
        user,
      });
    }
  }

  static async retrieveSession(req, res) {
    let accessToken = req.body.accessToken;
    if (accessToken) {
      const user = await Keyrock.getUserInfo(accessToken);
      res.json({ user });
      return;
    }
    res.status(401).json({ error: "Error en Token" });
  }
}
