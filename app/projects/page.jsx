'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/constants";
import { ArrowLeft, ArrowRight, ExternalLink, Github, PlayCircle } from "lucide-react";
import ProjectCard from "@/components/ProjectCard"

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      if (current === projects.length - 1) {
        setCurrent(0);
        setDirection(-1);
      } else {
        setCurrent(c => c + 1);
        setDirection(1);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [current, isHovering]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      y: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrent(prev => Math.max(0, Math.min(projects.length - 1, prev + newDirection)));
  };

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-transparent via-black/20 to-black/40"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 sm:px-8 z-30">
        <motion.button 
          onClick={() => navigate(-1)}
          className="p-3 sm:p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg hover:bg-black/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={current === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />
        </motion.button>
        
        <motion.button 
          onClick={() => navigate(1)}
          className="p-3 sm:p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/5 shadow-lg hover:bg-black/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={current === (projects.length - 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/5">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="relative h-1 rounded-full overflow-hidden"
              style={{ width: i === current ? '2rem' : '1rem' }}
            >
              <div className={`absolute inset-0 ${
                i === current 
                  ? 'bg-gradient-to-r from-sky-400 to-blue-500' 
                  : 'bg-white/30'
              }`} />
              {i === current && (
                <motion.div 
                  className="absolute inset-0 bg-white/50"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ProjectCard project={projects[current]} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};


export default ProjectsSection;