import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Testimonials({ testimonialImages }) {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >      
        {testimonialImages.map((step, index) => (
          <div key={step.title}>
            <div>
              <img src={step.cloud_image_url} alt={step.title} />
              <div className="myCarousel">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
}
