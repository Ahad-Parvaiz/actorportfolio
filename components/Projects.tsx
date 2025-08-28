import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import type { ProjectItem } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
        duration: 0.5
    }
  },
};

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <motion.div 
    className="glass-card rounded-lg p-6 flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-red-500/10"
    variants={cardVariants}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
      <div className="flex space-x-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
          <GithubIcon className="w-6 h-6" />
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
    <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.skills.map(skill => (
        <span key={skill} className="text-xs font-mono bg-red-500/10 text-red-500 px-2 py-1 rounded">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
            className="text-3xl font-bold font-mono mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <span className="text-red-500">04.</span> Projects
        </motion.h2>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/Ahad-Parvaiz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg text-red-500 border-2 border-red-500 px-8 py-3 rounded-sm hover:bg-red-500/10 transition-all duration-300"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;