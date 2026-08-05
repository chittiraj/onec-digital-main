import "./FounderSection.css";
import founderImage from "../../assets/images/people/founderPhoto.jpeg";

function FounderSection() {
    return (
        <section className="founder-section">

            <div className="founder-container">

                {/* Left */}
                <div className="founder-image">
                    <img
                        src={founderImage}
                        alt="Founder"
                    />
                </div>

                {/* Right */}
                <div className="founder-content">

                    <span className="founder-title">
                        Meet the Founder
                    </span>

                    <h2>
                        Chitti Raja Achari Kottapalli
                    </h2>

                    <p>
                        Welcome to our sweet journey! Our passion is to preserve
                        the authentic taste of traditional Andhra sweets while
                        delivering exceptional quality to every customer.
                        Every sweet is handcrafted using carefully selected
                        ingredients, traditional recipes and a commitment to
                        freshness, ensuring every bite feels just like home.
                    </p>

                    <button className="founder-btn">
                        Read Our Story
                    </button>

                </div>

            </div>

        </section>
    );
}

export default FounderSection;