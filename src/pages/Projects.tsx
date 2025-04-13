import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform using machine learning for business intelligence and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      link: '/projects/ai-analytics',
    },
    {
      title: 'Smart Agriculture System',
      description: 'IoT-based farming solution for monitoring and automating agricultural processes.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['IoT', 'Node.js', 'MongoDB', 'React'],
      link: '/projects/smart-agriculture',
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Comprehensive healthcare solution for patient management and telemedicine services.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      link: '/projects/healthcare',
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive learning platform with real-time collaboration and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
      link: '/projects/e-learning',
    },
    {
      title: 'Supply Chain Management',
      description: 'Blockchain-based supply chain tracking and management system.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Ethereum', 'React', 'Node.js', 'Web3'],
      link: '/projects/supply-chain',
    },
    {
      title: 'Smart City Dashboard',
      description: 'Real-time monitoring and analytics for urban infrastructure and services.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Python', 'TimescaleDB'],
      link: '/projects/smart-city',
    },
  ];

  return (
    <div className="min-h-screen section-bg">
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Innovative solutions that drive digital transformation and business growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2744] rounded-lg overflow-hidden shadow-xl flex flex-col h-full"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;