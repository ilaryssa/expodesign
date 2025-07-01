import React from 'react';
import './aboutTheSite.css';
import IntroSection from './components/IntroSection';
import CreatorsSection from './components/CreatorsSection';
import ScrollToTopButton from './components/ScrollToTopButton';

const AboutTheSite = () => (
  <main className="aboutTheSiteContainer">
    <IntroSection />
    <CreatorsSection />
    <ScrollToTopButton />
  </main>
);

export default AboutTheSite;