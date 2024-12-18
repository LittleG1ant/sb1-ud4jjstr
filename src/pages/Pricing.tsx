import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingTable from '../components/pricing/PricingTable';
import TrainingFeatures from '../components/pricing/TrainingFeatures';
import PricingCTA from '../components/pricing/PricingCTA';

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <TrainingFeatures />
      <PricingCTA />
    </>
  );
};

export default Pricing;