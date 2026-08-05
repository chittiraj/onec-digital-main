import {

    Plus,
    Minus,
    Trash2

} from "lucide-react";

import useCart from "../../hooks/useCart";

function OrderSummary() {

    const {

        cartItems,

        totalItems,

        totalPrice,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart

    } = useCart();

    return (

        <div className="order-summary-card">

            {/* ================= Header ================= */}

            <div className="summary-header">

                <h3>

                    Order Summary

                </h3>

            </div>

            {/* ================= Scrollable Products ================= */}

            <div className="summary-products">

                {

                    cartItems.length === 0 ?

                        (

                            <div className="summary-empty">

                                <p>

                                    Your cart is empty.

                                </p>

                            </div>

                        )

                        :

                        (

                            cartItems.map((item) => (

                                <div

                                    className="summary-product"

                                    key={item.id}

                                >

                                    {/* Product Image */}

                                    <img

                                        src={item.image}

                                        alt={item.name}

                                        className="summary-image"

                                    />

                                    {/* Product Details */}

                                    <div className="summary-info">

                                        <h4>

                                            {item.name}

                                        </h4>

                                        <p>

                                            Weight : {item.selectedWeight}

                                        </p>

                                        <p>

                                            ₹ {item.price} × {item.quantity}

                                        </p>

                                        {/* ================= Quantity ================= */}

                                        <div className="summary-qty">

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

                                    {/* ================= Right Side ================= */}

                                    <div className="summary-right">

                                        <div className="summary-price">

                                            ₹ {item.price * item.quantity}

                                        </div>

                                        <button

                                            className="summary-delete"

                                            onClick={() =>

                                                removeFromCart(item.id)

                                            }

                                        >

                                            <Trash2 size={18} />

                                        </button>

                                    </div>

                                </div>

                            ))

                        )

                }

            </div>

            {/* ================= Footer ================= */}

            {

                cartItems.length > 0 && (

                    <div className="summary-footer">

                        <div className="summary-row">

                            <span>

                                Total Items

                            </span>

                            <strong>

                                {totalItems}

                            </strong>

                        </div>

                        <div className="summary-row">

                            <span>

                                Delivery

                            </span>

                            <strong>

                                Discuss on Whatsapp

                            </strong>

                        </div>

                        <div className="summary-total">

                            <span>

                                Grand Total

                            </span>

                            <strong>

                                ₹ {totalPrice}

                            </strong>

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default OrderSummary;