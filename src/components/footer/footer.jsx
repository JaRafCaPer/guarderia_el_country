import React from 'react'
import './footer.css';
import logo from '../../utilities/images/Logo_footer.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logoWhatsapp from '../../utilities/images/WhatsApp.png'
import logoInstagram from '../../utilities/images/instagram.png'
import logoCorreo from '../../utilities/images/correo.png'
import logoTiktok from '../../utilities/images/tiktok.png'
import logoFacebook from '../../utilities/images/facebook.png'


const Footer = () => {
  return (
    <>
    <footer>
      <Row className='row'>
        <Col className='col'>
          <Image className='logo' src={logo}/>
        </Col>
        <Col className='redes'>
          <Row className='contRedes'>
                <Col className='cajaRedes'>
                <Image className='iconRedes' src={logoWhatsapp} />
               <p className= 'pRedes'> WhatsApp</p>
                </Col>
                <Col className='cajaRedes' >
                <Image className='iconRedes' src={logoCorreo} />
                <p className= 'pRedes'>Correo </p>
                </Col>
                <Col className='cajaRedes' >
                <Image className='iconRedes' src={logoInstagram} />
                <p className= 'pRedes'>Instagram </p>
                </Col>
                <Col className='cajaRedes' >
                <Image className='iconRedes' src={logoFacebook} />
                <p className= 'pRedes'>Facebook </p>
                </Col>
                <Col className='cajaRedes' >
                <Image className='iconRedes' src={logoTiktok} />
               <p className= 'pRedes'>Tiktok </p>
                </Col>
               
          </Row>
        </Col>
        <Col className='listPag hidden md:block'>
            <Row >
            <p>Inicio</p>
            </Row>
            <Row >
            <p>Sobre Nosotras</p>
            </Row>
            <Row >
            <p>Conócenos</p>
            </Row>
            <Row>
            <p>Contáctanos</p>
            </Row>
          </Col>
      </Row>
    </footer>
       

    </>
  )
}

export default Footer