import "./SweetJourneySection.css";

import {
    ShoppingBag,
    Weight,
    MessageCircle,
    ChefHat,
    Truck
} from "lucide-react";

function SweetJourneySection() {

    const steps = [

        {
            icon: <ShoppingBag size={42} />,
            title: "Select Products",
            description:
                "Browse our delicious sweets and choose your favorites."
        },

        {
            icon: <Weight size={42} />,
            title: "Choose Weight",
            description:
                "Pick the quantity that perfectly suits your celebration."
        },

        {
            icon: <MessageCircle size={42} />,
            title: "Confirm via WhatsApp",
            description:
                "Review your order, confirm the details, and complete the payment securely through WhatsApp."
        },

        {
            icon: <ChefHat size={42} />,
            title: "Freshly Prepared",
            description:
                "Every order is handcrafted fresh using traditional recipes."
        },

        {
            icon: <Truck size={42} />,
            title: "Doorstep Delivery",
            description:
                "Sit back and enjoy fresh sweets delivered with care."
        }

    ];

    return (

        <section className="journey-section">

            <div className="journey-container">

                <div className="journey-heading">

                    <span className="journey-subtitle">
                        Sweet Journey
                    </span>

                    <h2>
                        From Our Kitchen to Your Home
                    </h2>

                    <p>
                        Ordering your favorite sweets is simple, quick,
                        and crafted with care in just a few easy steps.
                    </p>

                </div>

                <div className="journey-grid">

                    {steps.map((step, index) => (

                        <div className="journey-card" key={index}>

                            <div className="journey-icon">

                                {step.icon}

                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default SweetJourneySection;