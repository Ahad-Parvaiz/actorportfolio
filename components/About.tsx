import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center">
          <span className="text-red-500">01.</span> About Me
        </h2>
        <div className="glass-card p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                    <img 
                        src="https://i.ibb.co/Gq6nMP3/profile-modified.png" 
                        alt="Ahad Parvaiz"
                        className="w-48 h-48 rounded-full object-cover border-2 border-red-500 shadow-lg shadow-red-500/40"
                    />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm a passionate cybersecurity student on a journey into the world of offensive security. My focus is on learning the arts of ethical hacking and red teaming. I am building a strong foundation in core areas like networking, Windows and Kali Linux environments, and web application security. I'm driven by a deep curiosity to understand how systems are compromised to better learn how to protect them. I'm actively seeking opportunities to apply my skills and grow as a security professional.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;