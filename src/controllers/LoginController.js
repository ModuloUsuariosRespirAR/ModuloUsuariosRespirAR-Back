import { Keyrock } from "./../services/Keyrock.js";

export class LoginController {
  static async login(req, res) {
    const { username, password } = req.body;

    const accessToken = await Keyrock.getAccessToken(username, password);
    const apiToken = await Keyrock.getApiToken(username, password, accessToken);
    const user = await Keyrock.getUserInfo(accessToken);

    if (accessToken.error || apiToken.error) {
      res
        .status(apiToken.error.statusCode)
        .json({ error: apiToken.error.message });
    } else {
      res.json({
        accessToken,
        apiToken,
        user,
      });
    }
  }
}
