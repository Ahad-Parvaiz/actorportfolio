import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.5
      }
    },
  };

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <motion.div className="relative pl-8 sm:pl-12 py-4" variants={itemVariants}>
    <div className="absolute left-0 top-4 h-full border-l-2 border-gray-700"></div>
    <div className="absolute left-[-9px] top-4 w-5 h-5 bg-[#0a0a0a] border-2 border-red-500 rounded-full"></div>
    <p className="text-red-500 font-mono mb-1">{item.period}</p>
    <h3 className="text-xl font-bold text-gray-100">{item.role}</h3>
    <p className="text-gray-400 mb-2">{item.company} &middot; {item.type}</p>
    <ul className="list-disc list-inside text-gray-400 space-y-1">
        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
    </ul>
  </motion.div>
);

const Experience: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.2,
            },
        },
    };

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
            className="text-3xl font-bold font-mono mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
          <span className="text-red-500">02.</span> Experience
        </motion.h2>
        <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {EXPERIENCE_DATA.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;