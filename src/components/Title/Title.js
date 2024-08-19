import React from 'react';
import './Title.scss';
function Title({ value, light = false, primary = false, style }) {
   return <h1 className={`section-title ${light && 'light'} ${primary && 'primary'} ${style} `}>{value}</h1>;
}

export default Title;
