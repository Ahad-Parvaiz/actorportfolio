import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '../constants';
import type { CertificateItem } from '../types';
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

const CertificationCard: React.FC<{ cert: CertificateItem }> = ({ cert }) => (
  <motion.a 
    href={cert.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block glass-card rounded-lg p-6 text-left transition-shadow duration-300 hover:shadow-2xl hover:shadow-red-500/10"
    variants={cardVariants}
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold text-gray-100 mb-1">{cert.name}</h3>
        <p className="text-sm text-gray-400">Issuer: {cert.issuer}</p>
      </div>
      <ExternalLinkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2 mt-1" />
    </div>
  </motion.a>
);

const Certifications: React.FC = () => {
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
    <section id="certifications" className="py-20 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
            className="text-3xl font-bold font-mono mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <span className="text-red-500">05.</span> Certifications
        </motion.h2>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
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
            href="https://www.linkedin.com/in/ahadparvaiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg text-red-500 border-2 border-red-500 px-8 py-3 rounded-sm hover:bg-red-500/10 transition-all duration-300"
          >
            View More on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;