import express from "express"
import AppRouter from "./../routes/Router.js"
import cors from "cors"



export default class Server {
    

    
    constructor(puerto, host){

        this.puerto = puerto
        this.host = host
        this.app = express()
        this.router = new AppRouter().setRoutes()
    }

     serverConfig() {
        
        this.app.use(express.json())
        this.app.use(express.urlencoded())
        this.app.use(cors())
        this.app.use(this.router)

        
    }

    initServer(){
        this.app.listen(this.puerto,this.host,()=>{
            console.log(`Server listening on port ${this.puerto}`);
        })
    }


}