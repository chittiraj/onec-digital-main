import "./QuickHelpWidget.css";
import { useState } from "react";
import {
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Store,
    Package,
    ArrowLeft,
    MessageCircleMore,
    X,
} from "lucide-react";

function QuickHelpWidget() {

    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState("home");

    const products = [
        { name: "Bellam Pootharekulu", price: "₹350 / Kg" },
        { name: "Dry Fruit Pootharekulu", price: "₹450 / Kg" },
        { name: "Kaju Sweet", price: "₹420 / Kg" },
        { name: "Ariselu", price: "₹280 / Kg" },
        { name: "Boondi Laddu", price: "₹260 / Kg" },
        { name: "Mysore Pak", price: "₹320 / Kg" }
    ];

    return (
        <>

            {/* Floating Button */}

            <button
                className="chat-button"
                onClick={() => setIsOpen(!isOpen)}
            >

                {
                    isOpen
                        ? <X size={28}/>
                        : <MessageCircle size={28}/>
                }

            </button>

            {/* Popup */}

            {
                isOpen && (

                    <div className="chat-box">

                        {/* Header */}

                        <div className="chat-header">

                            <div>

                                <h3>Kumar Sweets</h3>

                                <p>How can we help you?</p>

                            </div>

                        </div>

                        {/* HOME */}

                        {
                            page === "home" && (

                                <div className="chat-body">

                                    <button
                                        className="menu-btn"
                                        onClick={() => setPage("products")}
                                    >
                                        <Package size={20}/>
                                        Product List
                                    </button>

                                    <button
                                        className="menu-btn"
                                        onClick={() => setPage("contact")}
                                    >
                                        <Phone size={20}/>
                                        Contact Us
                                    </button>

                                    <a
                                        className="menu-btn whatsapp-btn"
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <MessageCircleMore size={20}/>
                                        WhatsApp
                                    </a>

                                </div>

                            )
                        }

                        {/* CONTACT */}

                        {
                            page === "contact" && (

                                <div className="chat-body">

                                    <button
                                        className="back-btn"
                                        onClick={() => setPage("home")}
                                    >
                                        <ArrowLeft size={18}/>
                                        Back
                                    </button>

                                    <div className="info-item">
                                        <Phone size={18}/>
                                        +91 98765 43210
                                    </div>

                                    <div className="info-item">
                                        <Mail size={18}/>
                                        kumarsweets@gmail.com
                                    </div>

                                    <div className="info-item">
                                        <MapPin size={18}/>
                                        Atreyapuram, Andhra Pradesh
                                    </div>

                                    <div className="info-item">
                                        <Store size={18}/>
                                        Kumar Neti Putarekulu
                                    </div>

                                </div>

                            )
                        }

                        {/* PRODUCTS */}

                        {
                            page === "products" && (

                                <div className="chat-body">

                                    <button
                                        className="back-btn"
                                        onClick={() => setPage("home")}
                                    >
                                        <ArrowLeft size={18}/>
                                        Back
                                    </button>

                                    {

                                        products.map((item, index) => (

                                            <div
                                                className="product-item"
                                                key={index}
                                            >

                                                <div>

                                                    <strong>{item.name}</strong>

                                                    <span>{item.price}</span>

                                                </div>

                                            </div>

                                        ))

                                    }

                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-btn"
                                    >
                                        Contact to Order
                                    </a>

                                </div>

                            )
                        }

                    </div>

                )
            }

        </>
    );

}

export default QuickHelpWidget;