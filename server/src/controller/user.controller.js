import User from "../models/user"
import Jwt from "jsonwebtoken"
export const signup=async(req,res)=>{
    try{
        const body=req.body;
        const exisUser=await User.findOne({email:body.email})
        if(exisUser){
            return res.status(404).json({
                message:"email đã tồn tại"
            });
        }
        const user =await new User(body).save();
        return res.status(200).json({
            user,
        })
        
    }catch(error){
        return res.status(404).json({
            message:"không thể thêm mới user"
        })
    }
}


export const signin =async(req,res)=>{
    try {
        const body=req.body;
        const user=await User.findOne({email:body.email});
        if(!user){
            return res.status(404).json({
                message:"email không tồn tại"
            });
        }
        if(!user.authenticate(body.password)){
            return res.status(404).json({
                message:"mật khẩu không chính xác"
            })
        }
        const token=Jwt.sign({_id:user._id},"123456")
        return res.status(200).json({
            user,
            token,
        })
    } catch (error) {
        
    }
}