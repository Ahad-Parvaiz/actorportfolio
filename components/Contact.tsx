import React from 'react';
import { motion } from 'framer-motion';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Contact: React.FC = () => {
  const email = "ahadparvaiz92@gmail.com";
  const phone = "+92-3197601579";

  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold font-mono mb-4">
          <span className="text-red-500">06.</span> Get In Touch
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          I'm always open to discussing new opportunities, creative ideas, or interesting projects in the cybersecurity space. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a href={`mailto:${email}`} className="font-mono text-lg text-red-500 hover:underline">{email}</a>
            <span className="hidden sm:block text-gray-500">|</span>
            <p className="font-mono text-lg text-gray-300">{phone}</p>
        </div>
        <div className="flex justify-center items-center space-x-6">
          <a href="https://github.com/Ahad-Parvaiz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/ahadparvaiz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;