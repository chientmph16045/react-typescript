import mongoose from "mongoose";
import{createHmac} from "crypto"
const UserShema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String
    }
},{timestamps:true});
UserShema.methods={
    authenticate(password){
        return this.password===this.ecryptPassword(password)
    },
    ecryptPassword(password){
        if(!password) return "";
        return createHmac("sha256","123456").update(password).digest("hex")
    }
}
UserShema.pre("save",function(next){
    this.password=this.ecryptPassword(this.password)
    next()
})
export default mongoose.model("User",UserShema)