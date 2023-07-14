import "./Burger.css";
import Drawer from "../../assets/images/Drawer.png";

const Burger = () => {
    return ( 
        <>
        <div className="hamburger">
            <img src={Drawer} alt="" className="burger" />
        </div>
        </>
    );
}

export default Burger;