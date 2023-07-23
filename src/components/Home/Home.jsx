import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './Home.css';
import perro from '../../assets/images/perro.png'
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';

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

                        </Row>
                    </Row>
                    <Row className='testCards justify-content-center'>
                        {/* <CarouselReviews /> */}
                    </Row>
                </div>
                <div className='col2'>
                    <div class="background"></div>
                    <Image className='imgPerro' src={perro} />
                </div>
            </div>
        </>
    )
};

export default Home