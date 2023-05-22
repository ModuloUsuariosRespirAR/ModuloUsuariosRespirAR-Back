import { Keyrock } from "./../services/Keyrock.js";

export class UsersController {
  static async list(req, res) {
    const token = req.headers["api-token"];
    const result = await Keyrock.getUsers(token);

    if(result.error){
      res.status(result.error.statusCode).json(result)
    }else{
      res.json(result)
    }
  }

  static async delete(req, res) {
    const token = req.headers["api-token"];
    const userId = req.params.userId;
    const result = await Keyrock.deleteUser(token, userId);
    
    if(result.error){
      res.status(result.error.statusCode).json(result)
    }else{
      res.json(result)
    }
  }
}
