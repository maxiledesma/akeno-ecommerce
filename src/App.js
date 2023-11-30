// Components
import { Helmet } from "react-helmet";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Error404 from "./pages/Error404";

import "bulma/css/bulma.css"

function App() {

    return <div>
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0" />
        </Helmet>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="category/:categoryId" element={<Category/>}/>
                    <Route path="product/:productId" element={<Product/>}/>

                    <Route path="*" element={<Error404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;