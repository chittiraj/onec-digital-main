import { useState } from "react";

import {
    generateCustomWhatsAppMessage
} from "../../utils/customWhatsAppMessage";

function CustomOrderForm() {

    /* ================= Customer Details ================= */

    const [customer, setCustomer] = useState({

        fullName: "",

        phone: "",

        address: "",

        city: "",

        pincode: ""

    });

    /* ================= Custom Order Details ================= */

    const [customOrder, setCustomOrder] = useState({

        requirement: "",

        quantity: "",

        occasion: "",

        preferredDeliveryDate: ""

    });

    /* ================= Customer Input Handler ================= */

    const handleCustomerChange = (e) => {

        const { name, value } = e.target;

        setCustomer({

            ...customer,

            [name]: value

        });

    };

    /* ================= Custom Order Input Handler ================= */

    const handleCustomOrderChange = (e) => {

        const { name, value } = e.target;

        setCustomOrder({

            ...customOrder,

            [name]: value

        });

    };

    /* ================= WhatsApp Order ================= */

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

        if (!customOrder.requirement.trim()) {

            alert("Please describe your custom sweet requirement.");

            return;

        }

        if (!customOrder.quantity.trim()) {

            alert("Please enter the required quantity.");

            return;

        }

        /* ================= Create Order Object ================= */

        const orderData = {

            customer,

            customOrder

        };

        /* ================= Generate WhatsApp Message ================= */

        const message =
            generateCustomWhatsAppMessage(orderData);

        /* ================= WhatsApp URL ================= */

        const phoneNumber = "917993669326";

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        /* ================= Open WhatsApp ================= */

        const newWindow = window.open(

            whatsappUrl,

            "_blank",

            "noopener,noreferrer"

        );

        /* ================= Popup Fallback ================= */

        if (!newWindow) {

            window.location.href = whatsappUrl;

        }

    };

    return (

        <div className="custom-order-form-card">

            {/* ================= Form Header ================= */}

            <h3>

                Custom Order Details

            </h3>

            <p className="custom-order-form-description">

                Please provide your details and describe the
                sweet you would like us to create.

            </p>

            {/* =================================================
                TWO COLUMN SECTIONS
            ================================================= */}

            <div className="custom-order-sections">

                {/* =================================================
                    CUSTOMER DETAILS
                ================================================= */}

                <div className="custom-order-section">

                    <h4>

                        Customer Details

                    </h4>

                    {/* ================= Name & Phone ================= */}

                    <div className="custom-order-row">

                        <div className="form-group">

                            <label>

                                Full Name *

                            </label>

                            <input

                                type="text"

                                name="fullName"

                                placeholder="Enter your name"

                                value={customer.fullName}

                                onChange={handleCustomerChange}

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

                                onChange={handleCustomerChange}

                            />

                        </div>

                    </div>

                    {/* ================= Address ================= */}

                    <div className="form-group">

                        <label>

                            Address *

                        </label>

                        <textarea

                            name="address"

                            rows="4"

                            placeholder="Enter complete delivery address"

                            value={customer.address}

                            onChange={handleCustomerChange}

                        />

                    </div>

                    {/* ================= City & Pincode ================= */}

                    <div className="custom-order-row">

                        <div className="form-group">

                            <label>

                                City *

                            </label>

                            <input

                                type="text"

                                name="city"

                                placeholder="City"

                                value={customer.city}

                                onChange={handleCustomerChange}

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

                                onChange={handleCustomerChange}

                            />

                        </div>

                    </div>

                </div>

                {/* =================================================
                    SWEET REQUIREMENTS
                ================================================= */}

                <div className="custom-order-section">

                    <h4>

                        Tell Us About Your Sweet

                    </h4>

                    {/* ================= Requirement ================= */}

                    <div className="form-group">

                        <label>

                            Custom Requirement *

                        </label>

                        <textarea

                            name="requirement"

                            rows="6"

                            placeholder="Describe the sweet you want, design, flavour, ingredients, size, etc."

                            value={customOrder.requirement}

                            onChange={handleCustomOrderChange}

                        />

                    </div>

                    {/* ================= Quantity & Occasion ================= */}

                    <div className="custom-order-row">

                        <div className="form-group">

                            <label>

                                Quantity *

                            </label>

                            <input

                                type="text"

                                name="quantity"

                                placeholder="Example: 2 KG / 50 pieces"

                                value={customOrder.quantity}

                                onChange={handleCustomOrderChange}

                            />

                        </div>

                        <div className="form-group">

                            <label>

                                Occasion

                            </label>

                            <input

                                type="text"

                                name="occasion"

                                placeholder="Birthday, Wedding, Festival..."

                                value={customOrder.occasion}

                                onChange={handleCustomOrderChange}

                            />

                        </div>

                    </div>

                    {/* ================= Delivery Date ================= */}

                    <div className="form-group">

                        <label>

                            Preferred Delivery Date

                        </label>

                        <input

                            type="date"

                            name="preferredDeliveryDate"

                            value={customOrder.preferredDeliveryDate}

                            onChange={handleCustomOrderChange}

                        />

                    </div>

                </div>

            </div>

            {/* =================================================
                WHATSAPP ACTION
            ================================================= */}

            <div className="custom-order-action">

                <button

                    type="button"

                    className="custom-order-whatsapp-btn"

                    onClick={handleWhatsAppOrder}

                >

                    Order on WhatsApp

                </button>

                <p>

                    Our team will contact you to discuss your
                    custom requirements, pricing and delivery.

                </p>

            </div>

        </div>

    );

}

export default CustomOrderForm;