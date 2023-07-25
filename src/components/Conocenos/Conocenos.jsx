import React from 'react'
import './Conocenos.css'
import { Image, Carousel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import perroAzul from '../../assets/images/Perro - azul.svg'
import CarouselReviews from '../CarouselReviews/CarouselReviews'
import CarouselMid from '../../assets/images/Pampa-Bubba-Petit (42) 1.jpg'
import CarouselIni from '../../assets/images/Pampa-Bubba-Petit (34) 1.jpg'
import CarouselSec from '../../assets/images/Pampa-Bubba-Petit (27) 1.jpg'
import CarouselCua from '../../assets/images/Pampa-Bubba-Petit (24) 1.jpg'
import CarouselQui from '../../assets/images/Pampa-Bubba-Petit (35) 1.jpg'


const Conocenos = () => {
    return (
        <>
            <div className='contPrinc'>
                <div className='cabeza'>
                    <Image className='perroAzul' src={perroAzul}/>
                    <h1 className='nosotrasTitle'> Nosotras</h1>
                </div>
                <div className='carrouselFotosContainer'>
                    <Carousel data-bs-theme="while" className="slide" data-bs-interval="1000">
                        <Carousel.Item>
                            <div className='carrouselFotos'>
                                <div className='colCar'>
                                        <Card className='card'>
                                            <div className="image-container">
                                                <Card.Img  src={CarouselIni} className='imgCar' />
                                            </div>
                                        </Card>
                                </div>
                                <div className='colCar'>
                                        <Card className='card'>
                                            <div className="image-container">
                                                <Card.Img  src={CarouselSec} className='imgCar' />
                                            </div>
                                        </Card>
                                </div>
                                <div className='colCar'>
                                        <Card className='card1'>
                                            <div className="image-container">
                                                <Card.Img  src={CarouselMid} className='imgCar' />
                                            
                                            </div>

                                        </Card>
                                </div>
                                <div className='colCar'>
                                        <Card className='card'>
                                            <div className="image-container">
                                                <Card.Img  src={CarouselCua} className='imgCar' />
                                            
                                            </div>

                                        </Card>
                                </div>
                                <div className='colCar'>
                                        <Card className='card'>
                                            <div className="image-container">
                                                <Card.Img  src={CarouselQui} className='imgCar' />
                                            </div>
                                        </Card>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='carrouselReviews'>
                        <CarouselReviews/>
                </div>
            </div>
        </>
    )
}

export default Conocenos