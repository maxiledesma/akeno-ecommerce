import {createContext, useState} from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalQuantity = cart.reduce((i, currentItem) => i + currentItem.quantity, 0);

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clearCart, totalQuantity, totalPrice, cart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}