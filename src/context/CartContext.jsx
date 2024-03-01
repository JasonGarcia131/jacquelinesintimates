import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addToCart = (id) => {
        console.log("added to cart", id)
    }
  return (
    <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
  )
}
