import {Link} from "react-router-dom";

function Item (params) {
    const {id, title, image, price} = params.product;

    return (
        <div key={id} className="product">
            <h4 className="title  is-4 has-text-centered">{title}</h4>
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <div className="price">
                ${price}.-
            </div>
            <Link className="detail-button" to={`/product/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item;