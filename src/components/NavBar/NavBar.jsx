import "./NavBar.css";
import logoi from "../../assets/images/logoi.png";
import logo from "../../assets/images/logo.png";
import WhatsApp from "../../assets/images/WhatsApp.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import Tiktok from "../../assets/images/Tiktok.png"
import Mail from "../../assets/images/Gmail.png"
import { Navbar, Offcanvas, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const NavBar = () => {

    return (
        <>
        <div className="nav1">
                <Navbar expand="md" className="logoT h-20">
                    <div className="containerRow">
                    <div className="logos">
                            <div className="colLogo1">
                                <div>
                                    <div>
                                        <Navbar.Brand href="#home">
                                            <Image
                                                src={logoi}
                                                width="30"
                                                height="30"
                                                className="lDog"
                                                alt="dog"
                                            />
                                        </Navbar.Brand>
                                    </div>
                                </div>
                            </div>
                            
                            <div  className="colLogo2">
                                <Navbar>
                                    <div>
                                        <Navbar.Brand href="#home">
                                            <Image
                                                src={logo}
                                                width="30"
                                                height="30"
                                                className="logoN"
                                                alt="N"
                                            />
                                        </Navbar.Brand>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        className="custom-offcanvas"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Menú
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="todo">
                            <div className="bloque">
                                <div className="navLink"><p className="pNav">Inicio</p></div>
                                <div className="navLink"><p className="pNav">Sobre Nosotras</p></div>
                                <div className="navLink"><p className="pNav">Conócenos</p></div>
                                <div className="navLink"><p className="pNav">Contáctanos</p></div>
                            </div>
                            <div>
                                <div className="redesContainer">
                                    <ul>
                                        <li className="linkRedes">
                                            <a href="#">
                                                <img src={WhatsApp} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>WhatsApp</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="#">
                                                <img src={Instagram} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Instagram</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="#">
                                                <img src={Facebook} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="#">
                                                <img src={Tiktok} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Tiktok</span>
                                            </a>
                                        </li>
                                        <li className="linkRedes">
                                            <a href="#">
                                                <img src={Mail} alt="Descripción de la imagen" className="iconRedes " />
                                                <span>Mail</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            
        </div>
            
        </>


    )
}

export default NavBar;
