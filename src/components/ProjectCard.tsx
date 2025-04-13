import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  fullDescription?: string;
  features?: string[];
  impact?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
  fullDescription,
  features,
  impact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="card-bg rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
      >
        <div
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A0B2E]/80" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            Learn More
            <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            title={title}
            description={description}
            technologies={technologies}
            fullDescription={fullDescription}
            features={features}
            impact={impact}
            image={image}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;