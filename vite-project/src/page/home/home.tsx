import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IProduct } from "../../interface/product";
import banner from "../../layoutpage/img/banner.png"
import "./home.css"
type Props = {}
const Home = (prop: Props) => {
    const [product, setProduct] = useState<IProduct[]>([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((res) => {
                return res.json()
            }).then((data) => {
                setProduct(data.product)
            }).catch(error => {
                
            })
    }, [])
    
    const Cart=(_id:number)=>{
          const cart =axios.get("http://localhost:8000/api/products/" +_id);
    }
    return (
        <div>
            <section className="banner">
                <div className="banner__info">
                    <p>Quality Food</p>
                    <h2>Fastest </h2>
                    <h2><span>Delivery</span> &</h2>
                    <h2>Easy <span>Pickup</span></h2>
                    <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                    </p>
                </div>
                <div className="banner__img">
                    <img src={banner} alt="" />
                </div>
            </section>
            <section className="popular">
                <h2>Our Popular Dishes</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqut enim ad minim </p>

                <div className="filter">
                    <select name="" id="filter-select">
                        <option value="all">Tất cả</option>
                        <option value="under30">Dưới 30 $</option>
                        <option value="over30">Trên 30 $</option>
                    </select>
                </div>

                <div className="popular-list">
                    
                    
                    {product.map((item) => (
                        
                            <div className="popular__item" key={item._id}>
                                <div className="shadow">
                                    <Link to={`/detail/${item._id}`}>
                                        <img src={`${item.image}`} alt="" />
                                    </Link>
                                </div>

                                <h3><Link to={`/detail/${item._id}`}>{item.name}</Link></h3>
                                <div className="relate-product__item">
                                    <p>$ {item.price}</p>
                                    <button className="shadow" onClick={()=>Cart(item._id!)}>Add To Cart</button>
                                </div>
                            </div>

                       
                    ))}

                </div>


            </section>
            <section className="contact">
                <h2>Contact us</h2>
                <form action="">
                    <div className="col">
                        <div className="row">
                            <label >Name</label>
                            <input type="text" placeholder="Enter your name..." />
                        </div>
                        <div className="row">
                            <label>Subject</label>
                            <input type="text" placeholder="Enter subject..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <label >Email Address</label>
                            <input type="text" placeholder="Your email address..." />
                        </div>
                        <div className="row">
                            <label>Enquiry type</label>
                            <select name="" id="">
                                <option value="">Advertising</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label >Messages</label>
                        <textarea name="" id="" cols={30} rows={10} placeholder="Enter your messages..."></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </section>

        </div>
    )
}

export default Home