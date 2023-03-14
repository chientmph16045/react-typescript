import express from "express"
import { signin, signup } from "../controller/user.controller"
const routerUser = express.Router()

routerUser.post("/signin",signin)
routerUser.post("/signup",signup)

export default routerUser