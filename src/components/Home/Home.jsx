import React from 'react'
import './Home.css';
import perroNaranja from '../../assets/images/Perro - Naranja.png'
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import CarouselReviews from '../CarouselReviews/CarouselReviews';

const Home = () => {
    return (
        <>
            <div className='bg'>
                <div className='mainContainer hidden md:block'>
                    <Row className='sec1Cont'>
                        <Row className='innerCont'>
                            <Col className='col1'>
                                <Row className='texto'>

                                    <h1> El Country </h1>
                                    <p className='pText'>Alojamiento para perros compuesto por dos educadoras caninas y tres perritas las cuales acompañarán a tu pequeño mientras debas ausentarte.
                                        Conocenos e infórmate sobre nuestro servicio brindado con la mejor calidad y cuidado para tu perro, ¡se sentirá como en casa en todo momento!</p>
                                </Row>
                                <Row>
                                    <button className="button">
                                        Contactanos
                                    </button>
                                </Row>

                            </Col>
                            <Col className='col2'>
                                <Image className='imgPerro' src={perroNaranja} />
                            </Col>
                        </Row>
                    </Row>
                    <Row className='testCards justify-content-center'>
                    <CarouselReviews/>
                    </Row>
                </div>
            </div >
        </>
    )
}

export default Home