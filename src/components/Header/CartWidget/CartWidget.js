import {Link} from 'react-router-dom';
import {useCart} from "../../../providers/CartProvider";

function CartWidget() {
    const {totalQuantity} = useCart();

    return (<div className="navbar-end cart">
        <Link className="navbar-item  cart-wrapper" to={`/cart`}>
            <span className="material-symbols-rounded">shopping_cart</span>
            <div className="cart-item-counter">{totalQuantity}</div>
        </Link>
    </div>)
}

export default CartWidget;