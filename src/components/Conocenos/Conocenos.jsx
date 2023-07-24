import React from 'react'
import './Conocenos.css'
import { Image } from 'react-bootstrap'
import perroAzul from '../../assets/images/Perro - azul.svg'
import CarouselReviews from '../CarouselReviews/CarouselReviews'


const Conocenos = () => {
    return (
        <>
            <div className='contPrinc'>
                <div className='cabeza'>
                    <Image className='perroAzul' src={perroAzul}/>
                    <h1 className='nosotrasTitle'> Nosotras</h1>
                </div>
                <div className='carrouselFotosContainer'>
                    <div className='carrouselFotos'>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                    </div>
                </div>
                <div className='carrouselReviews'>
                        <CarouselReviews/>
                </div>
            </div>
        </>
    )
}

export default Conocenos