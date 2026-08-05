import "./Navbar.css";

import { ShoppingCart } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";

import useCart from "../../hooks/useCart";

function DesktopNavbar({ setIsCartOpen }) {

    const { totalItems } = useCart();

    return (

        <nav className="navbar">

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

    );

}

export default DesktopNavbar;