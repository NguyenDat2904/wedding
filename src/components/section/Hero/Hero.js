import React, { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import classNames from 'classnames/bind';
import style from './Hero.module.scss';
import ZoomSlider from '../../ZomeSlider/ZomeSlider';
import { globalData, heroImagesSlider } from '../../data';
const cx = classNames.bind(style);
function Hero() {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
      }, 5000);
      return () => clearInterval(timer);
   }, []);

   return (
      <section id="hero" className={cx('hero')}>
         <ZoomSlider src={heroImagesSlider} bullets={false} />
         <div className="container" style={{ zIndex: 2, marginTop: '101.07px' }}>
            <div className="row">
               <div className="col-sm-12">
                  <div className={cx('hero-wrapper', 'v-center')}>
                     <h2 className={cx('visible')}>Save the Date</h2>
                     <h1 className={cx('hero-title', 'light')}>
                        <span className={cx('d-block', 'd-sm-inline', 'visible')}>{globalData.groomName} </span>
                        <small className={cx('d-block', 'd-sm-inline', 'visible')}>&amp;</small>
                        <span className={cx('d-block', 'd-sm-inline', 'visible')}> {globalData.brideName}</span>
                     </h1>
                     <div className={cx('hero-subtitle', 'light', 'visible')}>{globalData.weddingDate}</div>
                     <div className={cx('animation-fade', 'animate-fade')} style={{ marginTop: '40px' }}>
                        <Button white title="Gửi lời chúc" href="#rsvp" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
