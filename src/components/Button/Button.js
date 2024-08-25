import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ className, title, href, target, white, primary, width, leftIcon, rightIcon }) {
   return (
      <a
         target={target}
         href={href}
         className={`btn btn-primary reverse scrollto ${primary && 'text-primary-color'}  ${
            white && 'text-white'
         } ${className}`}
         style={{ width: width, minWidth: width }}
      >
         <span className="h-lines" />
         <span className="v-lines" />
         {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
         {title}
         {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
      </a>
   );
}

export default Button;
