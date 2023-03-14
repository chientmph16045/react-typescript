import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/product";
import "./products.css"

type Props = {}
const Products = (prop: Props) => {
    const [product, setProduct] = useState<IProduct[]>([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((res) => {
                return res.json()
            }).then((data) => {
                setProduct(data.product)
            })
            .catch(error => {

            })
    }, [])
    return (
        <div>
            <main>
                <div id="category">
                    <ul id="cate-list">
                        <li><a>product 1</a></li>
                        <li><a>product 3</a></li>
                        <li><a>product 4</a></li>
                        <li><a>product 5</a></li>
                    </ul>
                </div>
                <div id="list-product">
                    {product.map((item, index) => (
                        <div className="popular__item" key={item._id}>
                            <div className="shadow">
                                <Link to={`/detail/${item._id}`}>
                                    <img src={`${item.image}`} alt="" />
                                </Link>
                            </div>

                            <h3><Link to={`/detail/${item._id}`}>{item.name}</Link></h3>
                            <div className="relate-product__item">
                                <p>$ {item.price}</p>
                                <button className="shadow">Add To Cart</button>
                            </div>
                        </div>

                    ))}
                </div>
            </main>
        </div>
    )
}

export default Products