import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Hero.module.scss';
import ZoomSlider from '../../ZomeSlider/ZomeSlider';
import { globalData, heroImagesSlider } from '../../data';
const cx = classNames.bind(style);
function Hero() {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prevSlide) =>
            // Nếu đây là slide cuối cùng, quay lại slide đầu tiên, ngược lại tăng chỉ số slide
            prevSlide === 2 ? 0 : prevSlide + 1,
         );
      }, 5000); // 5000ms = 5 giây

      // Dọn dẹp bộ đếm thời gian khi component bị unmount
      return () => clearInterval(timer);
   }, []);

   return (
      <section id="hero" className={cx('hero')}>
         <ZoomSlider src={heroImagesSlider} bullets={false} />
         <div className="container" style={{ zIndex: 2, marginTop: '101.07px' }}>
            <div className="row">
               <div className="col-sm-12">
                  <div className={cx('hero-wrapper', 'v-center')}>
                     <h2 data-animation-direction="fade" data-animation-delay={600} className={cx('visible')}>
                        Save the Date
                     </h2>
                     <h1 className={cx('hero-title', 'light')}>
                        <span
                           className={cx('d-block', 'd-sm-inline', 'visible')}
                           data-animation-direction="from-right"
                           data-animation-delay={300}
                        >
                           {globalData.groomName}{' '}
                        </span>
                        <small
                           className={cx('d-block', 'd-sm-inline', 'visible')}
                           data-animation-direction="from-top"
                           data-animation-delay={300}
                        >
                           &amp;
                        </small>
                        <span
                           className={cx('d-block', 'd-sm-inline', 'visible')}
                           data-animation-direction="from-left"
                           data-animation-delay={300}
                        >
                           {' '}
                           {globalData.brideName}
                        </span>
                     </h1>
                     <div
                        className={cx('hero-subtitle', 'light', 'visible')}
                        data-animation-direction="fade"
                        data-animation-delay={1000}
                     >
                        {globalData.weddingDate}
                     </div>
                     <div
                        data-animation-direction="fade"
                        data-animation-delay={1000}
                        className={cx('animation-fade', 'animate-fade')}
                     >
                        <a href="#rsvp" className={cx('btn', 'btn-light', 'scrollto')} style={{ width: 214 }}>
                           <span className={cx('h-lines')} />
                           <span className={cx('v-lines')} />
                           Gửi lời chúc
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
