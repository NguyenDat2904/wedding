import React, { useRef, useState } from 'react';
import './FormSubmit.scss';
import Picker from 'emoji-picker-react';
import Button from '../../../Button/Button';
import { Icon } from '../../../data';

function FormSubmit() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      content: '',
   });
   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
   const contentRef = useRef(null);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const onEmojiClick = (event, emojiObject) => {
      const newText = formData.content + event.emoji;
      setFormData((prevState) => ({
         ...prevState,
         content: newText,
      }));
   };

   const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker);
      if (contentRef.current) contentRef.current.blur();
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <form
         id="wish-form"
         className="form validate-rsvp-form row contact-validation-active"
         method="post"
         onSubmit={handleSubmit}
      >
         <div>
            <input
               type="text"
               name="name"
               placeholder="Tên của bạn*"
               className="form-control error"
               value={formData.name}
               onChange={handleChange}
            />
            <label id="name-error" className="error" htmlFor="name">
               Vui lòng nhập tên của bạn.
            </label>
         </div>
         <div>
            <input
               type="email"
               name="email"
               placeholder="E-mail"
               className="form-control valid"
               value={formData.email}
               onChange={handleChange}
            />
         </div>
         <div>
            <div className="textarea-emoji-picker">
               <div className="vitualTextarea">
                  <textarea
                     id="content"
                     rows={3}
                     className="form-control error"
                     name="content"
                     placeholder="Nhập lời chúc của bạn*"
                     value={formData.content}
                     onChange={handleChange}
                     ref={contentRef}
                  />
                  <div className="textAreaIcons">
                     <span className="show-autocomplete tooltip-custom" title>
                        <Icon.idea />
                     </span>
                     <span className="hide-autocomplete tooltip-custom" style={{ display: 'none' }}>
                        <Icon.ideaOff />
                     </span>
                     <span
                        className="emoji-picker-button tooltip-custom"
                        title
                        onClick={toggleEmojiPicker}
                        style={{
                           marginLeft: '10px',
                        }}
                     >
                        <Icon.emoji />
                     </span>
                     <div className="wishes-autocomplete-content" style={{ display: 'none' }}>
                        <input type="text" id="searchWishSuggestions" placeholder="Tìm kiếm..." />
                        <ul id="wishSuggestions">
                           <li>
                              <a className="showContent" href="#">
                                 Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh phúc!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc mừng ngày trọng đại tới hai bạn. Hạnh phúc bền lâu và trọn vẹn nhé!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc mừng hạnh phúc hai bạn. Chúc hai bạn bên nhau đầu bạc răng long, sớm có thiên thần
                                 nhỏ nhé!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc hai bạn ngày vui hạnh phúc. Hãy yêu thương nhau thật nhiều và sống thật hạnh phúc
                                 nha!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc hai bạn sớm có con đàn cháu đống, cửa nhà lúc nào cũng đầm ấm, yên vui nhé!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Thật vui vì cuối cùng ngày này cũng tới với bạn. Tôi thành tâm chúc hai bạn thật nhiều
                                 hạnh phúc và sống đời vui vẻ cùng nhau mãi mãi!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Một chương mới đã mở ra với hai bạn rồi. Tôi mong cuộc sống mới của cả hai sẽ tràn ngập
                                 hy vọng, hạnh phúc và niềm vui!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc đôi trai tài gái sắc hạnh phúc trọn vẹn, luôn yêu thương nhau thật nhiều!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chia vui cùng bạn trong ngày trọng đại này. Cầu mong cuộc sống sau này của 2 vợ chồng
                                 thật thuận hòa, may mắn, làm ăn phát tài nha.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Tôi mong tình yêu của hai bạn thật bền chặt, gắn bó để xây dựng tổ ấm yên bình, hạnh
                                 phúc!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hai bạn của tôi chắc chắn sẽ có được nhiều hạnh phúc. Mong hai bạn có sức khỏe dồi dào,
                                 làm ăn phát đạt và sớm có cháu cho ông bà bồng bế nhé!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc hai bạn một cuộc sống thật
                                 tuyệt vời, hòa thuận, gắn bó son sắt, thủy chung, hạnh phúc lâu dài.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Nơi nào có yêu thương nơi đó chắc chắn hạnh phúc. Hai bạn đã tìm được nơi đủ đầy yêu
                                 thương rồi, hãy cùng nắm tay nhau đi hết cuộc đời nhé!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Khởi đầu một cuộc sống mới, nguyện ước cho bạn của tôi những ngày tháng hạnh phúc phía
                                 trước để cùng xây dựng tổ ấm với người bạn đời. Happy ending!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Mình tin rằng đây sẽ là khởi đầu cho những điều tốt đẹp sắp tới trong cuộc sống của hai
                                 bạn. Hãy yêu thương và cùng nhau vượt qua mọi khó khăn trong cuộc sống nhé.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hôn nhân đánh dấu sự kết thúc một câu chuyện tình yêu và bắt đầu một trận đấu vật. Chúc
                                 bạn những điều tốt đẹp nhất.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Tôi sẽ nói cho bạn bí mật của một cuộc hôn nhân hạnh phúc. Đó vẫn là … một bí mật cho
                                 tất cả! Chúc bạn tất cả những điều tốt đẹp nhất của thời gian phía trước.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hôn nhân thật đẹp. Cuối cùng bạn đã tìm thấy một người mà bạn bị làm phiền suốt cuộc
                                 đời.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hai trở thành một: Một giường, một điều khiển từ xa, một phòng tắm! Xin chúc mừng đám
                                 cưới hai bạn.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc đôi trai tài gái sắc nhà mình hạnh phúc vẹn tròn, cung hỷ cung hỷ!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc mừng anh trai của em đã có người rước nhé. Em mong anh chị có cuộc sống vui vẻ,
                                 hạnh phúc phía trước, làm ăn phát tài phát lộc.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Anh chị là một cặp trời sinh, chắc chắn sau này sẽ rất hạnh phúc. Em chúc anh chị sức
                                 khỏe dồi dào, làm ăn phát đạt và sớm có thiên thần nhỏ cho vui cửa vui nhà.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hôm nay là ngày vui của anh chị và cũng là ngày em rất hạnh phúc. Chúc anh chị mãi yêu
                                 thương nhau như bây giờ và đạt được mọi ước nguyện trong cuộc sống.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc anh/chị/em trăm năm hạnh phúc, thuận vợ thuận chồng.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Hôm nay chú rể đẹp trai, cô dâu xinh gái. Chúc mừng ngày thành hôn hai bạn tôi!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Chúc mừng đôi bạn trẻ nhé! Mãi yêu thương nhau đến đầu bạc răng long bạn nha!
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Thay mặt team (tên nhóm) chúc hai bạn ngày ngày ân ái, bên nhau trọn đời.
                              </a>
                           </li>
                           <li>
                              <a className="showContent" href="#">
                                 Happy wedding! Chúc hai bạn có cuộc sống mới ngập tràn tiếng cười và niềm vui, sớm có
                                 thiên thần nhỏ bồng bé!
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <label id="content-error" className="error" htmlFor="content">
                  Vui lòng nhập lời chúc.
               </label>
               <div className="emoji-picker" style={{ display: showEmojiPicker ? 'block' : 'none' }}>
                  <Picker width={295} height={400} onEmojiClick={onEmojiClick} skinTonesDisabled />
               </div>
            </div>
         </div>
         <div className="center">
            <Button title="Gửi lời chúc" width="215px" primary type="submit" />
         </div>
      </form>
   );
}

export default FormSubmit;
