import "./NavBar.css";
import logoi from "../../assets/images/logoi.png";
import logo from "../../assets/images/logo.png";
import WhatsApp from "../../assets/images/WhatsApp.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import Tiktok from "../../assets/images/Tiktok.png"
import Mail from "../../assets/images/Gmail.png"
import { Navbar, Offcanvas, Stack, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const NavBar = () => {

    return (
        <>
            <Stack className="container">
                <Navbar expand="md" className="logoT h-20">
                    <Row className="containerRow">
                        <Col>
                            <Navbar className="logo">
                                <Container>
                                    <Navbar.Brand href="#home">
                                        <Image
                                            src={logoi}
                                            width="30"
                                            height="30"
                                            className="lDog"
                                            alt="dog"
                                        />
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col>
                            <Navbar className="logo">
                                <Container>
                                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                                        <Image
                                            src={logo}
                                            width="30"
                                            height="30"
                                            className="logoN"
                                            alt="N"
                                        />
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
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
                        <Offcanvas.Body className="todo row-md-4">
                            <Row className="row">
                                <Col className="navLink  col-12 col-md w-100">Inicio</Col>
                                <Col className="navLink  col-12 col-md w-100">Sobre Nosotras</Col>
                                <Col className="navLink  col-12 col-md w-100">Conócenos</Col>
                                <Col className="navLink  col-12 col-md w-100">Contáctanos</Col>
                            </Row>
                            <Row>
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
                            </Row>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </Stack>
        </>


    )
}

export default NavBar;
