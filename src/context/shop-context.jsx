
import React, { createContext, useState,useEffect } from "react";


export const ShopContext = createContext(null);
 
export const ShopContextProvider = (props)=>{ 

    const [PRODUCTS, setPRODCUTS] = useState([]);

 useEffect(() => {
   const fetchProducts = async () => {
     try {
       const response = await fetch("https://fakestoreapi.com/products");
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const data = await response.json();
       console.log("Fetched Products:", data);
       setPRODCUTS(data);
     } catch (error) {
       console.error("Error fetching products:", error);
     }
   };

   fetchProducts();
 }, []);


  const [cartItems, setCartItems] = useState([]);

    const getTotalAmount = ()=>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
                totalAmount +=cartItems[item]*itemInfo.price;
            }  
        }
        return totalAmount;
    }
    
    
    const addToCart = (itemId) => {
        const updatedCart = { ...cartItems }; // Create a copy of the cartItems object
        if (updatedCart[itemId]) {
          updatedCart[itemId] += 1; // Increase the quantity if the item exists
        } else {
          updatedCart[itemId] = 1; // Add the item if it doesn't exist
        }
        setCartItems(updatedCart);
      };
      
      const removeFromCart = (itemId) => {
        const updatedCart = { ...cartItems };
        delete updatedCart[itemId]; // Remove the item from the cart by deleting the property
        setCartItems(updatedCart);
      };
     const updateCartItemCount = (newAmount, itemId)=>{
        console.log("updating cart:", itemId);
        if (newAmount >= 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
          }
     }
     //console.log("ContextValue:", ContextValue);
    const ContextValue = {PRODUCTS,cartItems,addToCart,removeFromCart, updateCartItemCount,getTotalAmount};
   
    return (
        <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
    );
};