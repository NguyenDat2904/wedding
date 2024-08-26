import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faClock, faLocationPin, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button/Button';

function Card({ img, title, time, location, googleMap, textType }) {
   AOS.init();

   return (
      <li className="animate-from-bottom card-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
         <div className="neela-style">
            <span className="h-lines" />
            <span className="v-lines" />
            <div className="d-flex align-items-center event-item-content">
               <img
                  className="d-inline-block rounded-circle me-0 mb-4 me-lg-3 mb-lg-0"
                  height={100}
                  width={100}
                  alt={title}
                  src={img}
               />
               <div
                  className="d-inline-block"
                  style={{
                     boxSizing: 'border-box',
                     display: 'inline-block',
                  }}
               >
                  <h3 className="w-100">{title}</h3>
                  <div className="dresscode-colors-wrap" style={{ boxSizing: 'border-box', width: '100%' }}>
                     <div className="dresscode-colors-event">
                        <FontAwesomeIcon icon={faUserTie} />
                        <span className="tooltip-dresscode" style={{ boxSizing: 'border-box' }}>
                           Dress Code:{' '}
                        </span>
                        <div className="dresscode-colors-item" style={{ background: '#eda2b6' }} />
                        <div className="dresscode-colors-item" style={{ background: 'var(--white)' }} />
                        <div className="dresscode-colors-item" style={{ background: '#32435f' }} />
                     </div>
                  </div>
                  <p className="w-100 mb-2 mt-2">
                     <FontAwesomeIcon icon={faClock} /> <strong>{time}</strong>
                  </p>
                  <p
                     className="w-100 mb-0 mt-1"
                     style={{
                        boxSizing: 'border-box',
                        margin: '0px 0px 20px',
                        width: '100%',
                        marginTop: '0.25rem',
                        marginBottom: '0px',
                     }}
                  >
                     <FontAwesomeIcon icon={faLocationPin} />{' '}
                     <span style={{ boxSizing: 'border-box' }}>{textType} - </span>
                     <strong>{location}</strong>
                  </p>
               </div>
            </div>
            <div className="info">
               <Button title="Thêm vào lịch" href="#" primary className="btn-event" />
               <Button
                  title="Xem bản đồ  "
                  href={googleMap}
                  target={'_blank'}
                  primary
                  rightIcon={faAngleRight}
                  className="btn-event"
               />
            </div>
         </div>
      </li>
   );
}

export default Card;
