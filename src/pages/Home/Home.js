import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/section/Hero/Hero';
import AboutUs from '../../components/section/AboutUs/AboutUs';
import Story from '../../components/section/Story/Story';

function Home() {
   return (
      <div>
         <Header />
         <Hero />
         <AboutUs />
         <Story />
      </div>
   );
}

export default Home;
