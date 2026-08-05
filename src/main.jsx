import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";

import { CartProvider } from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(

    <StrictMode>

        <CartProvider>

            <BrowserRouter>

                <ScrollToTop />

                <App />

            </BrowserRouter>

        </CartProvider>

    </StrictMode>

);