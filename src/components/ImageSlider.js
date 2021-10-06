import React, {useState} from 'react'
// import { SliderData } from './SliderData.js'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
let [currentImage, setImage] = useState(0)
const length = slides.length

const nextSlide = () => {
    setImage(currentImage === length - 1 ? 0 : currentImage += 1 )
}

const prevSlide = () => {
    setImage(currentImage === 0 ? length - 1: currentImage - 1 )
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return "something failed with the slideshow images"
}

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide,index)=>{

                return (
                    <div className={index=== currentImage ? 'slide active': 'slide'} key={index}>
                    {index===currentImage && (<img className="sliderImage" src= {slide.image} alt="Game Screenshot" />)}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
