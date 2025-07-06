import React from 'react';
import './AboutTheSite.css';
import IntroSection from '../../components/AboutTheSite/IntroSection';
import CreatorsSection from '../../components/AboutTheSite/CreatorsSection';
import ScrollToTopButton from '../../components/AboutTheSite/ScrollToTopButton';

const AboutTheSite = () => (
  <main className="about-the-site-container">
    <IntroSection />
    <CreatorsSection />
    <ScrollToTopButton />
  </main>
);

export default AboutTheSite;