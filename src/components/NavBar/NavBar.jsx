import React, { useState, useEffect } from "react";
import "./NavBar.css";
//import { Link, NavLink } from 'react-router-dom';
import logoi from "../../assets/images/logoi.png";
import logo from "../../assets/images/logo.png";
import WhatsApp from "../../assets/images/WhatsApp.png"
import Facebook from "../../assets/images/Facebook.png"
import Instagram from "../../assets/images/Instagram.png"
import Tiktok from "../../assets/images/Tiktok.png"
import Mail from "../../assets/images/Gmail.png"
import Burger from "../Burger/Burger";
import { Navbar, Offcanvas, Stack, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const NavBar = () => {

    return (
        <>
            <Stack className="container min-vh-100">
                <Navbar expand="md" className="logo">
                    <Row>
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
                                    <Navbar.Brand href="#home">
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
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Title
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="todo">
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

