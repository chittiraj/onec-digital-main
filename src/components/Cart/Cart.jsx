import useScreen from "../../hooks/useScreen";

import DesktopCartDrawer from "./DesktopCartDrawer";
import MobileCartDrawer from "./MobileCartDrawer";

function Cart({ isCartOpen, setIsCartOpen }) {

    const isMobile = useScreen();

    return (

        <>
            {
                isMobile
                    ? (
                        <MobileCartDrawer
                            isCartOpen={isCartOpen}
                            setIsCartOpen={setIsCartOpen}
                        />
                    )
                    : (
                        <DesktopCartDrawer
                            isCartOpen={isCartOpen}
                            setIsCartOpen={setIsCartOpen}
                        />
                    )
            }
        </>

    );

}

export default Cart;