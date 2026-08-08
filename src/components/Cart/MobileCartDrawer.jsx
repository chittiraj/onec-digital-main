import "./MobileCartDrawer.css";

import "../../styles/index.css";
import {
    X,
    Plus,
    Minus,
    Trash2,
    ShoppingCart

} from "lucide-react";

import {

    Link,

    useNavigate

} from "react-router-dom";

import useCart from "../../hooks/useCart";

function MobileCartDrawer({

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

    const navigate = useNavigate();

    const closeDrawer = () => {

        setIsCartOpen(false);

    };

    const goToCheckout = () => {

        closeDrawer();

        navigate("/checkout");

    };

    return (

        <>

            {/* ================= Overlay ================= */}

            <div

                className={`mobile-cart-overlay ${isCartOpen ? "show" : ""}`}

                onClick={closeDrawer}

            />

            {/* ================= Drawer ================= */}

            <aside

                className={`mobile-cart-drawer ${isCartOpen ? "open" : ""}`}

            >

                {/* ================= Header ================= */}

                <div className="mobile-cart-header">

                    <button

                        className="mobile-cart-close"

                        onClick={closeDrawer}

                    >

                        <X size={22} />

                    </button>

                    <h2>

                        Shopping Cart

                    </h2>

                </div>

                <div className="mobile-cart-divider"></div>

                {/* ================= Empty Cart ================= */}

                {

                    cartItems.length === 0 ?

                        (

                            <div className="mobile-empty-cart">

                                <ShoppingCart size={70} />

                                <h3>

                                    Your Cart is Empty

                                </h3>

                                <p>

                                    Looks like you haven't added any sweets yet.

                                </p>

                                <Link

                                    to="/products"

                                    className="mobile-shop-btn"

                                    onClick={closeDrawer}

                                >

                                    Shop Now

                                </Link>

                            </div>

                        )

                        :
                                            (

                        <>

                            {/* ================= Cart Body ================= */}

                            <div className="mobile-cart-body">

                                {

                                    cartItems.map((item) => (

                                        <div

                                            className="mobile-cart-item"

                                            key={item.id}

                                        >

                                            {/* Product Image */}

                                            <img

                                                src={item.image}

                                                alt={item.name}

                                            />

                                            {/* Product Details */}

                                            <div className="mobile-cart-info">

                                                <h4>

                                                    {item.name}

                                                </h4>

                                                <p className="mobile-cart-price">

                                                    ₹{item.price} × {item.quantity}

                                                </p>

                                                <p className="mobile-cart-subtotal">

                                                    Total : ₹{item.price * item.quantity}

                                                </p>

                                                {/* ================= Quantity ================= */}

                                                <div className="mobile-qty-box">

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

                                            {/* ================= Delete ================= */}

                                            <button

                                                className="mobile-delete-btn"

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

                            <div className="mobile-cart-footer">

                                <div className="mobile-cart-total">

                                    <span>

                                        Items

                                    </span>

                                    <strong>

                                        {totalItems}

                                    </strong>

                                </div>

                                <div className="mobile-cart-total">

                                    <span>

                                        Total

                                    </span>

                                    <strong>

                                        ₹ {totalPrice}

                                    </strong>

                                </div>

                                <button

                                    className="mobile-whatsapp-btn"

                                    onClick={goToCheckout}

                                >

                                    Proceed to Checkout

                                </button>

                            </div>

                        </>

                    )

                }

            </aside>

        </>

    );

}

export default MobileCartDrawer;