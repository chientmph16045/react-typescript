import React from "react";

const CartPage=()=>{
    var cart:any=[];
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart') || "");
        console.log(cart)
    }
        
    
    return(
        <div>
            cart
            <table>
                <thead>
                    <tr>
                        <td>stt</td>
                        <td>Tên sản phẩm</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{cart}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartPage