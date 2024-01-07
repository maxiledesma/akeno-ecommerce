import {useParams} from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Product() {

    const {sku} = useParams();


    return (
        <ItemDetailContainer sku={sku}/>
    )
}