import React, { useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames/bind';
import style from './AboutUs.module.scss';
import { Icon, aboutUsData } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons/faSquareInstagram';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons/faSquareTwitter';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons/faSquareFacebook';
const cx = classNames.bind(style);

function AboutUs() {
   const iconClass = useRef(null); // Tham chiếu đến phần tử icon

   // Cập nhật class cho phần tử icon
   const updateIconClass = (shouldAdd) => {
      if (iconClass.current) {
         if (shouldAdd) {
            iconClass.current.classList.add(cx('animation-fade'));
         } else {
            iconClass.current.classList.remove(cx('animation-fade'));
         }
      }
   };

   const handleMouseEnterGroom = () => {
      // Xóa class animation-fade khi hover vào groom
      updateIconClass(false);
   };

   const handleMouseEnterBride = () => {
      // Thêm class animation-fade khi hover vào bride
      updateIconClass(true);
   };

   AOS.init();
   return (
      <section id="couple" className={cx('couple')}>
         <div className="container">
            <div className={cx('row', 'about-elems-wrapper')}>
               <div
                  className={cx('element', 'col-md-6 col-xl-4 offset-xl-2 visible')}
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
               >
                  <div className={cx('image')} onMouseEnter={handleMouseEnterGroom}>
                     <img src={aboutUsData.groom.image} alt width={600} height={714} />
                     <div className={cx('hover-info', 'neela-style')}>
                        <span className={cx('h-lines')} />
                        <span className={cx('v-lines')} />
                        <div className={cx('content')}>
                           <h3>
                              {aboutUsData.groom.full_name}
                              <small>The Groom</small>
                           </h3>
                           <p>
                              Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ
                              Chí Minh. Là...
                              <a
                                 className={cx('button-see')}
                                 data-src={aboutUsData.groom.image}
                                 data-content={aboutUsData.groom.description}
                                 data-twitter={aboutUsData.groom.social.twitter}
                                 data-facebook={aboutUsData.groom.social.facebook}
                                 data-name={aboutUsData.groom.full_name}
                                 style={{ fontSize: 14, cursor: 'pointer' }}
                              >
                                 Xem thêm
                                 <i className="bi bi-arrow-down-short" />
                              </a>
                           </p>
                           <ul className={cx('sn-icons')}>
                              <li>
                                 <a href={aboutUsData.groom.social.instagram}>
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                 </a>
                              </li>
                              <li>
                                 <a href={aboutUsData.groom.social.twitter}>
                                    <FontAwesomeIcon icon={faSquareTwitter} />
                                 </a>
                              </li>
                              <li>
                                 <a href={aboutUsData.groom.social.facebook}>
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('divider-about-us', 'visible')}>
                  <div className={cx('flip')} ref={iconClass}>
                     <Icon.twoHearts className={cx('icon-heart')} />
                  </div>
               </div>
               <div
                  className={cx('element', 'col-md-6 col-xl-4 visible')}
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1500"
               >
                  <div className={cx('image', 'flip')} onMouseEnter={handleMouseEnterBride}>
                     <img src={aboutUsData.bride.image} alt width={600} height={714} />
                     <div className={cx('hover-info', 'neela-style')}>
                        <span className={cx('h-lines')} />
                        <span className={cx('v-lines')} />
                        <div className={cx('content')}>
                           <h3>
                              {aboutUsData.bride.full_name}
                              <small>The Bride</small>
                           </h3>
                           <p>
                              Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt
                              nghiệp Học vi...
                              <a
                                 className={cx('button-see')}
                                 data-src={aboutUsData.bride.image}
                                 data-content={aboutUsData.bride.description}
                                 data-instagram={aboutUsData.bride.social.instagram}
                                 data-twitter={aboutUsData.bride.social.twitter}
                                 data-facebook={aboutUsData.bride.social.facebook}
                                 data-name={aboutUsData.bride.full_name}
                                 style={{ fontSize: 14, cursor: 'pointer' }}
                              >
                                 Xem thêm
                                 <i className="bi bi-arrow-down-short" />
                              </a>
                           </p>
                           <ul className={cx('sn-icons')}>
                              <li>
                                 <a href={aboutUsData.bride.social.instagram}>
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                 </a>
                              </li>
                              <li>
                                 <a href={aboutUsData.bride.social.twitter}>
                                    <FontAwesomeIcon icon={faSquareTwitter} />
                                 </a>
                              </li>
                              <li>
                                 <a href={aboutUsData.bride.social.facebook}>
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div
                  className={cx('about-us-desc', 'col-lg-8 offset-lg-2 visible')}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
               >
                  <h3>{aboutUsData.title}</h3>
                  <p>{aboutUsData.description}</p>
                  <p className={cx('groom-bride-signature')}>
                     <span>{aboutUsData.groom.name}</span> &amp; <span>{aboutUsData.bride.name}</span>
                  </p>
                  <div className={cx('parent-info-group')}>
                     <div className={cx('parent-infos')}>
                        <div className={cx('parent-info')}>
                           <span className={cx('parent-title')}>Con ông:</span>{' '}
                           <span className={cx('parent-name')}>{aboutUsData.groom.father}</span>
                        </div>
                        <div className={cx('parent-info')}>
                           <span className={cx('parent-title')}>Con bà:</span>{' '}
                           <span className={cx('parent-name')}>{aboutUsData.groom.mother}</span>
                        </div>
                     </div>
                     <div className={cx('parent-infos')}>
                        <div className={cx('parent-info')}>
                           <span className={cx('parent-title')}>Con ông:</span>{' '}
                           <span className={cx('parent-name')}>{aboutUsData.bride.father}</span>
                        </div>
                        <div className={cx('parent-info')}>
                           <span className={cx('parent-title')}>Con bà:</span>{' '}
                           <span className={cx('parent-name')}>{aboutUsData.bride.mother}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutUs;
