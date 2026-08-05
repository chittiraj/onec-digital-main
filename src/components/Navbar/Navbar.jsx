import "./Navbar.css";

import { useState } from "react";

import {
    ShoppingCart,
    Menu,
    X
} from "lucide-react";

import {
    NavLink,
    Link
} from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

import useCart from "../../hooks/useCart";

function Navbar({ setIsCartOpen }) {

    const { totalItems } = useCart();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {

        setIsMenuOpen(false);

    };

    return (

        <>

            {/* ==========================
                    Desktop Navbar
            =========================== */}

            <nav className="navbar desktop-navbar">

                <div className="navbar-container">

                    {/* ================= Logo ================= */}

                    <div className="navbar-left">

                        <Link to="/">

                            <img
                                src={logo}
                                alt="Kumaar Putarekulu"
                                className="logo"
                            />

                        </Link>

                    </div>

                    {/* ================= Navigation ================= */}

                    <div className="navbar-center">

                        <NavLink
                            to="/"
                            className="nav-link"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className="nav-link"
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/bulk-order"
                            className="nav-link"
                        >
                            Bulk Order
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="nav-link"
                        >
                            Contact Us
                        </NavLink>

                    </div>

                    {/* ================= Cart ================= */}

                    <div className="navbar-right">

                        <div
                            className="cart"
                            onClick={() => setIsCartOpen(true)}
                        >

                            <ShoppingCart size={24} />

                            <span className="cart-count">

                                {totalItems}

                            </span>

                        </div>

                    </div>

                </div>

            </nav>

            {/* ==========================
                    Mobile Navbar
            =========================== */}

            <nav className="mobile-navbar">

                <div className="mobile-navbar-container">

                    {/* Hamburger */}

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(true)}
                    >

                        <Menu size={26} />

                    </button>

                    {/* Logo */}

                    <Link
                        to="/"
                        className="mobile-logo-link"
                    >

                        <img
                            src={logo}
                            alt="Kumaar Putarekulu"
                            className="mobile-logo"
                        />

                    </Link>

                    {/* Cart */}

                    <div
                        className="mobile-cart"
                        onClick={() => setIsCartOpen(true)}
                    >

                        <ShoppingCart size={24} />

                        <span className="cart-count">

                            {totalItems}

                        </span>

                    </div>

                </div>

            </nav>
                        {/* ==========================
                    Mobile Overlay
            =========================== */}

            <div
                className={`mobile-overlay ${isMenuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />

            {/* ==========================
                    Mobile Drawer
            =========================== */}

            <aside
                className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
            >

                {/* Close */}

                <button
                    className="close-drawer"
                    onClick={closeMenu}
                >

                    <X size={26} />

                </button>

                {/* Navigation */}

                <NavLink
                    to="/"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    Home

                </NavLink>

                <NavLink
                    to="/products"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    Products

                </NavLink>

                <NavLink
                    to="/bulk-order"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    Bulk Order

                </NavLink>

                <NavLink
                    to="/contact"
                    className="mobile-nav-link"
                    onClick={closeMenu}
                >

                    Contact Us

                </NavLink>

                {/* Divider */}

                <div className="mobile-divider"></div>

                {/* Footer */}

                <p className="mobile-menu-title">

                    Kumaar Putarekulu

                </p>

                <span className="mobile-menu-subtitle">

                    Traditional Taste • Since 1980

                </span>
                            </aside>

        </>

    );

}

export default Navbar;