import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  color: string;
  icon: React.ReactNode;
}

function ProjectCard({ title, description, image, tags, github, color, icon }: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } as any}
      className="relative min-h-[420px] rounded-3xl p-8 bg-gradient-to-br from-darkCard/60 to-darkCard/30 border border-darkBorder/60 flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-neonViolet/40 transition-all duration-300"
    >
      <div className={`absolute -inset-px bg-gradient-to-r ${color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
      
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neonViolet/20 to-transparent"
          style={{ transform: "translateZ(20px)" }}
        />
      )}

      <div 
        style={{ transform: "translateZ(30px)" } as any}
        className="absolute top-6 right-6 p-3 rounded-xl bg-gradient-to-br from-neonViolet/30 to-neonTeal/20 border border-neonViolet/40 text-neonCyan group-hover:text-neonTeal group-hover:scale-110 transition-all duration-300"
      >
        {icon}
      </div>

      <div className="flex flex-col gap-6 z-10" style={{ transform: "translateZ(40px)" } as any}>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-[11px] font-bold uppercase tracking-wider text-neonCyan/80 px-3 py-1 rounded-full bg-neonViolet/10 border border-neonViolet/30">
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neonViolet group-hover:to-neonTeal transition-all duration-300 leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-300 font-medium leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      <div 
        style={{ transform: "translateZ(50px)" } as any}
        className="flex items-center gap-3 mt-8 z-20 pt-6 border-t border-darkBorder/40"
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 text-xs font-bold text-white bg-gradient-to-r from-neonViolet/20 to-neonTeal/20 border border-neonViolet/30 rounded-xl hover:border-neonViolet/60 hover:from-neonViolet/40 hover:to-neonTeal/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span className="text-sm">🐙</span>
          <span>Code</span>
          <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
        <button className="p-3 text-neonCyan bg-neonViolet/10 border border-neonViolet/30 rounded-xl hover:bg-neonViolet/20 hover:border-neonViolet/60 transition-all duration-300 flex items-center justify-center">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const projects = [
    {
      title: "SafeText AI",
      description: "BERT-based cyberbullying detection system for Twitter. Led a 3-person team, integrated Supabase + Flask backend, with comprehensive documentation and use case diagrams. Achieves high accuracy in identifying harmful content.",
      image: "safetext-ai.jpg",
      tags: ["Python", "BERT", "Flask", "Supabase", "NLP", "AI"],
      github: "https://github.com/bushra-mubeen1147",
      color: "from-neonPink via-red-500 to-neonViolet",
      icon: <span className="text-lg">🛡️</span>,
    },
    {
      title: "EmailWorth",
      description: "Custom Node.js webmail system with Dovecot/MariaDB authentication. Debugged complex email protocols, resolved frontend bugs, and implemented robust email handling. Production-ready email solution.",
      image: "emailworth.jpg",
      tags: ["Node.js", "Dovecot", "MariaDB", "Email", "Backend", "Full-Stack"],
      github: "https://github.com/bushra-mubeen1147",
      color: "from-neonCyan via-blue-500 to-cyan-400",
      icon: <span className="text-lg">📧</span>,
    },
    {
      title: "Astar",
      description: "Enterprise NestJS refactor with clean architecture. Implemented controllers, services, guards, and dependency injection patterns. Follows SOLID principles for maintainable, scalable backend systems.",
      image: "astar.jpg",
      tags: ["NestJS", "TypeScript", "Architecture", "Backend", "DDD", "REST API"],
      github: "https://github.com/bushra-mubeen1147",
      color: "from-neonViolet via-purple-500 to-neonPink",
      icon: <span className="text-lg">⚙️</span>,
    },
    {
      title: "Nexus",
      description: "Collaborative MERN stack project completed under tight deadline pressure. Full-stack development with React, Node.js, Express, and MongoDB. Demonstrates effective team collaboration and rapid development.",
      image: "nexus.jpg",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Collaboration", "Full-Stack"],
      github: "https://github.com/bushra-mubeen1147",
      color: "from-neonTeal via-cyan-500 to-neonCyan",
      icon: <span className="text-lg">🚀</span>,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 w-full flex items-center justify-center overflow-hidden px-6 md:px-12 bg-darkBg"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-neonViolet/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-neonTeal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-neonPink/40">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] gradient-text gradient-violet-teal">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Premium <span className="gradient-text gradient-violet-teal">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            A collection of high-end, production-grade applications showcasing AI integration, full-stack development, and immersive web experiences. Hover on cards for interactive 3D effects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((proj, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ProjectCard
                title={proj.title}
                description={proj.description}
                image={proj.image}
                tags={proj.tags}
                github={proj.github}
                color={proj.color}
                icon={proj.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 pt-16 border-t border-darkBorder/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
          <a
            href="https://github.com/bushra-mubeen1147"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-8 py-4 inline-flex items-center gap-2"
          >
            <span>Visit GitHub</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
