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

        console.log("========================================");
        console.log("🚀 Order Button Clicked");
        console.log("========================================");

        /* ================= Validation ================= */

        if (!customer.fullName.trim()) {

            console.log("❌ Full Name Missing");

            alert("Please enter your Full Name.");

            return;

        }

        if (!customer.phone.trim()) {

            console.log("❌ Phone Number Missing");

            alert("Please enter your Phone Number.");

            return;

        }

        if (!customer.address.trim()) {

            console.log("❌ Address Missing");

            alert("Please enter your Address.");

            return;

        }

        if (!customer.city.trim()) {

            console.log("❌ City Missing");

            alert("Please enter your City.");

            return;

        }

        if (!customer.pincode.trim()) {

            console.log("❌ Pincode Missing");

            alert("Please enter your Pincode.");

            return;

        }

        if (cartItems.length === 0) {

            console.log("❌ Cart Empty");

            alert("Your cart is empty.");

            return;

        }

        console.log("✅ Validation Passed");

        console.log("Customer Details :", customer);

        console.log("Cart Items :", cartItems);

        console.log("Total Items :", totalItems);

        console.log("Total Price :", totalPrice);

        console.log("========================================");
        console.log("Generating WhatsApp Message...");
        console.log("========================================");

        const message = generateWhatsAppMessage(

            customer,

            cartItems,

            totalItems,

            totalPrice

        );

        console.log("✅ Message Generated Successfully");

        console.log(message);

        console.log("Message Length :", message.length);

        const phoneNumber = "917993669326";

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        console.log("========================================");

        console.log("WhatsApp URL");

        console.log(whatsappUrl);

        console.log("URL Length :", whatsappUrl.length);

        console.log("========================================");

        console.log("Opening WhatsApp...");

        const newWindow = window.open(

            whatsappUrl,

            "_blank",

            "noopener,noreferrer"

        );

        console.log("Window Object :", newWindow);

        if (!newWindow) {

            console.log("❌ Popup Blocked");

        } else {

            console.log("✅ WhatsApp Window Opened");

        }

        console.log("========================================");

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