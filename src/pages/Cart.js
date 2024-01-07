// ShoppingCart.js
import React from 'react';
import {useCart} from "../providers/CartProvider";

const Cart = () => {
    const { cartItems, totalQuantity, addItemToCart, removeItemFromCart } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Items: {totalQuantity}</p>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.title} - Quantity: {item.quantity}
                        <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {/* Add items to cart */}
            {/* Example: */}
            <button onClick={() => addItemToCart({ id: 1, name: 'Product', quantity: 1 })}>
                Add Product
            </button>
        </div>
    );
};

export default Cart;