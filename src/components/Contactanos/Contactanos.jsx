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
                    <h2>Escribenos vía</h2>
                    <div className="escribinos">
                        <div className="wsp">
                            <img src={whatsAppAzul} alt="" className="imgAzul" />
                            <h3>WhatsApp</h3>
                        </div>
                        <div className="gmail">
                            <img src={gmailAzul} alt="" className="imgAzul" />
                            <h3>Gmail</h3>
                        </div>
                    </div>

                    <h2>Nuestras redes Sociales</h2>
                    <div className="redesSociales">
                        <div className="rSociales">
                            <img src={instagramAzul} alt="" className="imgAzul"/>
                            <h3>Instagram</h3>
                        </div>
                        <div className="rSociales">
                            <img src={facebookAzul} alt="" className="imgAzul"/>
                            <h3>Facebook</h3>
                        </div>
                        <div className="rSociales">
                            <img src={tiktokAzul} alt="" className="imgAzul"/>
                            <h3>TikTok</h3>
                        </div>
                    </div>
                </div>
                <div className="ubicacion">
                    <h2>Nos encontramos en</h2>
                    <img src={MAP} alt="" className="MAP"/>
                    <h3>Canning, Buenos Aires, Argentina.</h3>
                </div>
            </div>

        </div>
    );
}

export default Contactanos;