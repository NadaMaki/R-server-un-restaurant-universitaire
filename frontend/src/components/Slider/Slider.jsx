import React, { useState, useEffect } from 'react';
import Slider from "react-animated-slider";
import data from './sliderData.js';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './styles/slider-animation.css';
import './styles/styles.css';

const SliderComponent = () => {

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        setSlider(data)
    },[])

    return (
        <div>
            <Slider className="slider-wrapper main"  autoplay={1000}>
                
                {slider.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center`}}
                        width = "1920px"
                        height = "900px"
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description} </p>
                        </div>
                    </div>
                ))}
            
            </Slider>
        </div>


    )
}

export default SliderComponent
