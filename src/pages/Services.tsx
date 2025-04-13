import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Building2, Cloud, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-indigo-400" />,
      title: 'Custom Software Development',
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-400" />,
      title: 'Web Application Development',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-400" />,
      title: 'Mobile App Development',
    },
    {
      icon: <Building2 className="h-8 w-8 text-indigo-400" />,
      title: 'Enterprise Software Solutions',
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-400" />,
      title: 'SaaS Product Development',
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-400" />,
      title: 'API & Backend Development',
    },
  ];

  return (
    <div className="min-h-screen section-bg text-white">
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 overlay-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0F2744] p-8 rounded-lg shadow-xl h-[200px] flex flex-col items-center justify-center text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Expertise</h2>
            <p className="text-gray-300 mb-6">
              At SoftSolve, we specialize in delivering comprehensive software solutions that drive business growth and digital transformation. Our team of expert developers and consultants brings years of experience across various technologies and industries, ensuring that every project we undertake meets the highest standards of quality and innovation.
            </p>
            <p className="text-gray-300 mb-6">
              We understand that each business has unique challenges and requirements. That's why we take a consultative approach to every project, working closely with our clients to understand their objectives and develop tailored solutions that deliver measurable results. Our development process combines agile methodologies with industry best practices to ensure efficient delivery and optimal outcomes.
            </p>
            <p className="text-gray-300 mb-6">
              Our technical expertise spans across modern technology stacks, including cloud computing, artificial intelligence, blockchain, and IoT. We stay ahead of technological trends to ensure our clients benefit from the latest innovations in software development. Whether you need a custom enterprise solution, a mobile application, or a complex system integration, our team has the skills and experience to deliver exceptional results.
            </p>
            <p className="text-gray-300 mb-6">
              Quality assurance is integrated into every stage of our development process. We employ rigorous testing methodologies and automated quality checks to ensure that every solution we deliver is robust, secure, and scalable. Our commitment to quality has helped us maintain a track record of successful project deliveries and satisfied clients.
            </p>
            <p className="text-gray-300">
              Beyond development, we provide comprehensive support and maintenance services to ensure your software solutions continue to perform optimally. Our dedicated support team is always available to address any issues and implement updates as needed. Partner with us to transform your digital vision into reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;