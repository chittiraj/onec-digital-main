import "./CustomOrder.css";

import CustomOrderForm from "./CustomOrderForm";
import { Palette } from "lucide-react";

function CustomOrder() {

    return (

        <section className="custom-order-page">

            <div className="custom-order-container">

                <div className="custom-order-banner">

                    <div className="custom-order-banner-content">

                        <span className="custom-order-icon">
    <Palette size={24} strokeWidth={2} />
</span>

                        <div>

                            <h2>
                                Create Your Own Sweet
                            </h2>

                            <p>
                                Have a special sweet idea in mind?
                                Tell us what you need and our team
                                will connect with you on WhatsApp
                                to discuss your custom order.
                            </p>

                            <small>
                                Discuss design, flavour, quantity,
                                pricing and delivery directly with
                                our team.
                            </small>

                        </div>

                    </div>

                </div>

                <CustomOrderForm />

            </div>

        </section>

    );

}

export default CustomOrder;