function ItemListContainer( params ) {
    const {greetings} = params;

    return <div className="container">
        <p>{greetings}</p>
    </div>
}

export default ItemListContainer;