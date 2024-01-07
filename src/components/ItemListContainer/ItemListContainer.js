import {useState, useEffect} from "react";
import {getProducts} from "../../asyncMock";
import ItemList from "./ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams ()

    useEffect(() =>{
        const collectionRef = collection(db, 'product');
        const docResult = categoryId ? query(collectionRef, where("category", "==", categoryId)): collectionRef;

        getDocs (docResult)
            .then ((response)=>{
                setProducts(
                    response.docs.map((doc)=>{
                        return {...doc.data(), id:doc.id}
                    })
                )
            })
    },[categoryId])

    return <div className="container">
        <ItemList products={products}/>
    </div>
}

export default ItemListContainer;
