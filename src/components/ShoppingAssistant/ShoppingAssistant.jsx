import { useState } from "react";

import {
    MessageCircle,
    X,
    Package,
    Phone,
    Send
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./ShoppingAssistant.css";


function ShoppingAssistant() {

    const navigate = useNavigate();

    /* =========================================================
       Assistant State
    ========================================================= */

    const [isOpen, setIsOpen] = useState(false);


    /* =========================================================
       WhatsApp
    ========================================================= */

    const handleWhatsApp = () => {

        const phoneNumber = "917993669326";

        const message =
            "Hello Kumar Neti Putarekulu, I would like to know more about your sweets.";

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        const newWindow = window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

        if (!newWindow) {

            window.location.href = whatsappUrl;

        }

    };


    /* =========================================================
       Navigation
    ========================================================= */

    const handleProducts = () => {

        setIsOpen(false);

        navigate("/products");

    };


    const handleContact = () => {

        setIsOpen(false);

        navigate("/contact");

    };


    /* =========================================================
       Toggle Assistant
    ========================================================= */

    const handleToggle = () => {

        setIsOpen((previous) => !previous);

    };


    return (

        <div className="shopping-assistant">

            {/* =================================================
                Assistant Popup
            ================================================= */}

            {isOpen && (

                <div className="shopping-assistant-popup">

                    {/* ================= Header ================= */}

                    <div className="shopping-assistant-header">

                        <div className="shopping-assistant-header-info">

                            <div className="shopping-assistant-avatar">

                                <MessageCircle size={20} />

                            </div>

                            <div>

                                <h3>
                                    Kumar Assistant
                                </h3>

                                <span>
                                    Online
                                </span>

                            </div>

                        </div>


                        <button
                            type="button"
                            className="shopping-assistant-close"
                            onClick={handleToggle}
                            aria-label="Close assistant"
                        >

                            <X size={20} />

                        </button>

                    </div>


                    {/* =================================================
                        Chat Content
                    ================================================= */}

                    <div className="shopping-assistant-body">

                        <div className="shopping-assistant-message">

                            <p>
                                Hello! 👋
                            </p>

                            <p>
                                Welcome to Kumar Neti Putarekulu.
                                How can we help you today?
                            </p>

                        </div>
                        {/* =================================================
                            Quick Actions
                        ================================================= */}

                        <div className="shopping-assistant-options">

                            {/* ================= Products ================= */}

                            <button
                                type="button"
                                className="shopping-assistant-option"
                                onClick={handleProducts}
                            >

                                <span className="shopping-assistant-option-icon">

                                    <Package size={18} />

                                </span>

                                <span className="shopping-assistant-option-text">

                                    Products

                                </span>

                            </button>


                            {/* ================= Contact ================= */}

                            <button
                                type="button"
                                className="shopping-assistant-option"
                                onClick={handleContact}
                            >

                                <span className="shopping-assistant-option-icon">

                                    <Phone size={18} />

                                </span>

                                <span className="shopping-assistant-option-text">

                                    Contact Us

                                </span>

                            </button>


                            {/* ================= WhatsApp ================= */}

                            <button
                                type="button"
                                className="shopping-assistant-option"
                                onClick={handleWhatsApp}
                            >

                                <span className="shopping-assistant-option-icon">

                                    <Send size={18} />

                                </span>

                                <span className="shopping-assistant-option-text">

                                    WhatsApp

                                </span>

                            </button>

                        </div>


                        {/* =================================================
                            Assistant Footer Message
                        ================================================= */}

                        <div className="shopping-assistant-footer">

                            <span>
                                Need help? Choose an option above.
                            </span>

                        </div>

                    </div>

                </div>

            )}


            {/* =========================================================
                Floating Assistant Button
            ========================================================= */}

            <button
                type="button"
                className={`shopping-assistant-toggle ${
                    isOpen ? "active" : ""
                }`}
                onClick={handleToggle}
                aria-label={
                    isOpen
                        ? "Close shopping assistant"
                        : "Open shopping assistant"
                }
            >

                {isOpen ? (

                    <X size={24} />

                ) : (

                    <MessageCircle size={24} />

                )}

            </button>

        </div>

    );
    }

export default ShoppingAssistant;