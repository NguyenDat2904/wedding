import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Date.scss';
function Date({ date }) {
   AOS.init();

   return (
      <div
         className="year animate-from-top animation-from-top"
         data-aos="fade-down"
         data-aos-delay="0.1"
         data-aos-easing="ease-in-out"
         data-aos-offset="0"
         data-aos-duration="1000"
         data-aos-once="true"
      >
         <span className="neela-style">
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            {date}
         </span>
      </div>
   );
}

export default Date;
