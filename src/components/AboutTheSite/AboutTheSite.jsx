import React from 'react';
import './AboutTheSite.css';
import IntroSection from './IntroSection';
import CreatorsSection from './CreatorsSection';
import ScrollToTopButton from './ScrollToTopButton';

const AboutTheSite = () => (
  <main className="about-the-site-container">
    <IntroSection />
    <CreatorsSection />
    <ScrollToTopButton />
  </main>
);

export default AboutTheSite;