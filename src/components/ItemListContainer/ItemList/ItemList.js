import Item from "../Item/Item";

function ItemList({products}) {
    return (
        <div className="products">

            {products.map(product =><Item {...product}/>)}
        </div>
    )
}

export default ItemList;