import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import slide1 from "./images/octavia2020.jpg"
import slide2 from "./images/oct22.jpg"
import slide3 from "./images/oct3.jpg"
import slide4 from "./images/oct4.jpg"
import "./slider.css"

const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />
]

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
 
   
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 5000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1

    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
return (
    <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
)
}