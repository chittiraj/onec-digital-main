import "./CollectionsSection.css";
import { ArrowRight } from "lucide-react";

import sweetImage from "../../assets/images/sweetsPhotos/Bellam_Pootharekulu_1.webp";

function CollectionsSection() {

    const collections = [
        {
            title: "Traditional Sweets",
            image: sweetImage,
        },
        {
            title: "Dry Fruit Sweets",
            image: sweetImage,
        },
        {
            title: "Festival Specials",
            image: sweetImage,
        },
        {
            title: "Gift Boxes",
            image: sweetImage,
        },
    ];

    return (

        <section className="collections-section">

            <div className="collections-container">

                <div className="section-heading">

                    <span className="section-subtitle">
                        Our Collections
                    </span>

                    <h2>
                        Explore Our Sweet Collections
                    </h2>

                    <p>
                        Discover handcrafted sweets prepared with authentic
                        recipes, premium ingredients, and traditional flavors
                        for every celebration.
                    </p>

                </div>

                <div className="collections-grid">

                    {collections.map((item, index) => (

                        <div className="collection-card" key={index}>

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="collection-content">

                                <h3>{item.title}</h3>

                                <button className="collection-btn">
                                    View Collection
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                <div className="view-all-container">

                    <button className="view-all-btn">
                        View All Products
                    </button>

                </div>

            </div>

        </section>

    );
}

export default CollectionsSection;