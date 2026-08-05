import { useState } from "react";

import useCart from "../../hooks/useCart";

import { generateWhatsAppMessage } from "../../utils/whatsappMessage";

function CheckoutForm() {

    const [customer, setCustomer] = useState({

        fullName: "",

        phone: "",

        address: "",

        city: "",

        pincode: ""

    });

    const {

        cartItems,

        totalItems,

        totalPrice

    } = useCart();

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCustomer({

            ...customer,

            [name]: value

        });

    };

    const handleWhatsAppOrder = () => {

        /* ================= Validation ================= */

        if (!customer.fullName.trim()) {
            alert("Please enter your Full Name.");
            return;
        }

        if (!customer.phone.trim()) {
            alert("Please enter your Phone Number.");
            return;
        }

        if (!customer.address.trim()) {
            alert("Please enter your Address.");
            return;
        }

        if (!customer.city.trim()) {
            alert("Please enter your City.");
            return;
        }

        if (!customer.pincode.trim()) {
            alert("Please enter your Pincode.");
            return;
        }

        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        /* ================= Generate WhatsApp Message ================= */

        /* ================= Generate WhatsApp Message ================= */

        const message = generateWhatsAppMessage(
            customer,
            cartItems,
            totalItems,
            totalPrice
        );

        const phoneNumber = "917993669326";

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (

        <div className="checkout-form-card">

            <h3>

                Customer Details

            </h3>

            <div className="checkout-row">

                <div className="form-group">

                    <label>

                        Full Name *

                    </label>

                    <input

                        type="text"

                        name="fullName"

                        placeholder="Enter your name"

                        value={customer.fullName}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Phone Number *

                    </label>

                    <input

                        type="tel"

                        name="phone"

                        placeholder="Enter phone number"

                        value={customer.phone}

                        onChange={handleChange}

                    />

                </div>

            </div>

            <div className="form-group">

                <label>

                    Address *

                </label>

                <textarea

                    name="address"

                    rows="4"

                    placeholder="Enter complete delivery address"

                    value={customer.address}

                    onChange={handleChange}

                />

            </div>

            <div className="checkout-row">

                <div className="form-group">

                    <label>

                        City *

                    </label>

                    <input

                        type="text"

                        name="city"

                        placeholder="City"

                        value={customer.city}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Pincode *

                    </label>

                    <input

                        type="text"

                        name="pincode"

                        placeholder="Pincode"

                        value={customer.pincode}

                        onChange={handleChange}

                    />

                </div>

            </div>

            <button

                type="button"

                className="checkout-btn"

                onClick={handleWhatsAppOrder}

            >

                Order on WhatsApp

            </button>

        </div>

    );

}

export default CheckoutForm;