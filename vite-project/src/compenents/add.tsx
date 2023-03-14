import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { IProduct } from "../interface/product";
import axios from "axios"
import { render } from "react-dom";


const Add = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();

    const navigate = useNavigate();
    // const [file,setImage]=useState('');
    // const base64 = (im:any)=>{
    //     console.log(im[0])
    //     console.log(URL.createObjectURL(im[0]))
    //     const reader =new FileReader();
    //     reader.onloadend=()=>{
    //         setImage(render.toString())
    //     }
    //     reader.readAsDataURL(im[0])
    //}
    const onAdd: SubmitHandler<IProduct> = async (product) => {
        console.log(product.image)
        // base64(product.image)
        try {
            const { data } = await axios.post("http://localhost:8000/api/products", product)
            navigate("/admin")
        } catch (error) {

        }
        // try {
        //      props.onAdd(product)
        //     fetch("http://localhost:8000/api/products/",{
        //         method:"POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     }).then((res)=>{
        //         return res.json()
        //     }).then((product)=>{
        //         console.log(product.product)
        //         props.onAdd(product)
        //     })
        // } catch (error) {

        // }
    }
    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onAdd)}>
            <div className="flex flex-col mb-3">
                    <label className="font-bold">Name</label>
                    <input className="border outline-none" type="text"  {...register("name", { required: true, minLength: 5 })} />
                    {errors.name && errors.name.type === "required" && (
                        <span>Bắt buộc nhập trường này</span>
                    )}
                </div>
                <div className="flex flex-col mb-3">
                    <label className="font-bold" >Giá</label>
                    <input className="border outline-none" type="number" {...register("price",{required:true})} />
                    {errors.price && errors.price.type==="required" && (<span>Bắt buộc nhập trường này</span>)}
                </div>
                 <div className="flex flex-col mb-3">
                    
                    <label className="font-bold" >Ảnh</label>
                    <input className="border outline-none" type="text" {...register("image",{required:true})} />
                    {errors.image && errors.image.type==="required" && (<span>Bắt buộc nhập trường này</span>)}
                </div>
                <div className="flex flex-col mb-3">
                    <label className="font-bold" >Mô tả</label>
                    <textarea className="border outline-none" cols={30} rows={5} {...register("description",{required:true})} />
                    {errors.description && errors.description.type==="required" && (<span>Bắt buộc nhập trường này</span>)}
                </div>
                <button className="bg-red-400 text-white block w-full p-2">add new</button>
            </form>
        </div>
    )
}

export default Add;