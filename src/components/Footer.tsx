import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', 'hero'],
                ['About', 'services'],
                ['Pricing', 'pricing'],
                ['Contact', 'forms'],
              ].map(([label, id]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-gray-400 transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@tumblingofwny.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 Tumbling of WNY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;