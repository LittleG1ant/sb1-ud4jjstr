import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';
import FAQ from '../components/contact/FAQ';

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
      <FAQ />
    </>
  );
};

export default Contact;