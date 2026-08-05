import "./MainLayout.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ShoppingAssistant from "../components/ShoppingAssistant/ShoppingAssistant";
import Cart from "../components/Cart/Cart";
import PageTransition from "../components/PageTransition";

function MainLayout() {

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (

        <>

            

            <header className="header">

                <AnnouncementBar />

                <Navbar
                    setIsCartOpen={setIsCartOpen}
                />

            </header>
            

            <main className="main-content">

                <PageTransition>

                    <Outlet />

                </PageTransition>

            </main>

            

            <Footer />

            

            <Cart
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
            />

            

            {!isCartOpen && <ShoppingAssistant />}

        </>

    );

}

export default MainLayout;