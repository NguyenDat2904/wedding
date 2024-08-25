import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import './Testimonial.scss';

function Testimonial() {
   const quotes = [
      'Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng.',
      'Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng 2.',
      'Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng 3.',
   ];
   return (
      <section id="testimonials" className="bg-color side-flowers-light">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-xl-10 offset-xl-1">
                  <Swiper
                     slidesPerView={1}
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                     }}
                     pagination={{
                        clickable: true,
                     }}
                     modules={[Autoplay, Pagination]}
                     className="testimonials-swiper"
                     loop
                  >
                     {quotes.map((quote, index) => (
                        <SwiperSlide key={index}>
                           <div className="item">
                              <blockquote>{quote}</blockquote>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Testimonial;
