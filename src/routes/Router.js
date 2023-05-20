import { Router } from "express"
import UserRoutes from "./routers/UserRoutes.js"

export default class AppRouter{

constructor(){

this.router = Router()

}

  setRoutes(){


    this.router.use("/users", UserRoutes.router)



    return this.router
}


}

