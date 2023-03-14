import Product from "../models/products";

export const list =async(req,res)=>{
    try {
        const product=await Product.find();
        return res.status(200).json({
            product,
        })
    } catch (error) {
        
    }
}

export const read =async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Product.findOne({_id:id});
        return res.status(200).json({
            product
        })
    } catch (error) {
        res.status(400).json({
            message:"product not found",
        })
    }
}
export const add= async(req,res)=>{
    try {
        const body=req.body;
        const product=await new Product(body).save();
        return res.status(200).json({
            product,
        })
    } catch (error) {
        res.status(404).json({
            message:"không thêm sản phẩm mới được",
        })
    }
}
export const update=async(req,res)=>{
    try {
        const body=req.body;
        const id= req.params.id;
        const product=await Product.findOneAndUpdate({_id:id},body,{new:true});
        res.status(200).json({
            product,
        })
    } catch (error) {
        res.status(404).json({
            message:"không thể cập nhật sản phẩm"
        })
    }
}
export const remove=async(req,res)=>{
    try {
        const id=req.params.id;
        console.log(id);
        const product=await Product.findOneAndDelete({_id:id});
        return res.status(200).json({
            product,
            message:"xóa thành công"
        })
    } catch (error) {
        res.status(400).json({
            message: "Xoa san pham khong thanh cong",
        });
    }
}