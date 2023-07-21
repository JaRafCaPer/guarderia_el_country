import React from 'react'
import './footer.css';
import logo from '../../assets/images/Logo_footer.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import logoWhatsapp from '../../assets/images/WhatsApp.png'
import logoInstagram from '../../assets/images/Instagram.png'
import logoCorreo from '../../assets/images/Gmail.png'
import logoTiktok from '../../assets/images/Tiktok.png'
import logoFacebook from '../../assets/images/Facebook.png'
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer>
      <Row className='row'>
        <Col className='col'> 
          <Link>
          <img src={logo} alt="" className='logo' />
          </Link>
        </Col>
        <Col className='redes'>
          <Row className='contRedes'>
                <Col >
                  <a className='cajaRedes' href="https://wa.me/541168057707" target="_blank">
                    <Image className='iconRedes' src={logoWhatsapp} />
                    <p className= 'pRedes'> WhatsApp</p>
                  </a>
                </Col>
                <Col>
                  <a className='cajaRedes' href="mailto: guarderia.elcountry@gmail.com" target="_blank">
                      <Image className='iconRedes' src={logoCorreo} />
                      <p className= 'pRedes'>Correo </p>
                  </a>
                </Col>
                <Col className='cajaRedes' >
                  <a href="https://instagram.com/guarderia.elcountry?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
                    <Image className='iconRedes' src={logoInstagram} />
                    <p className= 'pRedes'>Instagram </p>
                  </a>
                </Col>
                <Col>
                  <a className='cajaRedes' href="https://www.facebook.com/profile.php?id=100089201654528&mibextid=LQQJ4d" target="_blank">
                      <Image className='iconRedes' src={logoFacebook} />
                      <p className= 'pRedes'>Facebook </p>
                  </a>
                </Col>
                <Col>
                  <a className='cajaRedes' href="https://www.tiktok.com/@guarderiacaninaelcountry" target="_blank">
                      <Image className='iconRedes' src={logoTiktok} />
                      <p className= 'pRedes'>Tiktok </p>
                  </a>
                </Col>
               
          </Row>
        </Col>
        <Col className='listPag hidden md:block'>
            <Row className='listFila' >
            <Link to={`#`} className="navLink"> Inicio </Link>
            </Row>
            <Row className='listFila' >
            <Link to={`#`} className="">Sobre Nosotras</Link>
            </Row>
            <Row className='listFila'>
            <NavLink to={`#`} className="">Conócenos</Link>
            </Row>
            <Row className='listFila'>
            <Link to={`#`} className="">Contáctanos</Link>
            </Row>
          </Col>
      </Row>
    </footer>
       

    </>
  )
}

export default Footer
