import React from 'react';
import './QR.scss';

function QR({ title, img, nameBank, accountName, accountNumber }) {
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
                     <h4 className="fs-5">{title}</h4>
                     <img className="qr-code-image m-auto mb-2" src={img} />
                     <p>
                        Ngân hàng: <strong>{nameBank}</strong>
                     </p>
                     <p>
                        Tên tài khoản: <strong>{accountName}</strong>
                     </p>
                     <p>
                        Số tài khoản: <strong>{accountNumber}</strong>
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
