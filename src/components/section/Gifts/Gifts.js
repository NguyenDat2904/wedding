import React from 'react';
import './Gifts.scss';
import Title from '../../Title/Title';
import QR from './QR/QR';
import { bride, groom } from '../../data';
import qrImage from '../../../assets/images/qr_dat.jpg';
import qrImage2 from '../../../assets/images/qr_thao.jpg';

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
               <QR
                  title="Mừng cưới đến chú rể"
                  accountName={groom.full_name}
                  nameBank="TP Bank"
                  accountNumber="03576226978"
                  img={qrImage}
               />
               <QR
                  title="Mừng cưới đến cô dâu"
                  accountName={bride.full_name}
                  nameBank="TP Bank"
                  accountNumber="0363012944"
                  img={qrImage2}
               />
            </div>
         </div>
      </section>
   );
}

export default Gifts;
