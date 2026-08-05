import "./MobileNavbar.css";

import { useState } from "react";

import { Menu, ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

import useCart from "../../hooks/useCart";

import MobileDrawer from "./MobileDrawer";

function MobileNavbar({ setIsCartOpen }) {

    const { totalItems } = useCart();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {

        setIsMenuOpen(false);

    };

    return (

        <>

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

            {/* Drawer */}

            <MobileDrawer
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}
            />

        </>

    );

}

export default MobileNavbar;