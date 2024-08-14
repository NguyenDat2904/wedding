import React from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
const cx = classNames.bind(style);

function HeaderMobile() {
   return (
      <nav className={cx('nav-mobile')}>
         <FontAwesomeIcon icon={faXmark} />
         <h2>Menu</h2>
         <ul>
            <li>
               <a href="#couple">Cặp đôi</a>
            </li>
            <li>
               <a href="#story">Chuyện tình yêu</a>
            </li>
            <li>
               <a href="#bridesmaids">Phù Dâu &amp; Phù Rể</a>
            </li>
            <li>
               <a href="#gallery">Album Hình Cưới</a>
            </li>
            <li>
               <a href="#events">Sự kiện cưới</a>
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
