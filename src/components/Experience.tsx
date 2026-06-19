import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'Lumintro',
      period: 'Feb – May 2026',
      location: 'Remote',
      description: [
        'Worked with WordPress and Elementor to customize and optimize website designs',
        'Implemented transparent header designs and consolidated font systems',
        'Performed comprehensive site cleanup and optimization for better performance'
      ],
      technologies: ['WordPress', 'Elementor', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'Full Stack Zone',
      period: 'Jul – Sep 2025',
      location: 'Remote',
      description: [
        'Developed full-stack web applications using React and Node.js',
        'Built RESTful APIs and integrated frontend components with backend services',
        'Collaborated with team members on feature development and bug fixes'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="experience" className="min-h-screen bg-darkBg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-neonViolet to-neonTeal" />
            <span className="text-neonTeal uppercase text-sm font-semibold">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Professional</span>{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Internships and hands-on experience that shaped my full-stack development skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-12"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neonViolet via-neonTeal to-neonPink transform md:-translate-x-1/2" />

          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:ml-0 md:pr-1/2' : 'md:ml-1/2 md:pl-1/2'} md:pr-8`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-0 md:left-1/2 w-16 h-16 rounded-full border-4 border-darkBg flex items-center justify-center transform md:-translate-x-1/2 -translate-x-1/2 bg-gradient-to-br from-neonViolet to-neonTeal shadow-lg shadow-neonViolet/50`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Calendar className="w-8 h-8 text-white" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-darkCard/80 to-darkCard/30 border border-darkBorder/50 hover:border-neonViolet/40 transition-all"
              >
                {/* Top Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${idx === 0 ? 'from-neonViolet to-neonTeal' : 'from-neonTeal to-neonCyan'} rounded-t-2xl`} />

                {/* Company and Role */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-xl text-neonViolet font-semibold">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 pb-6 border-b border-darkBorder/30">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </div>

                {/* Description */}
                <div className="mb-6 space-y-3">
                  {experience.description.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3"
                    >
                      <ArrowRight className="w-5 h-5 text-neonTeal flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-darkBorder/30">
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-neonCyan bg-neonViolet/15 border border-neonViolet/30 hover:border-neonViolet/60 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to see more about my work experience?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-neonViolet to-neonTeal text-white font-semibold hover:shadow-lg hover:shadow-neonViolet/50 transition-all"
          >
            Download My Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
