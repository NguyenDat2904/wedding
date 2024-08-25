import React from 'react';
import './Event.scss';
import Card from './Card/Card';
import { bride, groom } from '../../data';

function Event() {
   const events = [
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg',
         textType: 'TƯ GIA NHÀ NỮ',
         title: 'LỄ ĂN HỎI',
         time: '10:00 18/10/2024',
         location: bride.address,
      },
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/8f7155409bf9ebdb9dffd7a38991aaa8.jpeg',
         title: 'LỄ CƯỚI',
         textType: 'THÁNH LỄ HÔN PHỐI',
         time: '18:00 18/10/2024',
         location: bride.address,
      },
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/83d8a5c840b51447ab080ecb9a7de6df.jpeg',
         title: 'TIỆC CƯỚI NHÀ NAM',
         textType: 'TƯ GIA NHÀ NAM',
         time: '10:00 19-20/10/2024',
         location: groom.address,
      },
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/194d4b3c58f61adb4931a8a00a4fa019.jpeg',
         title: 'TIỆC CƯỚI NHÀ NỮ',
         textType: 'TƯ GIA NHÀ NỮ',
         time: '10:00 19-20/10/2024',
         location: bride.address,
      },
   ];

   return (
      <section
         id="giftregistry"
         className="parallax-background section-bg-color"
         style={{
            backgroundPosition: 'center 39px',
            backgroundImage:
               'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/f948a8ba806986c08dd4ce1d6e9f8066.jpg")',
         }}
      >
         <div className="section-divider-top-4 off-section" />
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-xl-6 events-boxs">
                  <h2 className="section-title-lg desc text-white">Sự Kiện Cưới</h2>
                  <div className="section-desc mb-5 px-5 text-center">
                     Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi
                     tệ.
                  </div>
                  <ul
                     className="wedding-gifts"
                     style={{
                        boxSizing: 'border-box',
                        listStyle: 'none',
                        padding: '0px',
                        marginBottom: '35px',
                        marginTop: '15px',
                        paddingLeft: '0px',
                     }}
                  >
                     {events.map((event, index) => (
                        <Card
                           key={index}
                           img={event.img}
                           textType={event.textType}
                           title={event.title}
                           time={event.time}
                           location={event.location}
                        />
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Event;
