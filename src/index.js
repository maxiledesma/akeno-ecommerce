// 1- Importar las librerias React y ReactDOM

import React from "react";                   // React: Define que es un componente y como funcionan entre si
import ReactDOM from "react-dom/client" ;    // ReactDOM: Sabe hacer que un componente aparezca en pantalla

// 2- Import components
import App from "./App";

import "./app.css";

// 3- Obtener una referencia al div con id "root"
const el = document.getElementById("root");

// 4- Indicamos a React que tome el control del elemento
const root = ReactDOM.createRoot(el);

// 5- Nostrar el componente en pantalla
root.render(
    <App/>
)