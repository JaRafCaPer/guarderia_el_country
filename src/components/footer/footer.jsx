import React from 'react'
import './footer.css';
import logo from '../../assets/images/Logo_footer.png'
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import logoWhatsapp from '../../assets/images/WhatsApp.png'
import logoInstagram from '../../assets/images/Instagram.png'
import logoCorreo from '../../assets/images/Gmail.png'
import logoTiktok from '../../assets/images/Tiktok.png'
import logoFacebook from '../../assets/images/Facebook.png'



const Footer = () => {
  return (
    <>

      <div className='footerContainer'>
        <div className='contLogo '>
          <Image src={logo} alt="" className='logo' />
        </div>
        <div className='redes'>
          <div className='contRedes'>
                <div className='cajaRedes1 text-decoration-none'>
                  <a className= 'pRedes1 text-decoration-none' href="https://wa.me/541168057707" target="_blank">
                    <Image className='iconosRedes' src={logoWhatsapp} />
                    <p className= 'nombreRedes'> WhatsApp</p>
                  </a>
                </div>
                <div className='cajaRedes2'>
                  <a className= 'pRedes2 text-decoration-none' href="mailto: guarderia.elcountry@gmail.com" target="_blank">
                      <Image className='iconosRedes' src={logoCorreo} />
                      <p className= 'nombreRedes'>Correo </p>
                  </a>
                </div>
                <div className='cajaRedes3'>
                  <a className= 'pRedes3 text-decoration-none' href="https://instagram.com/guarderia.elcountry?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
                    <Image className='iconosRedes' src={logoInstagram} />
                    <p className= 'nombreRedes'>Instagram </p>
                  </a>
                </div>
                <div className='cajaRedes4 text-decoration-none'>
                  <a className= 'pRedes4 text-decoration-none' href="https://www.facebook.com/profile.php?id=100089201654528&mibextid=LQQJ4d" target="_blank">
                      <Image className='iconosRedes' src={logoFacebook} />
                      <p className= 'nombreRedes'>Facebook </p>
                  </a>
                </div>
                <div className='cajaRedes5'>
                  <a className= 'pRedes text-decoration-none' href="https://www.tiktok.com/@guarderiacaninaelcountry" target="_blank">
                      <Image className='iconosRedes' src={logoTiktok} />
                      <p className= 'nombreRedes'>Tiktok </p>
                  </a>
                </div>
               
          </div>
        </div>
        <div className='listPag'>
        <Nav defaultActiveKey="/home" className="listFila ">
              <Nav.Link className='listNav text-dark' href="/home" >Inicio</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-1"  >Sobre Nosotras</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-2" >Conócenos</Nav.Link>
              <Nav.Link className='listNav text-dark' eventKey="link-3" >Contáctanos</Nav.Link>
            </Nav>
          </div>
      </div>
    
       

    </>
  )
}

export default Footer
