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
   const [imageSizes, setImageSizes] = useState([]);
   const [rowHeight, setRowHeight] = useState(610);

   const images = [
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/small.jpg',
         left: '0%',
         top: 0,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a5f7c65c763d2ef0e2/small.jpg',
         left: '33.2571%',
         top: 0,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a0d5c0e352ac024b43/small.jpg',
         left: '66.5904%',
         top: 0,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/small.jpg',
         left: '33.2571%',
         top: 647,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199029c1ca1d308fe5da284/small.jpg',
         left: '66.5904%',
         top: 647,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990291c41d7b37de534632/small.jpg',
         left: '0%',
         top: 648,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028d8d8a4918ca205514/small.jpg',
         left: '66.5904%',
         top: 953,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028adb8f76231c132062/small.jpg',
         left: '66.5904%',
         top: 1271,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990285d5c0e352ac024b42/small.jpg',
         left: '33.2571%',
         top: 1312,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/619902821ca1d308fe5da283/small.jpg',
         left: '0%',
         top: 1313,
      },
      {
         src: 'https://cdn.biihappy.com/ziiweb/default/website/galleries/6199027ed7e97a1853119578/small.jpg',
         left: '0%',
         top: 1609,
      },
   ];
   const imagesPerRow = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;

   useEffect(() => {
      const updateImageSizes = () => {
         const imgElements = images.map((_, index) => document.querySelector(`.gallery-item-${index + 1} img`));
         const totalHeight = imgElements.reduce((sum, img) => sum + (img ? img.clientHeight : 0), 0);
         const newRowHeight = imgElements.length > 0 ? totalHeight / (imgElements.length - 1) : 610; // Default value if no images
         setRowHeight(newRowHeight);

         const sizes = images.map((_, index) => {
            const imgElement = imgElements[index];
            return imgElement
               ? { width: imgElement.clientWidth, height: imgElement.clientHeight }
               : { width: 0, height: 0 };
         });
         setImageSizes(sizes);
      };

      updateImageSizes(); // Initial update

      const handleResize = () => {
         updateImageSizes(); // Update on resize
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => window.removeEventListener('resize', handleResize);
   }, [images.length]);
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
                  <div style={{ height: `${Math.ceil(images.length / imagesPerRow) * rowHeight}px` }}>
                     <LightGallery plugins={[lgThumbnail, lgAutoplay, lgVideo, lgZoom]} elementClassNames="grid-images">
                        {images.map((item, index) => (
                           <a
                              href={item.src}
                              key={index}
                              className={`gallery-item gallery-item-${index + 1} ${item.class}`}
                              style={{
                                 top: item.top,
                                 left: item.left,
                              }}
                           >
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
