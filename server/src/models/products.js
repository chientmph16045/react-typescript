import mongoose from "mongoose";

const productShema=mongoose.Schema({
    name:{
        type:String,
        maxlength:225
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    description:{
        type:String
    }
});

export default mongoose.model("Product",productShema)