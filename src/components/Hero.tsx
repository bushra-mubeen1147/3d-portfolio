import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <HeroScene />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto mb-8"
        >
          <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300 flex items-center gap-2">
              <span className="text-lg">✨</span>
              Full Stack + AI Engineer
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter">
            <span className="text-white">Bushra</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Mubeen
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-12 pointer-events-auto"
        >
          Building full-stack web apps with React, Node.js & NestJS
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('resume')}
            className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
          >
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
