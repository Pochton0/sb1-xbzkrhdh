import React from 'react';
import { Code, Palette, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that enhance user experience.'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting for digital transformation.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;