function CartWidget() {
    return <div className="navbar-end cart">
        <a className="navbar-button cart-wrapper">
            <span className="material-symbols-rounded">shopping_cart</span>
            <div className="cart-item-counter">0</div>
        </a>
    </div>
}

export default CartWidget;