import "./About.css";

import aboutImage from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";

function About() {

    return (

        <section className="contact-page">

            <div className="contact-card">

                {/* ================= Header ================= */}

                <div className="contact-header">

                    <h2>About Us</h2>

                    <p>

                        Since 1997, Kumaar Putarekulu has been serving authentic
                        traditional sweets prepared with premium ingredients,
                        preserving the taste and heritage of Andhra Pradesh.

                    </p>

                </div>

                {/* ================= Image ================= */}

                <div className="about-image-section">

                    <img
                        src={aboutImage}
                        alt="About Kumaar Putarekulu"
                        className="about-image"
                    />

                </div>

            </div>

        </section>

    );

}

export default About;