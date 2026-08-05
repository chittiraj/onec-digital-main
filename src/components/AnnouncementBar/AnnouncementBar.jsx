import "./AnnouncementBar.css";
import { Mail } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function AnnouncementBar() {

    const marqueeRef = useRef(null);

    return (

        <div className="announcement-bar">

            {/* Left - Marquee */}

            <div className="ticker-section">

                <marquee
                    ref={marqueeRef}
                    onMouseEnter={() => marqueeRef.current.stop()}
                    onMouseLeave={() => marqueeRef.current.start()}
                >

                    Delivering
                    <span className="highlight">
                        {" "}PAN India
                    </span>

                    &nbsp;&nbsp;&nbsp;&nbsp; &amp; &nbsp;&nbsp;&nbsp;&nbsp;

                    <span className="highlight">
                        Free Shipping
                    </span>

                    on Orders above

                    <span className="highlight">
                        {" "}₹799
                    </span>

                    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;

                    Estimated Standard Delivery :

                    <span className="highlight">
                        {" "}3–5 Working Days
                    </span>

                    (Delivery time may vary based on PIN Code)

                    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;

                    <span className="highlight">
                        No Food Color
                    </span>

                    •

                    <span className="highlight">
                        {" "}100% Pure
                    </span>

                    •

                    <span className="highlight">
                        {" "}Traditional Recipe
                    </span>

                    •

                    <span className="highlight">
                        {" "}No Palm Oil
                    </span>

                </marquee>

            </div>

            {/* Email */}

            <div className="email-section">

                <Mail size={16} />

                <span>

                    kumarneethiputharekuki@gmail.com

                </span>

            </div>

            {/* Contact */}

            <Link
                to="/contact"
                className="contact-section"
            >

                Contact Us

            </Link>

        </div>

    );

}

export default AnnouncementBar;