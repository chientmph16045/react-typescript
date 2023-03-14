import React from "react";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom"
import Home from "../../page/home/home";
import './layout.css'
import logo from "../img/logo.png"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import SignIn from "../../page/login/signup";

type Props = {}
const Layout = (prop: Props) => {

    // if (localStorage.getItem('dataUser')) {
    //     var isAdmin = JSON.parse(localStorage.getItem('dataUser') || "") 
    // }
    // if(!isAdmin){
    //     return <Navigate  to="/"/>
    // }
    // const logOut=()=>{
    //     if(confirm("bạn muốn đăng xuất?")==true){
    //         localStorage.removeItem('token')
    //         localStorage.removeItem('dataUser')
    //     } 
    // }
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><a href="">Contact Us</a></li>

                    </ul>
                </nav>
                <div className="account">
                    {/* <a onClick={()=>logOut()}>{isAdmin.email}</a> */}
                    <a href="/signin"><button className="sign-in" >Sign In</button></a>
                    <a href="/signup"><button className="sign-up">Sign Up</button></a>
                </div>
            </header>
            <Outlet />
            
            <footer>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout