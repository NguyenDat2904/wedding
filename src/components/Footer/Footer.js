import React from 'react';
import './Footer.scss';
import { bride, groom } from '../data';
function Footer() {
   return (
      <footer id="footer-onepage" className="bg-color">
         <div className="footer-widget-area">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="footer-logo">
                        {groom.name}
                        <br />
                        <small>&amp;</small>
                        <br />
                        {bride.name}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
