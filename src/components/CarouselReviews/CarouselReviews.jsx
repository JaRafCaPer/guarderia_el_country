import React from "react";
import "./CarouselReviews.css";
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import pic5 from '../../assets/images/pic5.png';
import pic6 from '../../assets/images/pic6.png';
import Card from 'react-bootstrap/Card';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const CarouselReviews = () => {
    return (
        <>
            <div className='carrusel'>
                <Carousel data-bs-theme="while" className="slide" data-bs-interval="1000">
                    <Carousel.Item>
                        <Row className='justify-content-center'>
                            <Col className='col3'>
                                <Card className='card'>
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic1} className='img' />
                                        <div>
                                            <Card.Title className="cardTitle">Mónica Zimmermann</Card.Title>
                                            <p className="edad">56 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Fue una muy buena experiencia. Guiti adora a Yani y a sus gordas. Es una excelente
                                            persona y profesional. La queremos mucho. Siempre atenta a las necesidades de Guiti y nuestra”
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col3'>
                                <Card >
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic2} className='img' />
                                        <div>
                                            <Card.Title className="cardTitle">Nara Penerbosa</Card.Title>
                                            <p className="edad">33 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Les dejamos a Tita y nuestra experiencia fue buenísima! Nos contaba cómo estaba, mandaba videos e
                                            incluso la dejaron dormir al lado de la cama!
                                            No tengo más agradecimiento por cómo se portaron, recomiendo al 100%.”
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col3'>
                                <Card >
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic3} className='img' />
                                        <div>
                                            <Card.Title className="cardTitle">Camila Strack</Card.Title>
                                            <p className="edad">30 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Haber dejado a China con las chicas fue lo mejor que hicimos. Además recibimos consejos sobre la
                                            conducta que las chicas veían día a día y nos permitió mejorar como papás de Chinita.
                                            Super recomendables. Encima China las ama! “
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='justify-content-center'>
                            <Col className='col3'>
                                <Card >
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic4} className='img' />
                                        <div>
                                            <Card.Title className="cardTitle">Andrea Truszkowski</Card.Title>
                                            <p className="edad">47 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Excelente experiencia! Muy recomendable, Tokyo se quedo en 2 oportunidades, estuvo muy bien cuidada. Los grupos son reducidos y el cuidado es personalizado.
                                            Muchas gracias por cuidarla tan bien!!”
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col3'>
                                <Card className='card'>
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic5} className='img' />
                                        <div className="nameTag">
                                            <Card.Title className="cardTitle">Paula Rodriguez</Card.Title>
                                            <p className="edad">27 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Tina tuvo una experiencia perfecta! Están atentas a todos los detalles, y puedes ver un ratito del día de tu perritx, lo que lo hace sentir cercano y cuidado ❤️ Muy valioso, no es fácil encontrar un lugar confiable para su cuidado.”
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='col3'>
                                <Card >
                                    <div className="image-container">
                                        <Card.Img variant="top" src={pic6} className='img' />
                                        <div>
                                            <Card.Title className="cardTitle">María Inés Padula</Card.Title>
                                            <p className="edad">58 años</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Text className="cardText">
                                            “Fue la primera vez de Paris, nuestra frenchie, de pasar unos dias fuera de casa. Se adapto muy fácilmente. Diariamente nos enviaban fotos y videos. Estoy muy agradecida!! es grato saber que podemos contar con la guardería.”
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CarouselReviews;