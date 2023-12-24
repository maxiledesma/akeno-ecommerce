import {useState} from "react";

export default function ItemCount ( {stock, initial, onAdd} ) {
    const [qty, setQty] = useState(0);
    const [qtyAdded, setQtyAdded] = useState(0);

    function plusQty() {
        if (qty < stock) {
            setQty ( qty + 1 );
        }
    }

    function minusQty() {
        if (qty > 1) {
            setQty ( qty - 1 );
        }
    }

    return (<div>
            <p className="control">
                <button className="button detail-button" onClick={minusQty}>
                    <span className="material-symbols-rounded">remove</span>
                </button>
            </p>
            <p className="control">
                <input className="input is-normal qty" type="text" value={qty}/>
            </p>
            <p className="control">

                <button className="button detail-button" onClick={plusQty}>
                    <span className="material-symbols-rounded">add</span>
                </button>
            </p>
        </div>
    );
}