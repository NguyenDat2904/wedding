import React, { useEffect, useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './MenuAccess.scss';

function MenuAccess() {
   const [isActive, setIsActive] = useState(true);

   const TooltipItem = ({ id, title, show, htmlContent, handleMouseEnter, handleMouseLeave }) => {
      return (
         <OverlayTrigger show={show} placement="left" overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <li className={`text-center ${show ? 'shake' : ''}`}>
               <a
                  href="#"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
               ></a>
            </li>
         </OverlayTrigger>
      );
   };

   const TooltipCycler = ({ isActive }) => {
      const [currentTooltip, setCurrentTooltip] = useState(0);

      useEffect(() => {
         const tooltips = [
            { id: 'tooltip1', title: 'Tooltip 1' },
            { id: 'tooltip2', title: 'Tooltip 2' },
            { id: 'tooltip3', title: 'Tooltip 3' },
         ];

         const showDuration = 5000;
         const hideDuration = 1000;
         const cycleTooltips = () => {
            tooltips.forEach((tooltip, index) => {
               setTimeout(() => {
                  setCurrentTooltip(index);
                  setTimeout(() => setCurrentTooltip(-1), showDuration); // Ẩn sau 3 giây
               }, index * (showDuration + hideDuration)); // Thay đổi thời gian delay giữa các tooltip
            });

            setTimeout(cycleTooltips, tooltips.length * (showDuration + hideDuration)); // Lặp lại
         };

         cycleTooltips();
      }, []);

      const tooltips = [
         {
            id: 'tooltip1',
            title: '',
            htmlContent:
               '<span className="content-button tooltipBtn" style="position: relative; top: 3px"><img className="access-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/wishes.png" style="height:25px; width:auto; margin-top:4px" /></span>',
         },
         {
            id: 'tooltip2',
            title: '',
            htmlContent:
               '<span className="content-button tooltipBtn" style="position: relative; top: 3px"><img className="access-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/rsvp4.png" style="height:25px; width:auto; margin-top:4px"/></span>',
         },
         {
            id: 'tooltip3',
            title: '',
            htmlContent:
               '<span className="content-button tooltipBtn" style="position: relative; top: 3px"><img className="access-icon" src="https://cdn.biihappy.com/ziiweb/images/static/common/money_bag.png" style="height:25px; width:auto; margin-top:4px"/></span>',
         },
      ];

      return (
         <ul className={`p-0 m-0  list-menu-icon ${!isActive && 'hide'}`}>
            {tooltips.map((tooltip, index) => (
               <TooltipItem
                  key={tooltip.id}
                  id={tooltip.id}
                  show={currentTooltip === index}
                  htmlContent={tooltip.htmlContent}
               />
            ))}
         </ul>
      );
   };

   return (
      <div id="menu-access" className>
         <div onClick={() => setIsActive(true)} className={`btn-menu-open ${!isActive ? 'active' : ''}`}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width={16}
               height={16}
               fill="currentColor"
               className="bi bi-list"
               viewBox="0 0 16 16"
            >
               <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
               />
            </svg>
         </div>
         <div onClick={() => setIsActive(false)} className={`btn-menu-close ${isActive ? 'active' : ''}`}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width={16}
               height={16}
               fill="currentColor"
               className="bi bi-x-lg"
               viewBox="0 0 16 16"
            >
               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
         </div>
         <TooltipCycler isActive={isActive} />
      </div>
   );
}

export default MenuAccess;
