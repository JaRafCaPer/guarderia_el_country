import React from "react";
import "./Contactanos.css";
import whatsAppAzul from '../../assets/images/whatsAppAzul.png';
import gmailAzul from '../../assets/images/gmailAzul.png';
import instagramAzul from '../../assets/images/instagramAzul.png';
import facebookAzul from '../../assets/images/facebookAzul.png';
import tiktokAzul from '../../assets/images/tiktokAzul.png';
import MAP from '../../assets/images/MAP.png';

const Contactanos = () => {
    return (
        <div className="bg">
            <div className="containerContacto">
                <h1 className="cTitulo">Contáctanos</h1>
                <div className="rs">
                    <div className="colRs">
                            <h2>Escribenos vía</h2>
                            <div className="escribinos">
                                <a className="wsp" href="https://wa.me/541168057707" target="_blank">
                                    <img src={whatsAppAzul} alt="" className="imgAzul" />
                                    <h3>WhatsApp</h3>
                                </a>
                                <a className="gmail" href="mailto: guarderia.elcountry@gmail.com" target="_blank">
                                    <img src={gmailAzul} alt="" className="imgAzul" />
                                    <h3>Gmail</h3>
                                </a>
                            </div>
                    </div>
                    <div className="colRs">
                            <h2>Nuestras redes Sociales</h2>
                            <div className="redesSociales">
                                <a className="rSociales" href="https://instagram.com/guarderia.elcountry?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
                                    <img src={instagramAzul} alt="" className="imgAzul"/>
                                    <h3>Instagram</h3>
                                </a>
                                <a className="rSociales" href="https://www.facebook.com/profile.php?id=100089201654528&mibextid=LQQJ4d" target="_blank">
                                    <img src={facebookAzul} alt="" className="imgAzul"/>
                                    <h3>Facebook</h3>
                                </a>
                                <a className="rSociales" href="https://www.tiktok.com/@guarderiacaninaelcountry" target="_blank">
                                    <img src={tiktokAzul} alt="" className="imgAzul"/>
                                    <h3>TikTok</h3>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="ubicacion">
                    <h2>Nos encontramos en:</h2>
                    <div className="ubiTab">
                    <img src={MAP} alt="" className="MAP"/>
                    <h3>Canning, Buenos Aires, Argentina.</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contactanos;