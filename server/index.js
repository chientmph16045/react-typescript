import  express  from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./src/router/product.router";
import routerUser from "./src/router/user.router";
const cors =require('cors')
const app= express();

mongoose
    .connect("mongodb://localhost:27017/asm")
    .then(()=>{console.log("ket noi db thanh công")})
    .catch((error)=>{console.log("kết nối db thất bại",error)})
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

app.use("/api",router)
app.use("/api",routerUser)
app.listen(8000,()=>console.log("kết nối server thành công"))

