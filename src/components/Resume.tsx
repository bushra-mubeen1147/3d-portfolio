import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';

const Resume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      // In production, this would trigger actual PDF download
      window.open('#', '_blank');
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="resume" className="min-h-screen bg-darkBg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-neonViolet to-neonTeal" />
            <span className="text-neonTeal uppercase text-sm font-semibold">Resume</span>
            <div className="h-1 w-12 bg-gradient-to-r from-neonTeal to-neonViolet" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my detailed resume or explore my qualifications, experience, and technical expertise below.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-neonViolet/10 to-neonTeal/10 border border-neonViolet/30 hover:border-neonViolet/60 transition-all">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neonViolet/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Full Resume Available
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  Get a detailed overview of my education, experience, skills, and projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="text-sm text-neonCyan font-semibold">
                    ✓ Education & Certifications
                  </div>
                  <div className="text-sm text-neonTeal font-semibold">
                    ✓ Work Experience
                  </div>
                  <div className="text-sm text-neonViolet font-semibold">
                    ✓ Technical Skills
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-neonViolet to-neonTeal text-white font-semibold hover:shadow-lg hover:shadow-neonViolet/50 transition-all disabled:opacity-75 flex-shrink-0"
              >
                <motion.div
                  animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 1, repeat: isDownloading ? Infinity : 0 }}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Resume Preview Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-darkCard/80 to-darkCard/30 border border-darkBorder/50 hover:border-neonViolet/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neonViolet/20 border border-neonViolet/30">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-neonViolet/50 pl-6">
                <h4 className="text-xl font-bold text-white mb-1">
                  Bachelor of Science in Software Engineering
                </h4>
                <p className="text-neonTeal font-semibold mb-2">
                  National University of Modern Languages (NUML), Rawalpindi
                </p>
                <p className="text-gray-400">Expected Graduation: 2026</p>
                <p className="text-gray-300 mt-3">
                  Focused on full-stack development, data structures, algorithms, and modern web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-darkCard/80 to-darkCard/30 border border-darkBorder/50 hover:border-neonTeal/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neonTeal/20 border border-neonTeal/30">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Full-Stack Developer Intern',
                  company: 'Lumintro',
                  period: 'Feb – May 2026',
                  description: 'WordPress development, site optimization, and UI/UX improvements.'
                },
                {
                  title: 'Full-Stack Developer Intern',
                  company: 'Full Stack Zone',
                  period: 'Jul – Sep 2025',
                  description: 'MERN stack development, RESTful API design, and database management.'
                }
              ].map((job, idx) => (
                <div key={idx} className="border-l-2 border-neonTeal/50 pl-6">
                  <h4 className="text-lg font-bold text-white mb-1">{job.title}</h4>
                  <p className="text-neonCyan font-semibold">{job.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{job.period}</p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-darkCard/80 to-darkCard/30 border border-darkBorder/50 hover:border-neonCyan/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neonCyan/20 border border-neonCyan/30">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
                { category: 'Backend', skills: ['Node.js', 'Express', 'NestJS', 'REST APIs'] },
                { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Firebase'] },
                { category: 'Tools & Other', skills: ['Git/GitHub', 'Docker', 'Webpack', 'REST APIs'] }
              ].map((skillGroup, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-darkBg/50 border border-darkBorder/30">
                  <h4 className="text-neonViolet font-bold mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold text-neonCyan bg-neonViolet/15 border border-neonViolet/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-darkCard/80 to-darkCard/30 border border-darkBorder/50 hover:border-neonPink/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neonPink/20 border border-neonPink/30">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-4 p-4 rounded-lg bg-darkBg/50 border border-darkBorder/30 hover:border-neonCyan/60 transition-all group">
                <Mail className="w-5 h-5 text-neonCyan group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-white font-semibold">bushra.dev@email.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-darkBg/50 border border-darkBorder/30 group">
                <MapPin className="w-5 h-5 text-neonTeal group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white font-semibold">Rawalpindi, Pakistan</p>
                </div>
              </div>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-darkBg/50 border border-darkBorder/30 hover:border-neonViolet/60 transition-all group">
                <span className="text-xl text-neonViolet group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <p className="text-xs text-gray-400">LinkedIn</p>
                  <p className="text-white font-semibold">LinkedIn Profile</p>
                </div>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-darkBg/50 border border-darkBorder/30 hover:border-neonTeal/60 transition-all group">
                <span className="text-xl text-neonTeal group-hover:scale-110 transition-transform">🐙</span>
                <div>
                  <p className="text-xs text-gray-400">GitHub</p>
                  <p className="text-white font-semibold">GitHub Profile</p>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-neonViolet to-neonTeal text-white font-semibold hover:shadow-lg hover:shadow-neonViolet/50 transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
