import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  id: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks: NavLink[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-purple-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
              BM
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-white text-lg">Bushra Mubeen</h1>
              <p className="text-xs text-gray-400">Full Stack Developer & AI Engineer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 border-l border-gray-700 pl-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <span className="text-lg">🐙</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>

            {/* Contact CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-purple-500/10"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="px-4 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  variants={itemVariants}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-purple-500/20 text-purple-300 font-semibold'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div variants={itemVariants} className="flex gap-4 pt-4 border-t border-gray-700">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-sm">📱</span>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-sm">💼</span>
                  LinkedIn
                </a>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
