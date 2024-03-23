// Carousel.js
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="../assets/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="../assets/image2.png" alt="Image 2" />
      </div>
      <div>
        <img src="../assets/image3.png" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
