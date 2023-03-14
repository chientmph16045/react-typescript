import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../interface/product";
import "./detail.css"
import relate from "../../layoutpage/img/relate-product-1.png"
const Detail = () => {
    const [prouductOne, setProductOne] = useState<IProduct>()
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:8000/api/products/" + id)
            setProductOne(data.product)
        })();
    }, [])

    return (
        <div>
            <div className="detail-product">
                <div className="product-info">
                    <h2>{prouductOne?.name}</h2>
                    <p className="price">$ {prouductOne?.price}</p>
                    <p className="desc">{prouductOne?.description}</p>
                    <form action="">
                        <input type="text" placeholder="Quantity" />
                        <button type="submit">Add To Cart</button>
                    </form>
                </div>
                <div className="product-img shadow">
                    <img src={`${prouductOne?.image}`} alt="" />
                </div>
            </div>
            <section className="relate">
                <h2>Related Products</h2>
                <div className="relate-product">
                    <div className="relate-product__item">
                        <img src={relate} alt="" />
                            <h3>Fresh and Healthy Mixed Mayonnaise Salad</h3>
                            <p>$30</p>
                            <button>Add To Cart</button>
                    </div>
                    
                    <div className="relate-product__item">
                        <img src={relate} alt=""/>
                            <h3>Fresh and Healthy Mixed Mayonnaise Salad</h3>
                            <p>$30</p>
                            <button>Add To Cart</button>
                    </div>
                   
                    <div className="relate-product__item">
                        <img src={relate} alt="" />
                            <h3>Fresh and Healthy Mixed Mayonnaise Salad</h3>
                            <p>$30</p>
                            <button>Add To Cart</button>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Detail