import "./Contact.css";
import {
    Mail,
    Phone,
    MapPin
} from "lucide-react";

import shopPhoto from "../../assets/images/shop-photos/shop-photo.jpeg";
function Contact() {

    return (

        <section className="contact-page">

            <div className="contact-card">

                <div className="contact-header">

                    <h2>Contact Us</h2>

                    <p>
                        Questions, feedback or enquiries?
                        <br />
                        We're always happy to help.
                    </p>

                </div>

                <div className="contact-grid">

                    {/* Contact */}

                    <div className="info-card">

                        <h3>Contact</h3>

                        <div className="contact-item">

                            <Mail size={20} />

                            <span>support@kumarputarekulu.com</span>

                        </div>

                        <div className="contact-item">

                            <Phone size={20} />

                            <span>+91 9573128496</span>

                        </div>

                    </div>

                    {/* Address */}

                    <div className="info-card">

                        <h3>Address</h3>

                        <div className="contact-item">

                            <MapPin size={20} />

                            <span>

                                Atreyapuram main road, <br></br>

                                Near lolla lokkulu 

                                Andhra Pradesh

                            </span>

                        </div>

                    </div>

                    {/* Map */}

                    <div className="map-card">

                        {/* Replace iframe later */}

                        Google Map

                    </div>

                </div>
                {/* ================= Factory Image ================= */}

                <div className="contact-image-section">

                    <img
                        src={shopPhoto}
                        alt="Kumaar Putarekulu Factory"
                        className="contact-image"
                    />

                </div>

            </div>

        </section>

    );

}

export default Contact;