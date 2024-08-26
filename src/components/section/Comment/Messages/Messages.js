import React from 'react';
import './Messages.scss';

function Messages({ name, message, time }) {
   return (
      <div className="wish-box-item ">
         <strong>CEO của Biihappy</strong>
         <p>
            "Một cuộc hôn nhân thành công đòi hỏi phải yêu nhiều lần, và luôn ở cùng một người" - Chúc cho hai bạn sẽ có
            được một cuộc hôn nhân viên mãn, trăm năm hạnh phúc!
         </p>
      </div>
   );
}

export default Messages;
