import {Link} from 'react-router-dom';
import {getCategories} from "../../../asyncMock";
import {useEffect, useState} from "react";

function NavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(response => {
                setCategories(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return <div className="navbar-start">
        <Link className="navbar-item" to={`/`}>Inicio</Link>

        {categories.map((category) =>{
            return (
                <Link key={category.id} className="navbar-item" to={`/category/${category.id}`}>{category.title}</Link>
            )
        })}

        <Link className="navbar-item" to={``}>¿Quienes somos?</Link>
    </div>
}

export default NavBar;