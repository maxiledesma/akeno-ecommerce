import {useEffect, useState} from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "./ItemDetails/ItemDetail";

export default function ItemDetailContainer( {id} ) {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProductData(response);
            })
            .catch(error => {
                console.error(error)
            });
    }, [id]);

    return (<div className="container pdp mb-6 mt-4">
            <ItemDetail product={productData} />
        </div>
    );
}