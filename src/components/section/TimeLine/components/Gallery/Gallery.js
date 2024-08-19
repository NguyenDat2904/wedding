import React from 'react';
import './Gallery.scss';
import Title from '../../../../Title/Title';

function Gallery({ image, title, desc }) {
   return (
      <div className="gallery-container">
         <div
            className="timeline-gallery-wrapper animate-from-left animation-from-left"
            data-animation-direction="from-left"
            data-animation-delay={250}
         >
            <div className="timeline-gallery-del">
               <div className="item text-center">
                  <img src={image} alt={title} className="w-100 h-auto" style={{ maxWidth: 500 }} />
               </div>
            </div>
         </div>
         <div
            className="description-wrapper animate-from-bottom animation-from-bottom"
            data-animation-direction="from-bottom"
            data-animation-delay={250}
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
