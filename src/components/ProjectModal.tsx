import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Rocket, LineChart, ArrowUp } from 'lucide-react';

interface ProjectModalProps {
  title: string;
  description: string;
  technologies: string[];
  fullDescription?: string;
  features?: string[];
  impact?: string;
  image: string;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  description,
  technologies,
  fullDescription,
  features,
  impact,
  image,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl mx-auto relative mt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 bg-gray-900 bg-opacity-50 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <Rocket className="h-5 w-5 mr-2 text-indigo-400" />
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {fullDescription || description}
            </p>
          </div>

          {features && features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-indigo-400" />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="h-2 w-2 mt-2 mr-2 bg-indigo-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {impact && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <LineChart className="h-5 w-5 mr-2 text-indigo-400" />
                Impact & Results
              </h3>
              <p className="text-gray-300 leading-relaxed">{impact}</p>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;