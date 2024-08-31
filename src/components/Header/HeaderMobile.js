import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function HeaderMobile({ isOpen, onClose }) {
   return (
      <nav className={cx('nav-mobile', isOpen && 'open')}>
         <FontAwesomeIcon icon={faCircleXmark} onClick={() => onClose(false)} />
         <h2>Menu</h2>
         <ul>
            <li>
               <a href="#couple">Cặp đôi</a>
            </li>
            <li>
               <a href="#story">Chuyện tình yêu</a>
            </li>
            <li>
               <a href="#gallery">Album Hình Cưới</a>
            </li>
            <li>
               <a href="#giftregistry">Sự kiện cưới</a>
            </li>
            <li>
               <a href="#rsvp">Sổ Lưu Bút</a>
            </li>
            <li>
               <a href="#donate">Mừng cưới</a>
            </li>
         </ul>
      </nav>
   );
}

export default HeaderMobile;
