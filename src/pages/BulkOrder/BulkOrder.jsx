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

function BulkOrder() {

    return (

        <section className="contact-page">

            <div className="contact-card">

                {/* ================= Header ================= */}

                <div className="contact-header">

                    <h2>Bulk Orders</h2>

                    <p>
                        Planning a Wedding, Birthday, Corporate Event or Festival?
                        <br />
                        We're here to make every celebration sweeter with our
                        freshly prepared traditional sweets.
                    </p>

                </div>

                {/* ================= Occasion ================= */}

                <div className="bulk-services">

                    <div className="service-card">
                        <Gift size={32}/>
                        <h3>Wedding</h3>
                    </div>

                    <div className="service-card">
                        <Building2 size={32}/>
                        <h3>Corporate</h3>
                    </div>

                    <div className="service-card">
                        <PartyPopper size={32}/>
                        <h3>Birthday</h3>
                    </div>

                    <div className="service-card">
                        <Sparkles size={32}/>
                        <h3>Festival</h3>
                    </div>

                </div>

                {/* ================= Row 1 ================= */}

                <div className="bulk-row">

                    <div className="bulk-card">

                        <h2>Why Choose Us?</h2>

                        <ul className="feature-list">

                            <li>
                                <CheckCircle size={18}/>
                                Minimum Order : 5 Kg
                            </li>

                            <li>
                                <CheckCircle size={18}/>
                                Delivery Across India
                            </li>

                            <li>
                                <CheckCircle size={18}/>
                                Freshly Prepared
                            </li>

                            <li>
                                <CheckCircle size={18}/>
                                Premium Ingredients
                            </li>

                            <li>
                                <CheckCircle size={18}/>
                                Gift Packaging Available
                            </li>

                            <li>
                                <CheckCircle size={18}/>
                                Bulk Discounts Available
                            </li>

                        </ul>

                    </div>

                    <div className="bulk-card form-card">

                        <h2>Place Bulk Order</h2>

                        <p>
                            Fill our Google Form and we'll contact you shortly
                            with pricing and delivery details.
                        </p>

                        <a
                            href="#"
                            className="bulk-btn"
                        >
                            Fill Google Form
                        </a>

                    </div>

                </div>

                {/* ================= Row 2 ================= */}

                <div className="bulk-row">

                    <div className="bulk-card">

                        <h2>Need Immediate Assistance?</h2>

                        <div className="contact-row">

                            <Phone size={20}/>

                            <span>
                                +91 98765 43210
                            </span>

                        </div>

                        <div className="contact-row">

                            <Mail size={20}/>

                            <span>
                                bulk@kumarputarekulu.com
                            </span>

                        </div>

                    </div>

                    <div className="bulk-card map-card">

                        <MapPin size={36}/>

                        <p>Google Map</p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default BulkOrder;