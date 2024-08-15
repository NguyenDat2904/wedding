import React from 'react';
import classNames from 'classnames/bind';
import style from './AboutUs.module.scss';
const cx = classNames.bind(style);

function AboutUs() {
   return (
      <section className={cx('couple')}>
         <div className="container">
            <div className={cx('row', 'about-elems-wrapper')}>
               <div
                  className={cx('element', 'col-md-6 col-xl-4 offset-xl-2 visible')}
                  data-animation-direction="from-left"
                  data-animation-delay={300}
               >
                  <div className={cx('image')}>
                     <img
                        src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
                        alt
                        width={600}
                        height={714}
                     />
                     <div className={cx('hover-info', 'neela-style')}>
                        <span className={cx('h-lines')} />
                        <span className={cx('v-lines')} />
                        <div className={cx('content')}>
                           <h3>
                              Hoàng Kiến Văn
                              <small>The Groom</small>
                           </h3>
                           <p>
                              Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ
                              Chí Minh. Là...
                              <a
                                 className="button-see"
                                 data-src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
                                 data-content="Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.”"
                                 data-instagram="https://instagram.com"
                                 data-twitter="https://twitter.com"
                                 data-facebook="https://facebook.com"
                                 data-name="Hoàng Kiến Văn"
                                 style={{ fontSize: 14, cursor: 'pointer' }}
                              >
                                 Xem thêm
                                 <i className="bi bi-arrow-down-short" />
                              </a>
                           </p>
                           <ul className="sn-icons">
                              <li>
                                 <a href="https://instagram.com">
                                    <i className="fab fa-instagram-square" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://twitter.com">
                                    <i className="fab fa-twitter-square" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://facebook.com">
                                    <i className="fab fa-facebook-square" />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div
                  className="divider-about-us visible flip"
                  data-animation-direction="fade"
                  data-animation-delay={500}
               >
                  <i className="icon-two-hearts" />
               </div>
               <div
                  className="element col-md-6 col-xl-4 visible"
                  data-animation-direction="from-right"
                  data-animation-delay={400}
               >
                  <div className="image flip">
                     <img
                        src="https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg"
                        alt
                        width={600}
                        height={714}
                     />
                     <div className="hover-info neela-style">
                        <span className="h-lines" />
                        <span className="v-lines" />
                        <div className="content">
                           <h3>
                              Ngô Việt Hoài<small>The Bride</small>
                           </h3>
                           <p>
                              Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt
                              nghiệp Học vi...
                              <a
                                 className="button-see"
                                 data-src="https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg"
                                 data-content="Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc."
                                 data-instagram="https://instagram.com"
                                 data-twitter="https://twitter.com"
                                 data-facebook="https://facebook.com"
                                 data-name="Ngô Việt Hoài"
                                 style={{ fontSize: 14, cursor: 'pointer' }}
                              >
                                 Xem thêm
                                 <i className="bi bi-arrow-down-short" />
                              </a>
                           </p>
                           <ul className="sn-icons">
                              <li>
                                 <a href="https://instagram.com">
                                    <i className="fab fa-instagram-square" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://twitter.com">
                                    <i className="fab fa-twitter-square" />
                                 </a>
                              </li>
                              <li>
                                 <a href="https://facebook.com">
                                    <i className="fab fa-facebook-square" />
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
                  className="about-us-desc col-lg-8 offset-lg-2 visible"
                  data-animation-direction="from-bottom"
                  data-animation-delay={300}
               >
                  <h3>We are Getting Married</h3>
                  <p>
                     Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng
                     tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy
                     bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho
                     chúng tôi!
                  </p>
                  <p className="groom-bride-signature">
                     <span>Kiến Văn</span> &amp; <span>Việt Hoài</span>
                  </p>
                  {/*<img src="https://preview.iwedding.info/templates/template19/images/signature-2.png" alt="Andrew and Isabella"> */}
                  <div className="parent-info-group">
                     <div className="parent-infos">
                        <div className="parent-info">
                           <span className="parent-title">Con ông:</span>{' '}
                           <span className="parent-name">Hoàng Anh Kiệt</span>
                        </div>
                        <div className="parent-info">
                           <span className="parent-title">Con bà:</span>{' '}
                           <span className="parent-name">Nguyễn Thị Hoài</span>
                        </div>
                     </div>
                     <div className="parent-infos">
                        <div className="parent-info">
                           <span className="parent-title">Con ông:</span>{' '}
                           <span className="parent-name">Ngô Xuân Nghĩa</span>
                        </div>
                        <div className="parent-info">
                           <span className="parent-title">Con bà:</span>{' '}
                           <span className="parent-name">Trần Hồng Thắm</span>
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
