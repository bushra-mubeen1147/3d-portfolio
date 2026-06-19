import { motion } from 'framer-motion';
import { Code2, Database, Brain, Zap } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const SkillCard = ({ name, level, category }: SkillProps) => {
  const bars = Array(5).fill(0);
  return (
    <motion.div
      className="glass p-4 rounded-xl border border-darkBorder hover:border-neonViolet/50 transition-all group"
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-neonTeal text-xs">{category}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {bars.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-2 rounded-full transition-all ${
              i < level ? 'bg-neonViolet' : 'bg-darkBorder'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 5, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 5, category: 'Frontend' },
    ],
  },
  {
    icon: Database,
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 5, category: 'Backend' },
      { name: 'Express', level: 5, category: 'Backend' },
      { name: 'NestJS', level: 4, category: 'Backend' },
    ],
  },
  {
    icon: Brain,
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 5, category: 'Database' },
    ],
  },
  {
    icon: Zap,
    title: 'Other',
    skills: [
      { name: 'REST APIs', level: 5, category: 'Other' },
      { name: 'Git/GitHub', level: 5, category: 'Other' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-darkBg py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-neonViolet to-neonTeal" />
            <span className="text-neonTeal uppercase text-sm font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit spanning frontend development, backend infrastructure, AI/ML implementation, and DevOps practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-neonViolet/10">
                    <Icon className="w-5 h-5 text-neonViolet" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, sidx) => (
                    <SkillCard key={sidx} {...skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="btn-neon px-8 py-3 rounded-lg font-semibold">
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
