import React, { createContext, useState } from "react";
export const CartProductContext = createContext([])


function CartProductsProvider({ children }) {
    const [cart, setCart] = useState([])

    const addProduct = (product) => {
        if (!cart.includes(product)) {
            localStorage.setItem("cart", JSON.stringify([...cart, product]))
            setCart([...cart, product])
        }
    }
    const addCacheProduct = (products) => {
        const updatedCart = [...cart];
        products.forEach((product) => {
            updatedCart.push(product);
        });
        setCart(updatedCart);
    }
    const removeProduct = (product) => {
        const newcart = cart.filter((element) => element.id != product.id)
        setCart(newcart)
        localStorage.setItem("cart", JSON.stringify(newcart))
    }

    return (
        <CartProductContext.Provider value={{ cart, addProduct, removeProduct, addCacheProduct }}>
            {children}
        </CartProductContext.Provider>
    )
}

export default CartProductsProvider