import React, { useEffect, useState, useRef } from 'react';
import MatrixRain from './MatrixRain';

const useTypedText = (text: string, speed = 50) => {
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    setTypedText('');
    if (text) {
      const typingInterval = setInterval(() => {
        setTypedText((prev) => {
          if (prev.length < text.length) {
            return prev + text[prev.length];
          }
          clearInterval(typingInterval);
          return prev;
        });
      }, speed);

      return () => clearInterval(typingInterval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return typedText;
};


const Hero: React.FC = () => {
  const line1 = useTypedText("Hi, my name is");
  const line3 = useTypedText("I'm learning to secure the web by understanding its vulnerabilities.");
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-mono text-lg text-red-500 mb-4">{line1}<span className="animate-pulse">|</span></p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tighter">Ahad Parvaiz</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 max-w-3xl">
          {line3}<span className="animate-pulse">|</span>
        </h2>
        <p className="text-xl text-gray-400 font-mono">
          &gt; Aspiring Red Teamer | Networking | Windows | Linux
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-12 font-mono text-lg text-red-500 border-2 border-red-500 px-8 py-3 rounded-sm hover:bg-red-500/10 transition-all duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;