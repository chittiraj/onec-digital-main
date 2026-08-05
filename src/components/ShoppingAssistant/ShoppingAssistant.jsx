import "./ShoppingAssistant.css";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    MessageCircle,
    X,
    Package,
    Phone,
    Truck,
    MoreHorizontal,
    ShoppingBag,
    MessageCircleMore,
    MapPin,
    Mail,
    Clock
} from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import MessageButton from "./MessageButton";

import products from "./products";

function ShoppingAssistant() {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    };

    useEffect(() => {

        scrollToBottom();

    }, [messages]);

    const getCurrentTime = () => {

        return new Date().toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit"

        });

    };

    const getGreeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) {

            return "Good Morning ☀️";

        }

        if (hour < 17) {

            return "Good Afternoon 🌤️";

        }

        return "Good Evening 🌙";

    };

    useEffect(() => {

        if (isOpen && messages.length === 0) {

            setMessages([

                {

                    sender: "bot",

                    type: "welcome",

                    time: getCurrentTime()

                }

            ]);

        }

    }, [isOpen]);

    const addUserMessage = (text) => {

        setMessages((prev) => [

            ...prev,

            {

                sender: "user",

                text,

                time: getCurrentTime()

            }

        ]);

    };

    const addBotMessage = (type) => {

        setTimeout(() => {

            setMessages((prev) => [

                ...prev,

                {

                    sender: "bot",

                    type,

                    time: getCurrentTime()

                }

            ]);

        }, 700);

    };

    const handleProducts = () => {

        addUserMessage("📦 Product List");

        addBotMessage("products");

    };

    const handleContact = () => {

        addUserMessage("📞 Contact Us");

        addBotMessage("contact");

    };

    const handleDelivery = () => {

        addUserMessage("🚚 Delivery Information");

        addBotMessage("delivery");

    };

    const handleMore = () => {

        addUserMessage("⋯ More");

        addBotMessage("more");

    };
        return (

        <>

            {/* Floating Chat Button */}

            <button
                className="shopping-chat-button"
                onClick={() => setIsOpen(!isOpen)}
            >

                {

                    isOpen

                        ? <X size={28} />

                        : <MessageCircle size={28} />

                }

            </button>

            {/* Chat Window */}

            {

                isOpen && (

                    <div className="shopping-chat-container">

                        {/* Header */}

                        <div className="shopping-chat-header">

                            <div>

                                <h3>

                                    Kumar Shopping Assistant

                                </h3>

                                <span>

                                    🟢 Online

                                </span>

                            </div>

                            <button

                                className="shopping-close-btn"

                                onClick={() => setIsOpen(false)}

                            >

                                <X size={20} />

                            </button>

                        </div>

                        {/* Chat Body */}

                        <div className="shopping-chat-body">

                            {

                                messages.map((message, index) => {

                                    if (message.sender === "user") {

                                        return (

                                            <UserMessage

                                                key={index}

                                                time={message.time}

                                            >

                                                {message.text}

                                            </UserMessage>

                                        );

                                    }

                                    return (

                                        <BotMessage

                                            key={index}

                                            time={message.time}

                                        >

                                            {

                                                message.type === "welcome" && (

                                                    <>

                                                        <h4>

                                                            {getGreeting()} 👋

                                                        </h4>

                                                        <p>

                                                            Welcome to

                                                            <strong>

                                                                {" "}Kumar Neti Putarekulu

                                                            </strong>

                                                        </p>

                                                        <p>

                                                            I'm <strong>Chitti</strong> 😊

                                                        </p>

                                                        <p>

                                                            Your Shopping Assistant.

                                                        </p>

                                                        <p>

                                                            How can I help you today?

                                                        </p>

                                                        <div className="chat-buttons">

                                                            <MessageButton

                                                                icon={<Package size={18} />}

                                                                text="Product List"

                                                                onClick={handleProducts}

                                                            />

                                                            <MessageButton

                                                                icon={<Phone size={18} />}

                                                                text="Contact Us"

                                                                onClick={handleContact}

                                                            />

                                                            <MessageButton

                                                                icon={<Truck size={18} />}

                                                                text="Delivery Info"

                                                                onClick={handleDelivery}

                                                            />

                                                            <MessageButton

                                                                icon={<MoreHorizontal size={18} />}

                                                                text="More"

                                                                onClick={handleMore}

                                                            />

                                                        </div>

                                                    </>

                                                )

                                            }
                                                                                        {

                                                message.type === "products" && (

                                                    <>

                                                        <h4>📦 Our Products</h4>

                                                        <p>
                                                            Here are our most popular sweets.
                                                        </p>

                                                        <div className="product-list">

                                                            {

                                                                products.map((product) => (

                                                                    <div
                                                                        key={product.id}
                                                                        className="product-card"
                                                                    >

                                                                        <div>

                                                                            <strong>

                                                                                {product.name}

                                                                            </strong>

                                                                            <span>

                                                                                {product.price}

                                                                            </span>

                                                                        </div>

                                                                    </div>

                                                                ))

                                                            }

                                                        </div>

                                                        <MessageButton

                                                            icon={<ShoppingBag size={18} />}

                                                            text="View All Products"

                                                            onClick={() => navigate("/products")}

                                                        />

                                                    </>

                                                )

                                            }

                                            {

                                                message.type === "contact" && (

                                                    <>

                                                        <h4>📞 Contact Us</h4>

                                                        <p>

                                                            We'd love to hear from you 😊

                                                        </p>

                                                        <div className="contact-item">

                                                            <Phone size={18} />

                                                            <span>

                                                                +91 9876543210

                                                            </span>

                                                        </div>

                                                        <div className="contact-item">

                                                            <Mail size={18} />

                                                            <span>

                                                                kumarsweets@gmail.com

                                                            </span>

                                                        </div>

                                                        <div className="contact-item">

                                                            <MapPin size={18} />

                                                            <span>

                                                                Atreyapuram,
                                                                Andhra Pradesh

                                                            </span>

                                                        </div>

                                                        <MessageButton

                                                            icon={<Phone size={18} />}

                                                            text="Call Now"

                                                            href="tel:+919876543210"

                                                        />

                                                    </>

                                                )

                                            }

                                            {

                                                message.type === "delivery" && (

                                                    <>

                                                        <h4>

                                                            🚚 Delivery Information

                                                        </h4>

                                                        <p>

                                                            We deliver across India 🇮🇳

                                                        </p>

                                                        <div className="delivery-box">

                                                            <Clock size={18} />

                                                            <span>

                                                                Delivery within
                                                                3-5 working days.

                                                            </span>

                                                        </div>

                                                        <div className="delivery-box">

                                                            🚚 Free Shipping above ₹799

                                                        </div>

                                                    </>

                                                )

                                            }
                                                                                        {

                                                message.type === "more" && (

                                                    <>

                                                        <h4>✨ More Options</h4>

                                                        <p>
                                                            Choose one of the options below.
                                                        </p>

                                                        <MessageButton

                                                            icon={<MessageCircleMore size={18} />}

                                                            text="WhatsApp"

                                                            href="https://wa.me/919876543210"

                                                        />

                                                        <MessageButton

                                                            icon={<FaInstagram size={18} />}

                                                            text="FaInstagram"

                                                            href="https://FaInstagram.com"

                                                        />

                                                        <MessageButton

                                                            icon={<MapPin size={18} />}

                                                            text="Location"

                                                            href="https://maps.google.com"

                                                        />

                                                    </>

                                                )

                                            }

                                        </BotMessage>

                                    );

                                })

                            }

                            <div ref={messagesEndRef}></div>

                        </div>

                    </div>

                )

            }

        </>

    );

}

export default ShoppingAssistant;