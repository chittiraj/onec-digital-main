
import useScreen from '../../hooks/useScreen';
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar(props){

    const isMobile = useScreen();

    return (

        <>
            {
                isMobile
                ?
                <MobileNavbar {...props}/>
                :
                <DesktopNavbar {...props}/>
            }
        </>

    );

}

export default Navbar;