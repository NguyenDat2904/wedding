import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Invitation.scss';
import Title from '../../Title/Title';
function Invitation() {
   AOS.init();

   return (
      <section
         id="invitation"
         className="parallax-background bg-color-overlay padding-divider-top"
         style={{
            backgroundImage:
               'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/d4f33748bf87fde12d34aa8146e57b4c.jpg")',
            backgroundPosition: 'center 45px',
         }}
      >
         <div className="section-divider-top-1 off-section" />
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <Title value={'Xem video cưới của chúng tôi!'} light />
               </div>
            </div>
            <div
               className="invite neela-style animate-from-left animation-from-left"
               data-aos="fade-right"
               data-aos-duration="1500"
               data-aos-delay="250"
               data-aos-once="true"
            >
               <span className="h-lines" />
               <span className="v-lines" />
               <div className="ratio ratio-16x9">
                  <iframe
                     className="border border-5 border-white w-100 h-100"
                     style={{ borderWidth: '10px !important', width: 956, height: '543.224px' }}
                     src="https://www.youtube.com/embed/lGUdD29BDMg"
                     allowFullScreen
                     data-aspectratio="0.559"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Invitation;
