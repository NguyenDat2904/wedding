import React, { useState, useEffect, useRef } from 'react';
import './ZoomSlider.css'; // Include your CSS styles

const ZoomSlider = ({
   src,
   speed = 10000,
   switchSpeed = 800,
   interval = 4500,
   autoplay = true,
   bullets = true,
   overlay = 'plain',
}) => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isPlaying, setIsPlaying] = useState(autoplay);
   const numSlides = src.length;
   const slideInterval = useRef(null);

   useEffect(() => {
      if (autoplay) {
         startSlideshow();
      }
      return () => {
         stopSlideshow();
      };
   }, [currentSlide, autoplay]);

   const startSlideshow = () => {
      stopSlideshow();
      slideInterval.current = setInterval(() => {
         nextSlide();
      }, interval);
   };

   const stopSlideshow = () => {
      if (slideInterval.current) {
         clearInterval(slideInterval.current);
      }
   };

   const jumpToSlide = (index) => {
      if (index >= 0 && index < numSlides) {
         setCurrentSlide(index);
         if (autoplay) {
            startSlideshow();
         }
      }
   };

   const nextSlide = () => {
      jumpToSlide((currentSlide + 1) % numSlides);
   };

   const prevSlide = () => {
      jumpToSlide((currentSlide - 1 + numSlides) % numSlides);
   };

   return (
      <div className={`zs-container ${overlay}`}>
         <div className="zs-slideshow">
            <div className="zs-slides">
               {src.map((image, index) => (
                  <div
                     key={index}
                     className={`zs-slide ${currentSlide === index ? 'active' : ''}`}
                     style={{
                        backgroundImage: `url(${image})`,
                        transition: `transform ${speed}ms ease-out, opacity ${switchSpeed}ms`,
                        opacity: currentSlide === index ? 1 : 0,
                        transform: currentSlide === index ? 'scale(1.0, 1.0)' : 'scale(1.1, 1.1)',
                        zIndex: currentSlide === index ? 2 : 1,
                     }}
                  ></div>
               ))}
            </div>
            {bullets && (
               <div className="zs-bullets">
                  {src.map((_, index) => (
                     <div
                        key={index}
                        className={`zs-bullet ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => jumpToSlide(index)}
                     ></div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default ZoomSlider;
