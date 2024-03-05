import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [itemAmount, setItemAmount] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const total = cart.reduce((accumulator, currentItem)=>{
            return accumulator + currentItem.price * currentItem.amount
        },0);
        setTotal(total)
    });

    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator, currentItem)=>{
                return accumulator + currentItem.amount;
            },0);

            setItemAmount(amount);
        }
    });

    const addToCart = (item, id) => {
        const newItem = {...item, amount: 1}
        const cartItem = cart.find(item => item.id === id)
        if(cartItem) {
            const newCart = [...cart].map(item=>{
                if(item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                }else{
                    return item;
                }
            });
            setCart(newCart);
            console.log(newCart)
        }else{
            setCart([...cart, newItem])
            console.log(newItem)
        }
    }   

    const removeFromCart = (id) => {
        const newCart = cart.filter(item=>{
            return item.id !== id;
        })
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([]);
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item=>item.id === id)
        addToCart(cartItem, id)
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find(item=>item.id === id)
        if(cartItem){
            const newCart = cart.map(item=>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount - 1};
                }else{
                    return item
                }
            });
            setCart(newCart)
        }
            if(cartItem.amount < 2){
                removeFromCart(id)
            }
    
    }
  return (
    <CartContext.Provider value={{addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, cart, total}}>{children}</CartContext.Provider>
  )
}
