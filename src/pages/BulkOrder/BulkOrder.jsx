import "./BulkOrder.css";

import {
    Gift,
    Building2,
    PartyPopper,
    Sparkles,
    CheckCircle,
    Phone,
    Mail,
    MapPin
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function BulkOrder() {

    const navigate = useNavigate();

    const handleBulkOrder = () => {

        navigate("/bulk-order-form");

    };

    return (

        <section className="bulk-page">

            <div className="bulk-container">

                {/* ================= Header ================= */}

                <div className="bulk-header">

                    <h2>
                        Bulk Orders
                    </h2>

                    <p>
                        Planning a Wedding, Birthday, Corporate Event or Festival?
                        <br />
                        We're here to make every celebration sweeter with our
                        freshly prepared traditional sweets.
                    </p>

                </div>


                {/* ================= Occasion ================= */}

                <div className="bulk-services">

                    <div className="bulk-service-card">

                        <Gift size={32} />

                        <h3>
                            Wedding
                        </h3>

                    </div>


                    <div className="bulk-service-card">

                        <Building2 size={32} />

                        <h3>
                            Corporate
                        </h3>

                    </div>


                    <div className="bulk-service-card">

                        <PartyPopper size={32} />

                        <h3>
                            Birthday
                        </h3>

                    </div>


                    <div className="bulk-service-card">

                        <Sparkles size={32} />

                        <h3>
                            Festival
                        </h3>

                    </div>

                </div>


                {/* ================= Row 1 ================= */}

                <div className="bulk-row">

                    {/* ================= Why Choose Us ================= */}

                    <div className="bulk-card">

                        <h2>
                            Why Choose Us?
                        </h2>

                        <ul className="feature-list">

                            <li>

                                <CheckCircle size={18} />

                                Minimum Order : 5 Kg

                            </li>


                            <li>

                                <CheckCircle size={18} />

                                Delivery Across India

                            </li>


                            <li>

                                <CheckCircle size={18} />

                                Freshly Prepared

                            </li>


                            <li>

                                <CheckCircle size={18} />

                                Premium Ingredients

                            </li>


                            <li>

                                <CheckCircle size={18} />

                                Gift Packaging Available

                            </li>


                            <li>

                                <CheckCircle size={18} />

                                Bulk Discounts Available

                            </li>

                        </ul>

                    </div>


                    {/* ================= Place Bulk Order ================= */}

                    <div className="bulk-card bulk-form-card">

                        <h2>
                            Place Bulk Order
                        </h2>

                        <p>
                            Need sweets in large quantities?
                            Tell us your required quantity and
                            our team will contact you on WhatsApp
                            to discuss pricing and delivery.
                        </p>


                        <button

                            type="button"

                            className="bulk-btn"

                            onClick={handleBulkOrder}

                        >

                            Order on WhatsApp

                        </button>

                    </div>

                </div>


                {/* ================= Row 2 ================= */}

                <div className="bulk-row">

                    {/* ================= Contact ================= */}

                    <div className="bulk-card">

                        <h2>
                            Need Immediate Assistance?
                        </h2>


                        <div className="bulk-contact-row">

                            <Phone size={20} />

                            <span>
                                +91 9573128496
                            </span>

                        </div>


                        <div className="bulk-contact-row">

                            <Mail size={20} />

                            <span>
                                kumarneethiputharekuki@gmail.com
                            </span>

                        </div>

                    </div>


                    {/* ================= Map ================= */}

                    <div className="bulk-card bulk-map-card">

                        <MapPin size={36} />

                        <p>
                            Google Map
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default BulkOrder;