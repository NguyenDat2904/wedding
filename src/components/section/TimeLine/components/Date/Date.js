import React from 'react';
import './Date.scss';
function Date({ date }) {
   return (
      <div
         className="year animate-from-top animation-from-top"
         data-animation-direction="from-top"
         data-animation-delay="{250}"
      >
         <span className="neela-style">
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            {date}
         </span>
      </div>
   );
}

export default Date;
