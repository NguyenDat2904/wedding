import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ className, title, href, target, white, primary, width, leftIcon, rightIcon, type = 'submit' }) {
   const Tag = href ? 'a' : 'button';
   const buttonClass = `btn btn-primary reverse scrollto ${primary && 'text-primary-color'} ${
      white && 'text-white'
   } ${className}`;

   const commonProps = {
      className: buttonClass,
      style: { width: width, minWidth: width },
   };

   const linkProps = href ? { href, target } : { type };

   return (
      <Tag {...commonProps} {...linkProps}>
         <span className="h-lines" />
         <span className="v-lines" />
         {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
         {title}
         {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
      </Tag>
   );
}

export default Button;
