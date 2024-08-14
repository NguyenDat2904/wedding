import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import HeaderMobile from './HeaderMobile';

const cx = classNames.bind(style);

function Header() {
   return (
      <div>
         <HeaderMobile />
         <header id="header">
            <div className="sticky-wrapper">
               <div className={cx('sticky-wrapper')}>
                  <div className={cx('nav-section')}>
                     <Container>
                        <div className="row">
                           <div className="col-sm-12">
                              <a href="#hero" className={cx('nav-logo')}>
                                 <h1>
                                    Đ
                                    <span className={cx('main-color')}>
                                       <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    T
                                 </h1>
                              </a>
                              {/* BEGIN MAIN MENU */}
                              <nav className={cx('navbar')}>
                                 <ul className={cx('nav')}>
                                    <li>
                                       <a href="#couple" className>
                                          Cặp đôi
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#story" className>
                                          Chuyện tình yêu
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#bridesmaids" className>
                                          Phù Dâu &amp; Phù Rể
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#gallery" className>
                                          Album Hình Cưới
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#events" className>
                                          Sự kiện cưới
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#rsvp" className>
                                          Sổ Lưu Bút
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#donate" className>
                                          Mừng cưới
                                       </a>
                                    </li>
                                 </ul>
                                 <button className={cx('nav-mobile-btn')}>
                                    <FontAwesomeIcon icon={faBars} />
                                 </button>
                                 {/* Mobile menu button */}
                              </nav>
                              {/* END MAIN MENU */}
                           </div>
                        </div>
                     </Container>
                  </div>
               </div>
            </div>
         </header>
      </div>
   );
}

export default Header;
