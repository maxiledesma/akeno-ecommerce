import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetails/ItemDetail";
import {useParams} from "react-router-dom";
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../config/firebase";

export default function ItemDetailContainer( {id} ) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { sku } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "product", sku);

        getDoc(docRef)
            .then((response) => {
                const data = response.data();

                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoading(false);
            });
    }, [sku]);

    return (<div className="container pdp mb-6 mt-4">
            <ItemDetail {...product} />
        </div>
    );
}