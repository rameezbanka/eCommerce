import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";


export const Cart = ()=>{
   

    const { PRODUCTS, cartItems,getTotalAmount} = useContext(ShopContext);
    const totalAmount = getTotalAmount();
    const navigate = useNavigate();
    console.log("CartItems:", cartItems);
    console.log("TotalAmount:", totalAmount);
    const handleCheckout = ()=>{
        navigate("/confirmation")
    }
    return (
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id]>0){
                        return <CartItem data = {product} />;
                    }
                })}

            </div>
            {totalAmount > 0 ?
            <div className="checkout">
                <p> Subtotal: Rs {totalAmount}</p>
                <button onClick={()=>navigate("/")}> Continue Shopping </button>
                <button onClick={handleCheckout}> Checkout </button>
            </div>
            : <h1> Your Cart is Empty </h1>}
        </div>
    );
};