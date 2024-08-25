import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/section/Hero/Hero';
import AboutUs from '../../components/section/AboutUs/AboutUs';
import Story from '../../components/section/Story/Story';
import TimeLine from '../../components/section/TimeLine/TimeLine';
import Wedding from '../../components/section/Wedding/Wedding';
import Footer from '../../components/Footer/Footer';
import Galleries from '../../components/section/Galleries/Galleries';
import Invitation from '../../components/section/Invitation/Invitation';
import Event from '../../components/section/Event/Event';
import Testimonial from '../../components/section/Testimonial/Testimonial';

function Home() {
   return (
      <div>
         <Header />
         <Hero />
         <AboutUs />
         <Story />
         <TimeLine />
         <Wedding />
         <Galleries />
         <Invitation />
         <Event />
         <Testimonial />
         <Footer />
      </div>
   );
}

export default Home;
