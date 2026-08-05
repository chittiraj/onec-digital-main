import "./Cart.css";

import {
    X,
    Plus,
    Minus,
    Trash2,
    ShoppingCart
} from "lucide-react";

import useCart from "../../hooks/useCart";

import { generateWhatsAppMessage } from "../../utils/whatsappMessage";

import { Link } from "react-router-dom";

function DesktopCartDrawer({

    isCartOpen,

    setIsCartOpen

}) {

    const {

        cartItems,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        totalItems,

        totalPrice

    } = useCart();

    const handleWhatsApp = () => {

        const phoneNumber = "917993669326";

        const message = generateWhatsAppMessage(cartItems);

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

    return (

        <>

            <div

                className={`cart-overlay ${isCartOpen ? "show" : ""}`}

                onClick={() => setIsCartOpen(false)}

            />

            <div

                className={`cart-sidebar ${isCartOpen ? "open" : ""}`}

            >

                {/* ================= Header ================= */}

                <div className="cart-header">

                    <h2>

                        <ShoppingCart size={22} />

                        Shopping Cart

                    </h2>

                    <button

                        className="close-btn"

                        onClick={() => setIsCartOpen(false)}

                    >

                        <X />

                    </button>

                </div>
                                {/* ================= Empty Cart ================= */}

                {

                    cartItems.length === 0 ?

                        (

                            <div className="empty-cart">

                                <ShoppingCart size={70} />

                                <h3>

                                    Your Cart is Empty

                                </h3>

                                <p>

                                    Looks like you haven't added any sweets yet.

                                </p>

                                <Link

                                    to="/products"

                                    className="shop-now-btn"

                                    onClick={() => setIsCartOpen(false)}

                                >

                                    Shop Now

                                </Link>

                            </div>

                        )

                        :

                        (

                            <>

                                {/* ================= Cart Body ================= */}

                                <div className="cart-body">

                                    {

                                        cartItems.map((item) => (

                                            <div

                                                className="cart-item"

                                                key={item.id}

                                            >

                                                <img

                                                    src={item.image}

                                                    alt={item.name}

                                                />

                                                <div className="cart-info">

                                                    <h4>

                                                        {item.name}

                                                    </h4>

                                                    <p className="cart-price">

                                                        ₹{item.price} × {item.quantity}

                                                    </p>

                                                    <p className="cart-subtotal">

                                                        Total : ₹{item.price * item.quantity}

                                                    </p>

                                                    <div className="qty-box">

                                                        <button

                                                            onClick={() =>

                                                                decreaseQuantity(item.id)

                                                            }

                                                        >

                                                            <Minus size={16} />

                                                        </button>

                                                        <span>

                                                            {item.quantity}

                                                        </span>

                                                        <button

                                                            onClick={() =>

                                                                increaseQuantity(item.id)

                                                            }

                                                        >

                                                            <Plus size={16} />

                                                        </button>

                                                    </div>

                                                </div>

                                                <button

                                                    className="delete-btn"

                                                    onClick={() =>

                                                        removeFromCart(item.id)

                                                    }

                                                >

                                                    <Trash2 size={18} />

                                                </button>

                                            </div>

                                        ))

                                    }

                                </div>
                                                                {/* ================= Footer ================= */}

                                <div className="cart-footer">

                                    <div className="cart-total">

                                        <span>

                                            Items

                                        </span>

                                        <strong>

                                            {totalItems}

                                        </strong>

                                    </div>

                                    <div className="cart-total">

                                        <span>

                                            Total

                                        </span>

                                        <strong>

                                            ₹ {totalPrice}

                                        </strong>

                                    </div>

                                    <button

                                        className="whatsapp-btn"

                                        onClick={handleWhatsApp}

                                    >

                                        Order on WhatsApp

                                    </button>

                                </div>

                            </>

                        )

                }

            </div>

        </>

    );

}

export default DesktopCartDrawer;