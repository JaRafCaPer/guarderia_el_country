import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './Home.css';
import perroNaranja from '../../assets/images/Perro - Naranja.png'
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';

const Home = () => {
  return (
    <>
    <div className='bg'>
        <div className='mainContainer'>
            <div className='sec1Cont'>
                <div className='innerCont'>
                        <div className='col1'>
                            <div className='texto'>
                                
                                    <h1> El Country </h1>
                                    <p className='pText'>Alojamiento para perros compuesto por dos educadoras caninas y tres perritas las cuales acompañarán a tu pequeño mientras debas ausentarte.
                                    Conocenos e infórmate sobre nuestro servicio brindado con la mejor calidad y cuidado para tu perro, ¡se sentirá como en casa en todo momento!</p>
                            </div>
                            <div>
                                <button className="button">
                                    Contactanos
                                </button>
                            </div>

                        </div>
                        <div className='col2'>
                            <Image className='imgPerro' src={perroNaranja}/>
                        </div>
                </div>
            </div>
            <div className='testCards'>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Home