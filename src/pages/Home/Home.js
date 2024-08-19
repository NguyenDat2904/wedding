import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/section/Hero/Hero';
import AboutUs from '../../components/section/AboutUs/AboutUs';
import Story from '../../components/section/Story/Story';
import TimeLine from '../../components/section/TimeLine/TimeLine';
import Wedding from '../../components/section/Wedding/Wedding';

function Home() {
   return (
      <div>
         <Header />
         <Hero />
         <AboutUs />
         <Story />
         <TimeLine />
         <Wedding />
      </div>
   );
}

export default Home;
