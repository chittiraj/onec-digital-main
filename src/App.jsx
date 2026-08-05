import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HeroSection from "./components/HeroSection/HeroSection";

import Products from "./pages/Products/Products";
import QA from "./pages/QA/QA";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import BulkOrder from "./pages/BulkOrder/BulkOrder";
import Checkout from "./pages/Checkout/Checkout";

import "./App.css";

function App() {

    return (

        <Routes>

            <Route element={<MainLayout />}>

                {/* ================= Home ================= */}

                <Route
                    path="/"
                    element={<HeroSection />}
                />

                {/* ================= Products ================= */}

                <Route
                    path="/products"
                    element={<Products />}
                />

                {/* ================= Contact ================= */}

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* ================= Bulk Order ================= */}

                <Route
                    path="/bulk-order"
                    element={<BulkOrder />}
                />

                {/* ================= Checkout ================= */}

                <Route
                    path="/checkout"
                    element={<Checkout />}
                />

                {/* ================= About ================= */}

                <Route
                    path="/about"
                    element={<About />}
                />

                {/* ================= Q&A ================= */}

                <Route
                    path="/qa"
                    element={<QA />}
                />

            </Route>

        </Routes>

    );

}

export default App;