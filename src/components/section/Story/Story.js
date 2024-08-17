import React from 'react';
import './Story.scss';
import Title from '../../Title/Title';

function Story() {
   return (
      <section
         id="our-story-title"
         className="parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
         style={{
            overflow: 'hidden',
            backgroundImage:
               'url("https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/d22ce318c91e96e35328d63da2364702.jpg")',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundAttachment: 'scroll',
         }}
      >
         <div className="section-divider-top-1 off-section" />
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <Title value="Chuyện tình yêu" light />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Story;
