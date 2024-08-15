import React from 'react';
import classNames from 'classnames/bind';
import style from './Hero.module.scss';
const cx = classNames.bind(style);
function Hero() {
   return (
      <section id="hero" className={cx('hero')}>
         <div className={cx('zs-slideshow')}>
            <div className={cx('zs-slides')}>
               <div
                  className={cx('zs-slide', 'zs-slide-0', 'active')}
                  style={{
                     backgroundImage:
                        'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/a33b08a813ee02e7a4b7d72ce05d9e93.jpg")',
                     transition: 'transform 10000ms ease-out, opacity 1000ms',
                     opacity: 1,
                     transform: 'scale(1, 1)',
                     zIndex: 1,
                  }}
               />
               <div
                  className={cx('zs-slide', 'zs-slide-1', 'active')}
                  style={{
                     backgroundImage:
                        'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/1f6f6347c9eec78781d536c34c177bb8.jpg")',
                     transition: 'transform 10000ms ease-out, opacity 1000ms',
                     opacity: 1,
                     transform: 'scale(1, 1)',
                     zIndex: 2,
                  }}
               />
               <div
                  className={cx('zs-slide', 'zs-slide-2')}
                  style={{
                     backgroundImage:
                        'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/b0ccc21579cf9df6a113314b039ec33e.jpg")',
                  }}
               />
            </div>
         </div>
         <div className="container" style={{ zIndex: 2, marginTop: '101.07px' }}>
            <div className="row">
               <div className="col-sm-12">
                  <div className={cx('hero-wrapper')}>
                     <h2 data-animation-direction="fade" data-animation-delay={600} className={cx('visible')}>
                        Save the Date
                     </h2>
                     <h1 className={cx('hero-title', 'light')}>
                        <span
                           className={cx('d-block', 'd-sm-inline', 'visible')}
                           data-animation-direction="from-right"
                           data-animation-delay={300}
                        >
                           Văn Đạt{' '}
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
                           Phương Thảo
                        </span>
                     </h1>
                     <div
                        className={cx('hero-subtitle', 'light', 'visible')}
                        data-animation-direction="fade"
                        data-animation-delay={1000}
                     >
                        04 Tháng 4 2024
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
