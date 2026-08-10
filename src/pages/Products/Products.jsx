import "./Products.css";

import { useState } from "react";
import { useEffect } from "react";
import {
    useSearchParams,
    useNavigate
} from "react-router-dom";

import {

    Minus,

    Plus

} from "lucide-react";



/* ================= Images ================= */

import sweet1 from "../../assets/images/sweetsPhotos/pootharekulu/WhatsApp Image 2026-08-03 at 2.03.33 PM-3.jpeg";
import sweet2 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
import sweet3 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
import sweet4 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
import sweet5 from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";

import horlicks from "../../assets/images/sweetsPhotos/pootharekulu/horlicks-pootharekulu.jpeg";
import boost from "../../assets/images/sweetsPhotos/pootharekulu/boost-pootharekulu.jpeg";

import sugarMamidiThandra from "../../assets/images/sweetsPhotos/thandra/Sugar-Mamidi-Thandra.jpeg";
import thatiThandraRoll from "../../assets/images/sweetsPhotos/thandra/Thati-Thandra-Roll.jpeg";
import thatiThandra from "../../assets/images/sweetsPhotos/thandra/Thati-Thandra.jpeg";
import bellamMamidiThandra from "../../assets/images/sweetsPhotos/thandra/Bellam-Mamidi-Thandra.jpeg";

import undalu from "../../assets/images/sweetsPhotos/undalu/undalu.jpeg";
import garajeelu from "../../assets/images/sweetsPhotos/garajeelu/garajeelu.jpeg";

import useCart from "../../hooks/useCart";

function Products() {

    const {

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity

    } = useCart();

    const [searchParams] = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState(

        searchParams.get("category") || "all"

    );

    useEffect(() => {

        setSelectedCategory(

            searchParams.get("category") || "all"

        );

    }, [searchParams]);



    /* ===============================
            Bulk Order WhatsApp
    =============================== */

    /* ===============================
        Custom Order
================================ */

    const handleCustomOrder = () => {

        navigate("/custom-order");

    };

    const navigate = useNavigate();


    /* ===============================
            Products Array
    =============================== */




    const products = [

        /* ===============================
                PUTAREKULU
        =============================== */

        {
            id: 1,
            category: "putarekulu",
            badge: "BESTSELLER",
            image: sweet1,
            name: "Plain Bellam Putarekulu",
            price: 120,
            weights: ["Box (10 pcs)"]
        },

        {
            id: 2,
            category: "putarekulu",
            badge: "POPULAR",
            image: sweet1,
            name: "Plain Sugar Putarekulu",
            price: 120,
            weights: ["Box"]
        },

        {
            id: 3,
            category: "putarekulu",
            badge: "BESTSELLER",
            image: sweet1,
            name: "Bellam Badam & Kaju Putarekulu",
            price: 140,
            weights: ["Box"]
        },

        {
            id: 4,
            category: "putarekulu",
            badge: "POPULAR",
            image: sweet1,
            name: "Sugar Kaju Putarekulu",
            price: 140,
            weights: ["Box"]
        },

        {
            id: 5,
            category: "putarekulu",
            badge: "PREMIUM",
            image: sweet1,
            name: "Bellam Dry Fruits Putarekulu",
            price: 180,
            weights: ["Box"]
        },

        {
            id: 6,
            category: "putarekulu",
            badge: "PREMIUM",
            image: sweet1,
            name: "Sugar Dry Fruits Putarekulu",
            price: 180,
            weights: ["Box"]
        },

        {
            id: 7,
            category: "putarekulu",
            badge: "SPECIAL",
            image: sweet1,
            name: "Special Bellam Dry Fruits Putarekulu",
            price: 250,
            weights: ["Box"]
        },

        {
            id: 8,
            category: "putarekulu",
            badge: "SPECIAL",
            image: sweet1,
            name: "Special Sugar Dry Fruits Putarekulu",
            price: 250,
            weights: ["Box"]
        },
        {
            id: 9,
            category: "putarekulu",
            badge: "BESTSELLER",
            image: sweet1,
            name: "Half Leaf Bellam Dry Fruits Putarekulu",
            price: 350,
            weights: ["Box"]
        },

        {
            id: 10,
            category: "putarekulu",
            badge: "BESTSELLER",
            image: sweet1,
            name: "Half Leaf Sugar Dry Fruits Putarekulu",
            price: 350,
            weights: ["Box"]
        },

        {
            id: 11,
            category: "putarekulu",
            badge: "PREMIUM",
            image: sweet1,
            name: "Full Leaf Bellam Dry Fruits Putarekulu",
            price: 500,
            weights: ["Box"]
        },

        {
            id: 12,
            category: "putarekulu",
            badge: "PREMIUM",
            image: sweet1,
            name: "Full Leaf Sugar Dry Fruits Putarekulu",
            price: 500,
            weights: ["Box"]
        },

        {
            id: 13,
            category: "putarekulu",
            badge: "NEW",
            image: sweet1,
            name: "Kova Dry Fruits Putarekulu",
            price: 400,
            weights: ["Box"]
        },

        {
            id: 14,
            category: "putarekulu",
            badge: "NEW",
            image: horlicks,
            name: "Horlicks Dry Fruits Putarekulu",
            price: 300,
            weights: ["Box"]
        },

        {
            id: 15,
            category: "putarekulu",
            badge: "NEW",
            image: boost,
            name: "Boost Dry Fruits Putarekulu",
            price: 300,
            weights: ["Box"]
        },

        {
            id: 16,
            category: "putarekulu",
            badge: "HEALTHY",
            image: sweet1,
            name: "Sugar Free Dry Fruits Putarekulu",
            price: 350,
            weights: ["Box"]
        },

        {
            id: 17,
            category: "putarekulu",
            badge: "SPICY",
            image: sweet1,
            name: "Karapodi Dry Fruits Putarekulu",
            price: 250,
            weights: ["Box"]
        },

        {
            id: 18,
            category: "putarekulu",
            badge: "KIDS",
            image: sweet1,
            name: "Chocolate Dry Fruits Putarekulu",
            price: 400,
            weights: ["Box"]
        },

        {
            id: 19,
            category: "putarekulu",
            badge: "KIDS",
            image: sweet1,
            name: "Oreo Dry Fruits Putarekulu",
            price: 400,
            weights: ["Box"]
        },

        {
            id: 20,
            category: "putarekulu",
            badge: "POPULAR",
            image: sweet1,
            name: "Honey Dry Fruits Putarekulu",
            price: 300,
            weights: ["Box"]
        },

        {
            id: 21,
            category: "putarekulu",
            badge: "PREMIUM",
            image: sweet1,
            name: "Dates Dry Fruits Putarekulu",
            price: 400,
            weights: ["Box (10 pcs)"]
        },

        /* ===============================
                THANDRA
        =============================== */

        {
            id: 22,
            category: "thandra",
            badge: "POPULAR",
            image: bellamMamidiThandra,
            name: "Bellam Mamidi Thandra",
            price: 350,
            weights: ["1 Kg", "500 g"]
        },

        {
            id: 23,
            category: "thandra",
            badge: "POPULAR",
            image: sugarMamidiThandra,
            name: "Sugar Mamidi Thandra",
            price: 300,
            weights: ["1 Kg", "500 g"]
        },

        {
            id: 24,
            category: "thandra",
            badge: "BESTSELLER",
            image: thatiThandra,
            name: "Thati Thandra",
            price: 400,
            weights: ["1 Kg", "500 g"]
        },

        {
            id: 25,
            category: "thandra",
            badge: "NEW",
            image: thatiThandraRoll,
            name: "Thati Thandra Roll",
            price: 100,
            weights: ["Roll"]
        },
        /* ===============================
                GARAJEELU
        =============================== */

        {
            id: 26,
            category: "garajeelu",
            badge: "TRADITIONAL",
            image: garajeelu,
            name: "Nagaram Garajeelu",
            price: 100,
            weights: ["Box (5 pcs)"]
        },

        /* ===============================
                UNDALU
        =============================== */

        {
            id: 27,
            category: "undalu",
            badge: "HOMEMADE",
            image: undalu,
            name: "Moramorala Undalu",
            price: 100,
            weights: ["Box (12 pcs)"]
        }

    ];

    /* ===============================
            Categories
    =============================== */

    const categories = [
        { id: "all", name: "All", image: sweet1 },
        { id: "putarekulu", name: "Putarekulu", image: sweet1 },
        { id: "thandra", name: "Thandra", image: bellamMamidiThandra },
        { id: "garajeelu", name: "Garajeelu", image: garajeelu },
        { id: "undalu", name: "Undalu", image: undalu },
        { id: "custom", name: "Custom Orders", image: sweet5 }
    ];

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(
                (item) => item.category === selectedCategory
            );

    return (
        <section className="products">

            {/* Heading */}

            <div className="products-heading">

                <span className="section-tag">
                    OUR COLLECTION
                </span>

                <h2>
                    Authentic Andhra Traditional Sweets
                </h2>

                {/* <p>
                    Freshly prepared with premium ingredients from
                    Atreyapuram. Discover our signature Putarekulu,
                    traditional sweets and customized gift packs.
                </p> */}

            </div>

            {/* Categories */}

            <div className="category-wrapper">

                {categories.map((item) => (

                    <div
                        key={item.id}
                        className={`category-card ${selectedCategory === item.id ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(item.id)}
                    >

                        <div className="category-image">
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        <h4>{item.name}</h4>

                    </div>

                ))}

            </div>

            {/* Custom Orders */}


            {selectedCategory === "custom" ? (

                <div className="products-grid">

                    <div className="product-card custom-product-card">

                        {/* Product Image */}

                        <div className="product-image">

                            <img

                                src={sweet5}

                                alt="Bulk & Custom Orders"

                            />

                            <span className="product-badge">

                                BULK

                            </span>

                        </div>

                        {/* Product Content */}

                        <div className="product-content">

                            <h3 className="product-title">

                                Bulk & Custom Orders

                            </h3>

                            <div className="price">

                                Custom Pricing

                            </div>

                            <div className="weight-buttons">

                                <button>

                                    Any Quantity

                                </button>

                            </div>

                            <button

                                className="mobile-whatsapp-btn"

                                onClick={handleCustomOrder}

                            >

                                Order on WhatsApp

                            </button>

                        </div>

                    </div>

                </div>

            ) : (

                <div className="products-grid">

                    {filteredProducts.map((product) => {

                        const cartItem = cartItems.find(

                            (item) => item.id === product.id

                        );

                        return (

                            <div

                                className="product-card"

                                key={product.id}

                            >

                                <div className="product-image">

                                    <img

                                        src={product.image}

                                        alt={product.name}

                                    />

                                    <span className="product-badge">

                                        {product.badge}

                                    </span>

                                </div>

                                <div className="product-content">

                                    <h3 className="product-title">

                                        {product.name}

                                    </h3>

                                    <div className="price">

                                        ₹ {product.price}

                                    </div>

                                    <div className="weight-buttons">

                                        {product.weights.map((weight) => (

                                            <button key={weight}>

                                                {weight}

                                            </button>

                                        ))}

                                    </div>

                                    {

                                        cartItem ? (

                                            <div className="product-qty-box">

                                                <div className="minu-btn">

                                                    <button

                                                        onClick={() =>

                                                            decreaseQuantity(product.id)

                                                        }

                                                    >

                                                        <Minus size={18} />

                                                    </button>

                                                </div>

                                                <span>

                                                    {cartItem.quantity}

                                                </span>

                                                <div className="minu-btn">

                                                    <button

                                                        onClick={() =>

                                                            increaseQuantity(product.id)

                                                        }

                                                    >

                                                        <Plus size={18} />

                                                    </button>

                                                </div>

                                            </div>

                                        ) : (

                                            <button

                                                className="cart-btn"

                                                onClick={() =>

                                                    addToCart(product)

                                                }

                                            >

                                                Add to Cart

                                            </button>

                                        )

                                    }

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </section>
    );
}

export default Products;