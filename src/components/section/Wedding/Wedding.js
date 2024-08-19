import React from 'react';
import './Wedding.scss';
import { bride, groom } from '../../data';
function Wedding() {
   return (
      <section
         id="invitation"
         className="parallax-background bg-color-overlay padding-divider-top section-divider-bottom-1"
         style={{
            backgroundImage:
               'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/10896c191ff2008ed9d07a3ed53616e4.jpg")',
            backgroundPosition: 'center 128px',
         }}
      >
         <div className="section-divider-top-1 off-section" />
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="section-title light">The Big Day!</h1>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 center">
                  <div
                     className="invite neela-style animate-from-left animation-from-left"
                     data-animation-direction="from-left"
                     data-animation-delay={100}
                  >
                     <span className="h-lines" />
                     <span className="v-lines" />
                     <div className="invite_title">
                        <div className="text">
                           Save<small>the</small>Date
                        </div>
                     </div>
                     <div className="invite_info px-2 px-lg-4">
                        <h2 className="fs-1">
                           {groom.name} <small>&amp;</small> {bride.name}
                        </h2>
                        <div>
                           Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!
                        </div>
                        <div className="center m-0 mt-2">
                           <a
                              href="#rsvp"
                              className="btn btn-primary reverse scrollto text-white px-2"
                              style={{ minWidth: 240, maxWidth: 240, width: 255 }}
                           >
                              <span className="h-lines" />
                              <span className="v-lines" />
                              Gửi lời chúc
                           </a>
                        </div>
                        <div className="center m-0">
                           <a
                              href="https://preview.iwedding.info/rsvp"
                              target="_blank"
                              className="btn btn-primary reverse text-white px-2 mt-2"
                              style={{ minWidth: 240, maxWidth: 240, width: 255 }}
                           >
                              <span className="h-lines" />
                              <span className="v-lines" />
                              Xác nhận tham dự
                           </a>
                        </div>
                        <div className="date">20 Tháng 10 2024</div>
                        <div className="count-down-clock">
                           <div
                              id="clock"
                              data-date="2024-04-04"
                              data-text-day="Ngày"
                              data-text-hour="Giờ"
                              data-text-minute="Phút"
                              data-text-second="Giây"
                           >
                              <div className="box">
                                 <div>137</div> <span>Ngày</span>
                              </div>
                              <div className="box">
                                 <div>21</div> <span>Giờ</span>{' '}
                              </div>
                              <div className="box">
                                 <div>53</div> <span>Phút</span>{' '}
                              </div>
                              <div className="box">
                                 <div>37</div> <span>Giây</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Wedding;
