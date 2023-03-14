import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../interface/product";
import { Link } from "react-router-dom";

type Props = {}

const List = (props: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async()=>{
            const {data}=await axios.get("http://localhost:8000/api/products");
            console.log(data)
            setProducts(data.product);
        })()
        // http://localhost:8000/api/products
        // fetch("http://localhost:8000/api/products")
        //     .then((res) => {
        //         return res.json()
        //     }).then((data) => {
        //         console.log(data);
        //         setProducts(data.product)
        //     })
        //     .catch(e => {
        //         console.log("e", e)
        //     })
    }, [])
    const removeItem =async (_id: number) => {
        console.log(_id)
        try {
            
            if (confirm("bạn có chắc muốn xóa!") == true) {
                const {data} =await axios.delete(
                `http://localhost:8000/api/products/${_id}`
                );
                // fetch("http://localhost:8000/api/products/" + _id, {
                //     method: "DELETE",
                //     headers: {
                //         "Content-Type": "application/json"
                //     }
                // })
                setProducts(products.filter((item) => item._id !== _id))
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (

        <>
            {products.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><img src={item.image}/></td>
                    <td>{item.description}</td> 
                    <td >
                        <button className="action2"><Link to={`/admin/update/${item._id}`}>Update</Link></button>
                    </td>
                    <td>
                        <button className="action1" onClick={() => removeItem(item._id!)}>remove</button>

                    </td>
                </tr>
            ))}
        </>
    )
}

export default List;