import "./Footer.css";
import logo from "../../assets/images/logo/logo.png";

import {
    Phone,
    Mail,
    MapPin,
    Truck
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Left */}

                <div className="footer-about">

                    <img
                        src={logo}
                        alt="Kumar Neti Putarekulu"
                        className="footer-logo"
                    />

                    <h3>Kumar Nethi Putharekulu</h3>

                    <span className="footer-tagline">
                        Traditional Andhra Sweets
                    </span>

                    <p>
                        Bringing the authentic taste of traditional Andhra
                        sweets to your family with love, purity and
                        handcrafted excellence.
                    </p>

                    <div className="social-icons">

                        <FaFacebookF />

                        <FaInstagram />

                        <FaYoutube />

                    </div>

                </div>

                {/* Middle */}

                <div className="footer-contact">

                    <h3>Contact Us</h3>

                    <ul>

                        <li>
                            <Phone size={18} />
                            +91 9573128496
                        </li>

                        <li>
                            <Mail size={18} />
                            kumarneethiputharekuki@gmail.com
                        </li>

                        <li>
                            <MapPin size={10} />
                            Atreyapuram main road, near lolla lokkulu, Andhra Pradesh
                        </li>

                        <li>
                            <Truck size={18} />
                            PAN India Delivery
                        </li>

                    </ul>

                </div>

                {/* Right */}

                <div className="footer-trust">

                    <h3>Our Promise</h3>

                    <ul>

                        <li>✓ 100% Homemade</li>

                        <li>✓ Palm Oil Free</li>

                        <li>✓ No Artificial Colors</li>

                        <li>✓ Premium Ingredients</li>

                        <li>✓ Traditional Recipes</li>

                        <li>✓ Freshly Prepared Daily</li>

                        <li>✓ PAN India Shipping</li>

                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Kumar Nethi Putharekulu. All Rights Reserved.
                </p>

                <p className="developer-credit">
                    Website Designed &amp; Developed by
                    <span> C Labs Private Limited</span>
                </p>

            </div>

        </footer>

    );

}

export default Footer;