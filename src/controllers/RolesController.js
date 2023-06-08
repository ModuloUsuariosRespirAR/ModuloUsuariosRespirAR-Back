import { Keyrock } from "./../services/Keyrock.js";



export class RolesController {

    static async create(req, res) {
        const token = req.headers["x-auth-token"];
        const rolName = req.body.rolName;

        const result = await Keyrock.createRole(rolName, token);

        if(result.error){
            res.status(result.error.statusCode).json(result)
          }else{
            res.json(result)
          }
    }

    static async getRole(req, res) {

      const token = req.headers["x-auth-token"];
      const rolId = req.params.rolId;
      const result = await Keyrock.getRole(rolId, token);
      
      if(result.error){
        res.status(result.error.statusCode).json(result)
      }else{
        res.json(result)
      }
    }

    static async list(req, res) {
      const token = req.headers["x-auth-token"];
      const result = await Keyrock.getRoles(token);
      
      if(result.error){
        res.status(result.error.statusCode).json(result)
      }else{
        res.json(result)
      }
    }

    static async update(req, res) {
      const token = req.headers["x-auth-token"];
      const rolId = req.params.rolId;
      const rolName = req.body.rolName;

      const result = await Keyrock.updateRole(rolName, rolId, token);

      if(result.error){
        res.status(result.error.statusCode).json(result)
      }else{
        res.json(result)
      }
    } 

    static async delete(req, res) {

      const rolId = req.params.rolId;
      const token = req.headers["x-auth-token"];

      const result = await Keyrock.deleteRole(rolId, token);

      if(result.error){
        res.status(result.error.statusCode).json(result)
      }else{
        res.json(result)
      }
    }

    static async assignRole(req, res) {
      const token = req.headers["x-auth-token"];
      const {rolId, userId} = req.body;

      const result = await Keyrock.assingRole(rolId, userId, token);

      if(result.error){
        res.status(result.error.statusCode).json(result)
      }else{
        res.json(result)
      }      
    }
}