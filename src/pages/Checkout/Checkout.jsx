import "./Checkout.css";

import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

function Checkout() {

    return (

        <section className="checkout-page">

            <div className="checkout-container">

                {/* ================= Header ================= */}

                <div className="checkout-header">

                    <h2>

                        Checkout

                    </h2>

                    <p>

                        Complete your order by filling in your delivery details.
                        Review your items before placing your WhatsApp order.

                    </p>

                </div>

                {/* ================= Checkout Layout ================= */}

                <div className="checkout-layout">

                    {/* Left Side */}

                    

                    {/* Right Side */}

                    <OrderSummary />
                    <CheckoutForm />

                </div>

            </div>

        </section>

    );

}

export default Checkout;