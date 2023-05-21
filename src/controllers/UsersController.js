import { Keyrock } from "./../services/Keyrock.js";

export class UsersController {
  static async list(req, res) {
    const token = req.headers["api-token"];
    const result = await Keyrock.getUsers(token);

    res.json(result);
  }
}
