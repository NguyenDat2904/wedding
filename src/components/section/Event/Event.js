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
         googleMap:
            'https://www.google.com/maps/place/93+B%C3%A3i+S%E1%BA%ADy,+P.+Hi%E1%BB%81n+Nam,+H%C6%B0ng+Y%C3%AAn,+Vietnam/@20.6518235,106.0493129,17z/data=!3m1!4b1!4m5!3m4!1s0x3135c6c552207baf:0xd2359011d7d72aea!8m2!3d20.6518185!4d106.0518878?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D',
      },
      {
         img: 'https://top9.com.vn/wp-content/uploads/2020/10/Nh%C3%A0-th%E1%BB%9D-Gi%C3%A1o-X%E1%BB%A9-H%C6%B0ng-Y%C3%AAn.jpg',
         title: 'LỄ CƯỚI',
         textType: 'THÁNH LỄ HÔN PHỐI',
         time: '18:00 18/10/2024',
         location: '67C, Bãi Sậy, Minh Khai, Tp. Hưng Yên, Hưng Yên',
         googleMap:
            'https://www.google.com/maps/place/H%C6%B0ng+Y%C3%AAn+Church/@20.642908,106.0524576,15.61z/data=!4m6!3m5!1s0x3135c6cf699e9d4b:0x8a0c529d14bcc249!8m2!3d20.6480534!4d106.0531342!16s%2Fg%2F12vrc96jm?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D',
      },
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/83d8a5c840b51447ab080ecb9a7de6df.jpeg',
         title: 'TIỆC CƯỚI NHÀ NAM',
         textType: 'TƯ GIA NHÀ NAM',
         time: '10:00 19-20/10/2024',
         location: groom.address,
         googleMap:
            'https://www.google.com/maps/@20.0958958,106.2760663,67m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3Dhttps://maps.app.goo.gl/aoShw2E52uK4QcJNAhttps://maps.app.goo.gl/FxE2WHRGDu4jKzhd9',
      },
      {
         img: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/194d4b3c58f61adb4931a8a00a4fa019.jpeg',
         title: 'TIỆC CƯỚI NHÀ NỮ',
         textType: 'TƯ GIA NHÀ NỮ',
         time: '10:00 19-20/10/2024',
         location: bride.address,
         googleMap:
            'https://www.google.com/maps/place/93+B%C3%A3i+S%E1%BA%ADy,+P.+Hi%E1%BB%81n+Nam,+H%C6%B0ng+Y%C3%AAn,+Vietnam/@20.6518235,106.0493129,17z/data=!3m1!4b1!4m5!3m4!1s0x3135c6c552207baf:0xd2359011d7d72aea!8m2!3d20.6518185!4d106.0518878?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D',
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
                           googleMap={event.googleMap}
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
