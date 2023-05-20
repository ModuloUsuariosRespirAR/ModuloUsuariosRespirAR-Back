import { Router } from "express";

export default class UserRoutes{

static router = Router()

static {
    this.router.get("/" , (req,res) => {
        res.send("USERS")
    })
}

}
