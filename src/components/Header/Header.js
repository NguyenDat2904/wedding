import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderMobile from './HeaderMobile';
import Logo from '../../assets/images/Page_3.png';

const cx = classNames.bind(style);

function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
   const menuItems = [
      { href: '#couple', title: 'Cặp đôi' },
      { href: '#story', title: 'Chuyện tình yêu' },
      { href: '#gallery', title: 'Album Hình Cưới' },
      { href: '#giftregistry', title: 'Sự kiện cưới' },
      { href: '#rsvp', title: 'Sổ Lưu Bút' },
      { href: '#donate', title: 'Mừng cưới' },
   ];

   return (
      <div>
         <HeaderMobile isOpen={isMobileMenuOpen} onClose={setIsMobileMenuOpen} />
         <header id="header">
            <div className="sticky-wrapper">
               <div className={cx('sticky-wrapper')}>
                  <div className={cx('nav-section')}>
                     <Container>
                        <div className="row">
                           <div className="col-sm-12">
                              <a href="#hero" className={cx('nav-logo')}>
                                 <img src={Logo} alt="" />
                              </a>
                              <nav className={cx('navbar')}>
                                 <ul className={cx('nav')}>
                                    {menuItems.map((item, i) => {
                                       return (
                                          <li key={i}>
                                             <a href={item.href} className>
                                                {item.title}
                                             </a>
                                          </li>
                                       );
                                    })}
                                 </ul>
                                 <button
                                    className={cx('nav-mobile-btn')}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                 >
                                    <FontAwesomeIcon icon={faBars} />
                                 </button>
                              </nav>
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
