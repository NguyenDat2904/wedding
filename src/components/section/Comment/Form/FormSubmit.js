import React, { useRef, useState } from 'react';
import './FormSubmit.scss';
import Picker from 'emoji-picker-react';
import Button from '../../../Button/Button';
import { Icon } from '../../../data';

const wishes = [
   'Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh phúc! 💕',
   'Chúc mừng ngày trọng đại tới hai bạn. Hạnh phúc bền lâu và trọn vẹn nhé! 🎉',
   'Chúc mừng hạnh phúc hai bạn. Chúc hai bạn bên nhau đầu bạc răng long, sớm có thiên thần nhỏ nhé! 👶',
   'Chúc hai bạn ngày vui hạnh phúc. Hãy yêu thương nhau thật nhiều và sống thật hạnh phúc nha! 💖',
   'Chúc hai bạn sớm có con đàn cháu đống, cửa nhà lúc nào cũng đầm ấm, yên vui nhé! 🏡',
   'Thật vui vì cuối cùng ngày này cũng tới với bạn. Tôi thành tâm chúc hai bạn thật nhiều hạnh phúc và sống đời vui vẻ cùng nhau mãi mãi! 🥂',
   'Một chương mới đã mở ra với hai bạn rồi. Tôi mong cuộc sống mới của cả hai sẽ tràn ngập hy vọng, hạnh phúc và niềm vui! 🌈',
   'Chúc đôi trai tài gái sắc hạnh phúc trọn vẹn, luôn yêu thương nhau thật nhiều! 🌹',
   'Chia vui cùng bạn trong ngày trọng đại này. Cầu mong cuộc sống sau này của 2 vợ chồng thật thuận hòa, may mắn, làm ăn phát tài nha. 💸',
   'Tôi mong tình yêu của hai bạn thật bền chặt, gắn bó để xây dựng tổ ấm yên bình, hạnh phúc! 💑',
   'Hai bạn của tôi chắc chắn sẽ có được nhiều hạnh phúc. Mong hai bạn có sức khỏe dồi dào, làm ăn phát đạt và sớm có cháu cho ông bà bồng bế nhé! 👶👴👵',
   'Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc hai bạn một cuộc sống thật tuyệt vời, hòa thuận, gắn bó son sắt, thủy chung, hạnh phúc lâu dài. 🌟',
   'Nơi nào có yêu thương nơi đó chắc chắn hạnh phúc. Hai bạn đã tìm được nơi đủ đầy yêu thương rồi, hãy cùng nắm tay nhau đi hết cuộc đời nhé! 🤝',
   'Khởi đầu một cuộc sống mới, nguyện ước cho bạn của tôi những ngày tháng hạnh phúc phía trước để cùng xây dựng tổ ấm với người bạn đời. Happy ending! 🎊',
   'Mình tin rằng đây sẽ là khởi đầu cho những điều tốt đẹp sắp tới trong cuộc sống của hai bạn. Hãy yêu thương và cùng nhau vượt qua mọi khó khăn trong cuộc sống nhé. 💪',
   'Hôn nhân đánh dấu sự kết thúc một câu chuyện tình yêu và bắt đầu một trận đấu vật. Chúc bạn những điều tốt đẹp nhất. 🥳',
   'Tôi sẽ nói cho bạn bí mật của một cuộc hôn nhân hạnh phúc. Đó vẫn là … một bí mật cho tất cả! Chúc bạn tất cả những điều tốt đẹp nhất của thời gian phía trước. 🎁',
   'Hôn nhân thật đẹp. Cuối cùng bạn đã tìm thấy một người mà bạn bị làm phiền suốt cuộc đời. 😂',
   'Hai trở thành một: Một giường, một điều khiển từ xa, một phòng tắm! Xin chúc mừng đám cưới hai bạn. 🛌🎮🚿',
   'Chúc đôi trai tài gái sắc nhà mình hạnh phúc vẹn tròn, cung hỷ cung hỷ! 🍀',
   'Chúc mừng anh trai của em đã có người rước nhé. Em mong anh chị có cuộc sống vui vẻ, hạnh phúc phía trước, làm ăn phát tài phát lộc. 💰',
   'Anh chị là một cặp trời sinh, chắc chắn sau này sẽ rất hạnh phúc. Em chúc anh chị sức khỏe dồi dào, làm ăn phát đạt và sớm có thiên thần nhỏ cho vui cửa vui nhà. 👼',
   'Hôm nay là ngày vui của anh chị và cũng là ngày em rất hạnh phúc. Chúc anh chị mãi yêu thương nhau như bây giờ và đạt được mọi ước nguyện trong cuộc sống. 🎉',
   'Chúc anh/chị/em trăm năm hạnh phúc, thuận vợ thuận chồng. 👰🤵',
   'Hôm nay chú rể đẹp trai, cô dâu xinh gái. Chúc mừng ngày thành hôn hai bạn tôi! 💍',
   'Chúc mừng đôi bạn trẻ nhé! Mãi yêu thương nhau đến đầu bạc răng long bạn nha! 💕',
   'Thay mặt team (tên nhóm) chúc hai bạn ngày ngày ân ái, bên nhau trọn đời. 💏',
   'Happy wedding! Chúc hai bạn có cuộc sống mới ngập tràn tiếng cười và niềm vui, sớm có thiên thần nhỏ bồng bé! 👶',
];

function FormSubmit() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      content: '',
   });
   const [filteredWishes, setFilteredWishes] = useState(wishes);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
   const contentRef = useRef(null);
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
      if (errors[name]) {
         setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: null,
         }));
      }
   };
   const onEmojiClick = (event, emojiObject) => {
      const newText = formData.content + event.emoji;
      console.log('content', formData.content);
      setFormData((prevState) => ({
         ...prevState,
         content: newText,
      }));
   };

   const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker);
      if (contentRef.current) contentRef.current.blur();
   };

   const handleInputChange = (e) => {
      const query = e.target.value.toLowerCase();
      setFilteredWishes(wishes.filter((wish) => wish.toLowerCase().includes(query)));
   };

   const handleWishClick = (wish) => {
      setFormData({ ...formData, content: wish });
      setShowSuggestions(false); // Ẩn danh sách sau khi chọn gợi ý
   };
   const toggleSuggestions = () => {
      setShowSuggestions(!showSuggestions);
   };

   const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập tên của bạn.';
      if (!formData.content.trim()) newErrors.content = 'Vui lòng nhập tin nhắn của bạn.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm()) return;
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
               className={`form-control ${errors.name ? 'error' : ''}`}
               value={formData.name}
               onChange={handleChange}
            />
            {errors.name && (
               <label className="error" htmlFor="name">
                  {errors.name}
               </label>
            )}
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
                     className={`form-control ${errors.content ? 'error' : ''}`}
                     name="content"
                     placeholder="Nhập lời chúc của bạn*"
                     value={formData.content}
                     onChange={handleChange}
                     ref={contentRef}
                  />
                  <div className="textAreaIcons">
                     <span
                        className="show-autocomplete tooltip-custom"
                        title
                        onClick={toggleSuggestions}
                        style={{ display: showSuggestions ? 'none' : 'inline-block' }}
                     >
                        <Icon.idea />
                     </span>
                     <span
                        className="hide-autocomplete tooltip-custom"
                        onClick={toggleSuggestions}
                        style={{ display: showSuggestions ? 'inline-block' : 'none' }}
                     >
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
                     {showSuggestions && (
                        <div className="wishes-autocomplete-content">
                           <input
                              type="text"
                              id="searchWishSuggestions"
                              placeholder="Tìm kiếm..."
                              onChange={handleInputChange}
                           />
                           <ul id="wishSuggestions">
                              {filteredWishes.map((wish, index) => (
                                 <li key={index} onClick={() => handleWishClick(wish)}>
                                    <span className="showContent">{wish}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               </div>
               {errors.content && (
                  <label className="error" htmlFor="content">
                     {errors.content}
                  </label>
               )}
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
