import { Helmet } from "react-helmet";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

import "bulma/css/bulma.css"

function App() {

    return <div>
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200,0,-25" />
        </Helmet>
        <Header/>
        <ItemListContainer greetings="Hola Mundo"/>
    </div>
}

export default App;