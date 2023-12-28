// Components
import { Helmet } from "react-helmet";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Error404 from "./pages/Error404";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import Orders from "./pages/Orders";
import Success from "./pages/Success";
import Login from "./pages/Login";
import OrderDetail from "./pages/OrderDetail";

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
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="my-account" element={<MyAccount/>}/>
                    <Route path="my-account/orders" element={<Orders/>}/>
                    <Route path="my-account/order/:orderId" element={<OrderDetail/>}/>
                    <Route path="success" element={<Success/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;