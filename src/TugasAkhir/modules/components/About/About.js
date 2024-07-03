import React from 'react';
import './About.css';
import { Fade } from 'react-reveal';



const AboutUs = () => {
  return (
    <section className="brand-story-section">
      <div className="brand-story-background"></div>
      <div className="brand-story-content">
      <Fade>
          <h2 className="our-story-title">Our Story</h2>
        </Fade>
        <Fade delay={300}>
          <p className="our-story-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus velit id arcu pharetra, vitae
            finibus arcu bibendum. Sed at risus ut purus fringilla pharetra. Nulla facilisi. Sed eget diam in justo
            fringilla aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </Fade>
      </div>
    </section>
  );
}


export default AboutUs;
