import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import Home from './components/Home/Home';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    </div>
)


