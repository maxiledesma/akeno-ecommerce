import {useState} from "react";

export default function ItemDetail( {product} ) {
    const {image, title, description, price, rating} = product;

    function handleQtyToAdd() {

    }

    return (<div className="container pdp mb-6 mt-4">
        <div className="inner image"><img src={image} alt={title}/></div>
        <div className="inner product-details">
            <h3 className="title is-3 has-text-weight-bold">{title}</h3>
            <hr/>
            <h4 className="title is-4 mb-5"><span className="has-text-weight-bold">Precio:</span> ${price}.-</h4>
            <div className="field is-grouped qty-box">
                <div className="field has-addons mr-4">

                </div>

                <button className="button detail-button">Añadir al carrito</button>
            </div>


            <hr/>
            <p>{description}</p>
            <hr/>
            <div>
                <span className="material-symbols-rounded r-1 r-2 r-3 r-4 r-5">grade</span>
                <span className="material-symbols-rounded r-2 r-3 r-4 r-5">grade</span>
                <span className="material-symbols-rounded r-3 r-4 r-5">grade</span>
                <span className="material-symbols-rounded r-4 r-5">grade</span>
                <span className="material-symbols-rounded r-5">grade</span>
            </div>
        </div>
    </div>
    );
}