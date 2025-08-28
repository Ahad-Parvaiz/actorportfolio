import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on navigation
    if (href === '#hero') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-lg' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleScrollTo(e, '#hero')} className="text-xl font-bold font-mono text-red-500 tracking-widest hover:text-white transition-colors">
            &lt;Actor /&gt;
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="font-mono text-sm text-gray-300 hover:text-red-500 transition-colors">
                <span className="text-red-500">0{index + 1}.</span> {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-red-500 transition-colors z-50 relative">
                {isMenuOpen ? <CloseIcon className="w-8 h-8"/> : <MenuIcon className="w-8 h-8"/>}
             </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                className="fixed inset-0 bg-[#0a0a0a] z-40 md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <nav className="flex flex-col items-center justify-center h-full">
                    {navLinks.map((link, index) => (
                        <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="font-mono text-2xl text-gray-300 my-4 hover:text-red-500 transition-colors">
                            <span className="text-red-500">0{index + 1}.</span> {link.name}
                        </a>
                    ))}
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;