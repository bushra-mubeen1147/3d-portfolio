import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load - completes after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-white selection:bg-neonViolet/30 selection:text-white">
      {/* Immersive Loading Screen */}
      {isLoading && <Loader isLoading={isLoading} onLoadComplete={() => setIsLoading(false)} />}

      {/* Floating Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative w-full bg-darkBg border-t border-darkBorder/30">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-neonViolet/5 blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neonTeal/5 blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neonViolet to-neonTeal flex items-center justify-center font-bold text-white text-sm">
                  BM
                </div>
                <span className="text-lg font-bold">Bushra Mubeen</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Full Stack Developer & AI Engineer crafting intelligent systems and scalable web applications with cutting-edge technology.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#about" className="hover:text-neonCyan transition-colors duration-300 flex items-center gap-2 group">
                  <span>About Me</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#skills" className="hover:text-neonCyan transition-colors duration-300 flex items-center gap-2 group">
                  <span>Skills</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#projects" className="hover:text-neonCyan transition-colors duration-300 flex items-center gap-2 group">
                  <span>Projects</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#contact" className="hover:text-neonCyan transition-colors duration-300 flex items-center gap-2 group">
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h3>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/bushra-mubeen1147"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg glass border border-darkBorder/40 hover:border-neonViolet/60 text-gray-400 hover:text-neonCyan transition-all duration-300"
                  title="GitHub"
                >
                  <span className="text-lg">🐙</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bushra-mubeen-8859a8251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg glass border border-darkBorder/40 hover:border-neonTeal/60 text-gray-400 hover:text-neonCyan transition-all duration-300"
                  title="LinkedIn"
                >
                  <span className="text-lg">💼</span>
                </motion.a>
                <motion.a
                  href="mailto:bushra.mubeen@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg glass border border-darkBorder/40 hover:border-neonPink/60 text-gray-400 hover:text-neonCyan transition-all duration-300"
                  title="Email"
                >
                  <span className="text-lg">✉️</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-darkBorder/40 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              <p>© {new Date().getFullYear()} Bushra Mubeen. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <span>Built with React, Three.js, Framer Motion & Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg hover:bg-darkBorder/40 transition-all duration-300 text-gray-400 hover:text-neonCyan"
                title="Back to top"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
