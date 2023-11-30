import {useParams} from "react-router-dom";
import {getCategory, getProducts, getProductsByCategoryId} from "../asyncMock";
import {useState, useEffect} from "react";
import ItemList from "../components/ItemListContainer/ItemList/ItemList";

function Category() {
    const {categoryId} = useParams();
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategory(categoryId)
            .then(response => {
                setCategory(response)
            })
            .catch(error => {
                console.error(error)
            });

        getProductsByCategoryId(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            });
    }, [categoryId]);

    return (
        <div className="container">
            <h3 className="title is-3 mb-5">Categoría: <span className="has-text-weight-bold">{category.title}</span></h3>
            <ItemList products={products}/>
        </div>
    );
}

export default Category;