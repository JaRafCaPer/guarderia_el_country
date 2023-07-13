import React from "react";
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';
import logoi from "../../utilities/images/logoi.png";
import logo from "../../utilities/images/logo.png";
import { useState } from "react";

const NavBar = () => {
    const [color, setColor] = useState(null);
    const handleClick = (item) => {
        setColor(item);
    };


    return (
        <div className="h-27 my-4">
            <nav className="flex justify-around items-center">
                <Link to={"/"} className="logo flex">
                    <img src={logoi} alt="" className="w-17 h-[72px] " />
                    <img src={logo} alt="" className="w-47 h-9 my-5	pl-2	" />
                </Link>
                <div className="my-5" >
                    <ul className="linea flex">
                        <li>
                            <NavLink to={`#`} className="navLink p-8 no-underline hover:underline decoration-4 decoration-[#CF8433]" onClick={() => handleClick("inicio")}
                                style={{ color: color === "inicio" ? "#4F6C7C" : "black"}}> Inicio </NavLink>
                        </li>
                        <li>
                            <navLink to={`#`} className="navLink p-8 no-underline hover:underline decoration-4 decoration-[#CF8433]" onClick={() => handleClick("sobre")}
                                style={{ color: color === "sobre" ? "#4F6C7C" : "black"}}> Sobre Nosotras </navLink>
                        </li>
                        <li>
                            <NavLink to={`#`} className="navLink p-8 no-underline hover:underline decoration-4 decoration-[#CF8433]" onClick={() => handleClick("conocenos")}
                                style={{ color: color === "conocenos" ? "#4F6C7C" : "black"}}> Conócenos </NavLink>
                        </li>
                        <li>
                            <NavLink to={`#`} className="navLink p-8 no-underline hover:underline decoration-4 decoration-[#CF8433]" onClick={() => handleClick("contactanos")}
                                style={{ color: color === "contactanos" ? "#4F6C7C" : "black"}}> Contáctanos </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
