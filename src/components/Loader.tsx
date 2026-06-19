import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  isLoading?: boolean;
  onLoadComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ isLoading = true, onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsExiting(true);
      setTimeout(() => {
        onLoadComplete?.();
      }, 600);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        return next > 90 ? 90 : next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading, onLoadComplete]);

  const ringVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const reverseRingVariants = {
    rotate: {
      rotate: -360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const particleVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="visible"
      animate={isExiting ? 'exit' : 'visible'}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-purple-500/50">
            BM
          </div>
        </motion.div>

        {/* Concentric Rotating Rings */}
        <div className="relative w-48 h-48">
          {/* Ring 1 */}
          <motion.div
            variants={ringVariants}
            animate="rotate"
            className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-purple-400 rounded-full"
          />

          {/* Ring 2 */}
          <motion.div
            variants={reverseRingVariants}
            animate="rotate"
            className="absolute inset-4 border-2 border-transparent border-b-cyan-400 border-l-cyan-500 rounded-full"
          />

          {/* Ring 3 */}
          <motion.div
            variants={ringVariants}
            animate="rotate"
            className="absolute inset-8 border-2 border-transparent border-t-pink-500 border-r-pink-400 rounded-full"
          />

          {/* Ring 4 */}
          <motion.div
            variants={reverseRingVariants}
            animate="rotate"
            className="absolute inset-12 border-2 border-transparent border-b-violet-400 border-l-violet-500 rounded-full"
          />

          {/* Pulsing Center */}
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute w-48 h-48 flex items-center justify-center">
          <motion.div
            variants={particleVariants}
            animate="float"
            className="absolute w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50"
            style={{ top: '10%', left: '20%' }}
          />
          <motion.div
            variants={particleVariants}
            animate="float"
            transition={{ delay: 1 }}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
            style={{ top: '15%', right: '15%' }}
          />
          <motion.div
            variants={particleVariants}
            animate="float"
            transition={{ delay: 2 }}
            className="absolute w-2 h-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50"
            style={{ bottom: '20%', left: '10%' }}
          />
        </div>

        {/* Progress Display */}
        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 font-medium"
          >
            {Math.round(progress)}%
          </motion.p>

          {/* Progress Bar */}
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-400 tracking-widest uppercase"
        >
          Loading<span className="inline-block">.</span>
          <span className="inline-block">.</span>
          <span className="inline-block">.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
