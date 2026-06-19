import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code2, label: 'React', color: 'from-cyan-400 to-blue-500' },
    { icon: Code2, label: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { icon: Code2, label: 'TypeScript', color: 'from-blue-400 to-cyan-500' },
    { icon: Code2, label: 'MongoDB', color: 'from-green-500 to-teal-500' },
    { icon: Brain, label: 'NestJS', color: 'from-red-400 to-pink-500' },
    { icon: Zap, label: 'Tailwind', color: 'from-cyan-300 to-blue-500' },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-darkBg py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            <span className="text-neonTeal uppercase text-sm font-semibold">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Passionate</span>{' '}
            <span className="gradient-text">Full-Stack Developer</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-neonCyan font-semibold">Software Engineering graduate</span> from NUML Rawalpindi (2026), 
                passionate about building scalable full-stack web applications and exploring the intersection of web development and AI.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in React, Node.js, and NestJS, I've worked on diverse projects ranging from 
                <span className="text-neonViolet font-semibold"> AI-powered systems</span> to <span className="text-neonTeal font-semibold">collaborative MERN applications</span>. 
                I'm driven by the challenge of solving complex problems with elegant, maintainable code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My interests span full-stack web development, machine learning integration, and natural language processing. 
                I believe in continuous learning and staying at the forefront of modern web technologies.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-neonViolet/10 to-neonTeal/10 border border-neonViolet/30 hover:border-neonViolet/60 transition-all"
              >
                <div className="text-2xl font-bold text-neonViolet">3+</div>
                <p className="text-sm text-gray-400">Internships</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-neonTeal/10 to-neonCyan/10 border border-neonTeal/30 hover:border-neonTeal/60 transition-all"
              >
                <div className="text-2xl font-bold text-neonTeal">4+</div>
                <p className="text-sm text-gray-400">Full Projects</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-neonPink/10 to-neonViolet/10 border border-neonPink/30 hover:border-neonPink/60 transition-all"
              >
                <div className="text-2xl font-bold text-neonPink">Rawalpindi</div>
                <p className="text-sm text-gray-400">Based in Pakistan</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-neonCyan/10 to-neonTeal/10 border border-neonCyan/30 hover:border-neonCyan/60 transition-all"
              >
                <div className="text-2xl font-bold text-neonCyan">2026</div>
                <p className="text-sm text-gray-400">Graduation Year</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-96 flex items-center justify-center"
          >
            {/* Animated Ring Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-80 h-80 rounded-full border border-neonViolet/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 rounded-full border border-neonTeal/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 rounded-full border border-neonCyan/20 border-dashed"
              />
            </div>

            {/* Tech Icons in Ring */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="absolute"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg hover:shadow-2xl transition-all cursor-pointer group`}>
                      <skill.icon className="w-6 h-6 text-white" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-darkCard border border-neonViolet/30 rounded-lg text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {skill.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-neonViolet to-neonTeal flex items-center justify-center shadow-2xl"
              >
                <Code2 className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Code2,
              title: 'Full-Stack Web Dev',
              description: 'Building robust, scalable applications with modern frameworks and best practices.'
            },
            {
              icon: Brain,
              title: 'AI & NLP',
              description: 'Exploring machine learning and natural language processing to create intelligent systems.'
            },
            {
              icon: Zap,
              title: 'Performance',
              description: 'Optimizing applications for speed, efficiency, and exceptional user experiences.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-darkCard/50 to-darkCard/20 border border-darkBorder/50 hover:border-neonViolet/40 transition-all"
              >
                <Icon className="w-8 h-8 text-neonViolet mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
