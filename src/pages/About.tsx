import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Coaches from '../components/about/Coaches';
import Facility from '../components/about/Facility';
import CallToAction from '../components/about/CallToAction';

const About = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Coaches />
      <Facility />
      <CallToAction />
    </>
  );
};

export default About;