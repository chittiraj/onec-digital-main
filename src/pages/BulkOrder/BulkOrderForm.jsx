import { useState } from "react";

import "./BulkOrderForm.css";
import {
    generateBulkWhatsAppMessage
} from "../../utils/bulkWhatsAppMessage";
import { Package } from "lucide-react";

function BulkOrderForm() {

    /* ================= Customer Details ================= */

    const [customer, setCustomer] = useState({

        fullName: "",

        phone: "",

        address: "",

        city: "",

        pincode: ""

    });

    /* ================= Bulk Order Details ================= */

    const [bulkOrder, setBulkOrder] = useState({

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

    /* ================= Bulk Order Input Handler ================= */

    const handleBulkOrderChange = (e) => {

        const { name, value } = e.target;

        setBulkOrder({

            ...bulkOrder,

            [name]: value

        });

    };

    /* ================= WhatsApp Bulk Order ================= */

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

        if (!bulkOrder.quantity.trim()) {

            alert("Please enter the required quantity.");

            return;

        }

        /* ================= Create Order Object ================= */

        const orderData = {

            customer,

            bulkOrder

        };

        /* ================= Generate WhatsApp Message ================= */

        const message =
            generateBulkWhatsAppMessage(orderData);

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

        <div className="bulk-order-form-card">

            {/* ================= Form Header ================= */}

            <h3>

                Bulk Order Details

            </h3>

            <p className="bulk-order-form-description">

                Please provide your details and the quantity
                you are looking for. Our team will contact
                you on WhatsApp to discuss products, pricing
                and delivery.

            </p>

            {/* =================================================
                FORM SECTIONS
            ================================================= */}

            <div className="bulk-order-sections">

                {/* =================================================
                    CUSTOMER DETAILS
                ================================================= */}

                <div className="bulk-order-section">

                    <h4>

                        Customer Details

                    </h4>

                    {/* ================= Name & Phone ================= */}

                    <div className="bulk-order-row">

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

                    <div className="bulk-order-row">

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
                    BULK ORDER DETAILS
                ================================================= */}

                <div className="bulk-order-section">

                    <h4>

                        Bulk Order Requirements

                    </h4>

                    {/* ================= Quantity ================= */}

                    <div className="form-group">

                        <label>

                            Required Quantity *

                        </label>

                        <input

                            type="text"

                            name="quantity"

                            placeholder="Example: 40 Boxes"

                            value={bulkOrder.quantity}

                            onChange={handleBulkOrderChange}

                        />

                    </div>

                    {/* ================= Occasion ================= */}

                    <div className="form-group">

                        <label>

                            Occasion

                        </label>

                        <input

                            type="text"

                            name="occasion"

                            placeholder="Wedding, Function, Festival..."

                            value={bulkOrder.occasion}

                            onChange={handleBulkOrderChange}

                        />

                    </div>

                    {/* ================= Delivery Date ================= */}

                    <div className="form-group">

                        <label>

                            Preferred Delivery Date

                        </label>

                        <input

                            type="date"

                            name="preferredDeliveryDate"

                            value={bulkOrder.preferredDeliveryDate}

                            onChange={handleBulkOrderChange}

                        />

                    </div>

                    {/* ================= Information ================= */}

                    <div className="bulk-order-info">

    <span className="bulk-order-info-icon">
        <Package size={20} strokeWidth={2} />
    </span>

    <p>
        Need a large quantity of our existing sweets? Tell us how many
        boxes you need. We will discuss the available products and bulk
        pricing with you on WhatsApp.
    </p>

</div>

                </div>

            </div>

            {/* =================================================
                WHATSAPP ACTION
            ================================================= */}

            <div className="bulk-order-action">

                <button

                    type="button"

                    className="bulk-order-whatsapp-btn"

                    onClick={handleWhatsAppOrder}

                >

                    Order on WhatsApp

                </button>

                <p>

                    Our team will contact you to discuss
                    products, bulk pricing and delivery.

                </p>

            </div>

        </div>

    );

}

export default BulkOrderForm;