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


const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [color, setColor] = useState(null);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };
    const handleClick = (item) => {
        setColor(item);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { // Ajusta el valor 768 según tus necesidades
                setHamburgerOpen(true);
            } else {
                setHamburgerOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Asegura que el estado inicial coincida con el tamaño de la pantalla al cargar la página

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={logoi} alt="" className="lDog" />
                </div>
                <div className="logo">
                    <img src={logo} alt="" className="logoN" />
                </div>
                <div className="containerDad" >
                    <div className="container"  style={{ display: hamburgerOpen ? "inline" : "none" }}>
                        <ul >
                            <li className="navLink" onClick={() => handleClick("inicio")}
                                style={{ color: color === "inicio" ? "#4F6C7C" : "black" }}>Inicio</li>
                            <li className="navLink" onClick={() => handleClick("sobre")}
                                style={{ color: color === "sobre" ? "#4F6C7C" : "black" }}>Sobre Nosotras</li>
                            <li className="navLink" onClick={() => handleClick("conocenos")}
                                style={{ color: color === "conocenos" ? "#4F6C7C" : "black" }}>Conócenos</li>
                            <li className="navLink" onClick={() => handleClick("contactanos")}
                                style={{ color: color === "contactanos" ? "#4F6C7C" : "black" }}>Contáctanos</li>
                        </ul>
                    </div>
                    <div className="redesContainer" style={{ display: hamburgerOpen ? "inline" : "none" }}>
                        <ul>
                            <li className="linkRedes">
                                <img src={WhatsApp} alt="Descripción de la imagen" className="iconRedes " />
                                WhatsApp
                            </li>
                            <li className="linkRedes">
                                <img src={Instagram} alt="Descripción de la imagen" className="iconRedes " />
                                Intagram
                            </li>
                            <li className="linkRedes">
                                <img src={Facebook} alt="Descripción de la imagen" className="iconRedes " />
                                Facebook
                            </li>
                            <li className="linkRedes">
                                <img src={Tiktok} alt="Descripción de la imagen" className="iconRedes " />
                                Tiktok
                            </li>
                            <li className="linkRedes">
                                <img src={Mail} alt="Descripción de la imagen" className="iconRedes " />
                                Mail
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Burger />
                </div>
            </div>
        </>


    )
}

export default NavBar;

