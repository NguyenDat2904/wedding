import React, { Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TimeLine.scss';
import Date from './components/Date/Date';
import Gallery from './components/Gallery/Gallery';
import { storyData } from '../../data';
import diamond from '../../../assets/images/diamond-ring.png';

function TimeLine() {
   AOS.init();
   return (
      <section id="story">
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                  <div className="timeline">
                     {storyData.map((event, index) => (
                        <Fragment key={index}>
                           <Date date={event.date} />
                           <Gallery image={event.image} title={event.title} desc={event.desc} />
                        </Fragment>
                     ))}
                  </div>
                  <div className="timeline_footer">
                     <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        className="animate-from-top animation-from-top"
                     >
                        <img src={diamond} alt="diamond ring" />
                     </div>
                     <div
                        className="punchline animate-from-bottom animation-from-bottom"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="true"
                     >
                        <small>This is where our FOREVER BEGINS!</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default TimeLine;
