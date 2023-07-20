import React from 'react'
import './footer.css';
import logo from '../../assets/images/Logo_footer.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import logoWhatsapp from '../../assets/images/WhatsApp.png'
import logoInstagram from '../../assets/images/Instagram.png'
import logoCorreo from '../../assets/images/Gmail.png'
import logoTiktok from '../../assets/images/Tiktok.png'
import logoFacebook from '../../assets/images/Facebook.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>

      <Row className='footerContainer'>
        <Col className='contLogo '>
          <Image src={logo} alt="" className='logo' />
        </Col>
        <Col className='redes'>
          <Row className='contRedes'>
                <Col className='cajaRedes'>
                  <a className= 'pRedes' href="https://wa.me/541168057707" target="_blank">
                    <Image className='iconosRedes' src={logoWhatsapp} />
                    <p className= 'nombreRedes'> WhatsApp</p>
                  </a>
                </Col>
                <Col className='cajaRedes'>
                  <a className= 'pRedes' href="mailto: guarderia.elcountry@gmail.com" target="_blank">
                      <Image className='iconosRedes' src={logoCorreo} />
                      <p className= 'nombreRedes'>Correo </p>
                  </a>
                </Col>
                <Col className='cajaRedes'>
                  <a className= 'pRedes' href="https://instagram.com/guarderia.elcountry?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
                    <Image className='iconosRedes' src={logoInstagram} />
                    <p className= 'nombreRedes'>Instagram </p>
                  </a>
                </Col>
                <Col className='cajaRedes'>
                  <a className= 'pRedes' href="https://www.facebook.com/profile.php?id=100089201654528&mibextid=LQQJ4d" target="_blank">
                      <Image className='iconosRedes' src={logoFacebook} />
                      <p className= 'nombreRedes'>Facebook </p>
                  </a>
                </Col>
                <Col className='cajaRedes'>
                  <a className= 'pRedes' href="https://www.tiktok.com/@guarderiacaninaelcountry" target="_blank">
                      <Image className='iconosRedes' src={logoTiktok} />
                      <p className= 'nombreRedes'>Tiktok </p>
                  </a>
                </Col>
               
          </Row>
        </Col>
        <Col className='listPag hidden sm:block'>
        <Nav defaultActiveKey="/home" className="listFila flex-column">
              <Nav.Link className='listNav text-dark' href="/home" >Inicio</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-1"  >Sobre Nosotras</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-2" >Conócenos</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-3" >Contáctanos</Nav.Link>
            </Nav>
          </Col>
      </Row>
    
       

    </>
  )
}

export default Footer
