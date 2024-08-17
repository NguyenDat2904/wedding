import React from 'react';
import './Title.scss';
function Title({ value, light = false, primary = false }) {
   return <h1 className={`section-title ${light && 'light'} ${primary && 'primary'}`}>{value}</h1>;
}

export default Title;
