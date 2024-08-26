import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.scss';
import Title from '../../../../Title/Title';

function Gallery({ image, title, desc }) {
   AOS.init();
   return (
      <div className="gallery-container">
         <div
            className="timeline-gallery-wrapper animate-from-left animation-from-left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
         >
            <div className="timeline-gallery-del">
               <div className="item text-center">
                  <img src={image} alt={title} className="w-100 h-auto" style={{ maxWidth: 500 }} />
               </div>
            </div>
         </div>
         <div
            className="description-wrapper animate-from-bottom animation-from-bottom"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
         >
            <div className="description">
               <div className="neela-style">
                  <span className="h-lines" />
                  <span className="v-lines" />
                  <Title value={title} light style="custom" />
                  <p>{desc}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Gallery;
