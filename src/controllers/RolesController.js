import { Keyrock } from "./../services/Keyrock.js";



export class RolesController {


    static async create(req, res) {
        const token = req.headers["x-auth-token"];
        const rolName = req.body.rolName;

        const result = await Keyrock.createRole(rolName, token);
        console.log(result);
        if(result.error){
            res.status(result.error.statusCode).json(result)
          }else{
            res.json(result)
          }
    }

}