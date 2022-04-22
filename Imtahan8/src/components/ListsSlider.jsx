import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './data.json'

export default function SimpleSlider() {
    const newCoins = data.slice(0, 7)
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        arrows: true,
        row: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                },
            }
        ]
    };
    return (
        <Slider {...settings}>
            {newCoins.map((value, index) => (
                <div className="item" key={index}>
                    <p><img src={value.image} alt={value.name} /> <p>
                        Name: <span>{value.name}</span></p></p>
                    <p>Symbol: <span>{value.symbol}</span></p>
                    <p className='percent'>{(value.price_change_percentage_24h).toFixed(1)}%</p>
                </div>
            ))}
        </Slider>
    );
}