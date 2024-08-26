import React from 'react';
import './Gifts.scss';
import Title from '../../Title/Title';
import QR from './QR/QR';

function Gifts() {
   return (
      <section id="donate">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <Title value="Hộp mừng cưới" primary />
               </div>
            </div>
         </div>
         <div className="container donate-box">
            <div className="row justify-content-center">
               <QR />
               <QR />
            </div>
         </div>
      </section>
   );
}

export default Gifts;
