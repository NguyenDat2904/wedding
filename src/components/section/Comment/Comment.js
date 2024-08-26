import React from 'react';
import './Comment.scss';
import FormSubmit from './Form/FormSubmit';
import Messages from './Messages/Messages';
import Title from '../../Title/Title';

function Comment() {
   return (
      <section id="rsvp" className="section-bg-color extra-padding-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2  col-xxl-6 offset-xxl-3">
                  <div className="form-wrapper flowers neela-style">
                     <span className="h-lines" />
                     <span className="v-lines" />
                     <Title value="Sổ Lưu Bút" primary />
                     <FormSubmit />
                     <div className="wish-box ">
                        <Messages />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Comment;
