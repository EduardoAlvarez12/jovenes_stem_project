import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Testimonials({ testimonialsData }) {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={7500}
    >      
        {testimonialsData.map((step, index) => (
          <div key={step.title}>
            <div>
              <img src={step.cloud_image_url} alt={step.title} />
              <div className="myCarousel">
                <h3>{step.title}</h3>
                <div>{step.description}</div>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
}
