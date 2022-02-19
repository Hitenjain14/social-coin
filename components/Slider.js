// @ts-nocheck
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        interval={5000}
      >
        <div className="">
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div className="">
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div className="">
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
