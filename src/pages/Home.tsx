import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import PricingSection from '../components/home/PricingSection';
import Forms from '../components/home/Forms';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <PricingSection />
      <Forms />
      <Testimonials />
    </>
  );
}

export default Home;