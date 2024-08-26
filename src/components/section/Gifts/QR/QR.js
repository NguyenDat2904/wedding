import React from 'react';
import './QR.scss';

function QR() {
   return (
      <div className="col-sm-6 col-lg-4 donate-card">
         <div className="map-info-container">
            <div
               className="info-wrapper animate-from-bottom animation-from-bottom mt-0"
               data-animation-direction="from-bottom"
               data-animation-delay={100}
            >
               <div className="location-info">
                  <div className="neela-style">
                     <span className="h-lines" />
                     <span className="v-lines" />
                     <span className="h-lines" />
                     <span className="v-lines" />
                     <h4 className="fs-5">Mừng cưới đến chú rể</h4>
                     <img
                        className="qr-code-image m-auto mb-2"
                        src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/49bc348db7eb284d9fc249b9d958893b.jpeg"
                     />
                     <p>
                        Ngân hàng: <strong>VPBank</strong>
                     </p>
                     <p>
                        Tên tài khoản: <strong>12345678910</strong>
                     </p>
                     <p>
                        Số tài khoản: <strong>Hoàng Kiến Văn</strong>
                     </p>
                     <p>
                        Chi nhánh: <strong>TP.HCM</strong>
                     </p>
                     <div className="info-map-divider" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default QR;
