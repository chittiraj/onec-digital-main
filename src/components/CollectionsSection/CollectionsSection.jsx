import "./CollectionsSection.css";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import sweetImage from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";
import pootharekulu from "../../assets/images/sweetsPhotos/pootharekulu/pootharekulu.jpeg";
import bellamMamidiThandra from "../../assets/images/sweetsPhotos/thandra/Bellam-Mamidi-Thandra.jpeg";
import undalu from "../../assets/images/sweetsPhotos/undalu/undalu.jpeg";
import garajeelu from "../../assets/images/sweetsPhotos/garajeelu/garajeelu.jpeg";

function CollectionsSection() {

    const navigate = useNavigate();

    const collections = [

        {
            title: "Putarekulu",
            image: pootharekulu,
            category: "putarekulu",
        },

        {
            title: "Mamidi Thandra",
            image: bellamMamidiThandra,
            category: "thandra",
        },

        {
            title: "Garajeelu",
            image: garajeelu,
            category: "garajeelu",
        },

        {
            title: "Undalu",
            image: undalu,
            category: "undalu",
        }

    ];

    return (

        <section
            id="collections"
            className="collections-section"
        >

            <div className="collections-container">

                <div className="section-heading">

                    <span className="section-subtitle">

                        Our Collections

                    </span>

                    <h2>

                        Explore Our Authentic Andhra Sweets

                    </h2>

                    <p>

                        Discover handcrafted Putarekulu, Mamidi Thandra,
                        Garajeelu, Undalu and custom sweet boxes prepared
                        with traditional recipes and premium ingredients.

                    </p>

                </div>

                <div className="collections-grid">

                    {

                        collections.map((item, index) => (

                            <div
                                className="collection-card"
                                key={index}
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div className="collection-content">

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <button
                                        className="collection-btn"
                                        onClick={() =>
                                            navigate(`/products?category=${item.category}`)
                                        }
                                    >

                                        Explore

                                        <ArrowRight size={18} />

                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="view-all-container">

                    <button
                        className="view-all-btn"
                        onClick={() => navigate("/products")}
                    >

                        View All Products

                    </button>

                </div>

            </div>

        </section>

    );

}

export default CollectionsSection;