import "./MobileDrawer.css";

import {
    X,
    House,
    Package,
    ShoppingBag,
    Phone,
    ChevronRight
} from "lucide-react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

function MobileDrawer({ isMenuOpen, closeMenu }) {

    return (

        <>

            {/* ================= Overlay ================= */}

            <div
                className={`mobile-overlay ${isMenuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />

            {/* ================= Drawer ================= */}

            <aside
                className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
            >

                {/* Header */}

                <div className="mobile-drawer-header">

                    <button
                        className="close-drawer"
                        onClick={closeMenu}
                    >

                        <X size={22} />

                    </button>

                    <img
                        src={logo}
                        alt="Kumaar Putarekulu"
                        className="drawer-logo"
                    />

                    <h2 className="drawer-title">

                        Kumaar Putarekulu

                    </h2>

                    <p className="drawer-subtitle">

                        Traditional Andhra Sweets

                    </p>

                </div>

                <div className="mobile-divider"></div>

                {/* Navigation */}

                <NavLink
                    to="/"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    <div className="mobile-nav-left">

                        <House size={18} />

                        <span>Home</span>

                    </div>

                    <ChevronRight size={18} />

                </NavLink>

                <NavLink
                    to="/products"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    <div className="mobile-nav-left">

                        <Package size={18} />

                        <span>Products</span>

                    </div>

                    <ChevronRight size={18} />

                </NavLink>

                <NavLink
                    to="/bulk-order"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    <div className="mobile-nav-left">

                        <ShoppingBag size={18} />

                        <span>Bulk Order</span>

                    </div>

                    <ChevronRight size={18} />

                </NavLink>

                <NavLink
                    to="/contact"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    <div className="mobile-nav-left">

                        <Phone size={18} />

                        <span>Contact Us</span>

                    </div>

                    <ChevronRight size={18} />

                </NavLink>

                <div className="drawer-spacer"></div>

                <div className="mobile-divider"></div>

                {/* Footer */}

                <div className="drawer-footer">

                    <p className="drawer-year">

                        Since 1980

                    </p>

                    <p className="drawer-bottom-text">

                        Authentic Andhra Sweets

                    </p>

                </div>

            </aside>

        </>

    );

}

export default MobileDrawer;