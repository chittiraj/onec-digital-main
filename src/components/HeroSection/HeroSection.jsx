import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";

import CollectionsSection from "../CollectionsSection/CollectionsSection";
import FounderSection from "../FounderSection/FounderSection";
import SweetJourneySection from "../SweetJourneySection/SweetJourneySection";

function HeroSection() {

    const navigate = useNavigate();

    return (

        <>

            <section className="hero-section">

                <div className="hero-container">

                    {/* ================= Left Content ================= */}

                    <div className="hero-content">

                        <span className="hero-badge">

                            Traditional Taste

                        </span>

                        <h1 className="hero-title">

                            Authentic Indian

                            <br />

                            Sweets

                        </h1>

                        <p className="hero-description">

                            Experience handcrafted Indian sweets made with premium
                            ingredients and traditional recipes. Freshly prepared
                            with love and delivered across India to make every
                            celebration sweeter.

                        </p>

                        <div className="hero-buttons">

                            <button
                                className="primary-btn"
                                onClick={() => navigate("/products")}
                            >

                                Shop Now

                            </button>

                            {/*
                            <button
                                className="secondary-btn"
                                onClick={scrollToCollection}
                            >
                                Explore Collection
                            </button>
                            */}

                        </div>

                    </div>

                    {/* ================= Hero Image ================= */}

                    <div className="hero-image">

                        <img
                            src={heroImage}
                            alt="Bellam Pootharekulu"
                            className="hero-img"
                        />

                    </div>

                </div>

            </section>

            
            <CollectionsSection />
            <FounderSection />
            <SweetJourneySection />
           

        </>

    );

}

export default HeroSection;