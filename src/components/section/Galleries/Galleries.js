import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import LightGallery from 'lightgallery/react';
import './Galleries.scss';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-autoplay.scss';
import 'lightgallery/scss/lg-video.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';

function Galleries() {
   const images = [
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/small.jpg',
         class: 'big',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a5f7c65c763d2ef0e2/small.jpg',
         class: 'tall',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a0d5c0e352ac024b43/small.jpg',
         class: 'tall',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/small.jpg',
         class: 'big',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199029c1ca1d308fe5da284/small.jpg',
         class: 'tall',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990291c41d7b37de534632/small.jpg',
         class: 'wide',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028d8d8a4918ca205514/small.jpg',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028adb8f76231c132062/small.jpg',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990285d5c0e352ac024b42/small.jpg',
         class: 'big',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902821ca1d308fe5da283/small.jpg',
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199027ed7e97a1853119578/small.jpg',
         class: 'big',
      },
   ];
   return (
      <section id="gallery">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <Title value="Album Hình Cưới" primary />
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col col-xs-12">
                  <div>
                     <LightGallery plugins={[lgThumbnail, lgAutoplay, lgVideo, lgZoom]} elementClassNames="grid-images">
                        {images.map((item, index) => (
                           <a href={item.src} key={index} className={`gallery-item ${item.class}`}>
                              <img src={item.src} alt={`Gallery image ${index + 1}`} className="img img-responsive" />
                           </a>
                        ))}
                     </LightGallery>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Galleries;
