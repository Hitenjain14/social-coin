// @ts-nocheck
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <div className="relative bg-bg-pattern bg-repeat">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        interval={5000}
        className="w-full"
      >
        <div className="h-[150px] md:h-[300px] lg:h-[450px]">
          <img
            loading="lazy"
            src="https://cdn.vox-cdn.com/thumbor/CdcsxABb9ZIPBqwmJlSHh1bMIfk=/0x0:7012x4680/1200x800/filters:focal(2735x1425:3855x2545)/cdn.vox-cdn.com/uploads/chorus_image/image/62434362/GettyImages_844230230.0.jpg"
            alt=""
            className="object-contain w-full h-[150px] md:h-[300px] lg:h-[450px] "
          />
        </div>
        <div className="h-[150px] md:h-[300px] lg:h-[450px]">
          <img
            loading="lazy"
            src="https://i2.wp.com/thehotmesspress.com/wp-content/uploads/2021/09/social-influencer.png?fit=720%2C599&ssl=1"
            alt=""
            className="object-contain w-full h-[150px] md:h-[300px] lg:h-[450px]"
          />
        </div>
        <div className="h-[150px] md:h-[300px] lg:h-[450px]">
          <img
            loading="lazy"
            src="https://miro.medium.com/max/2000/1*Nbtnxqlw4K9RLCfhLcJBcQ.jpeg"
            alt=""
            className="object-contain w-full h-[150px] md:h-[300px] lg:h-[450px]"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
