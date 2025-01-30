"use client";
import { motion } from "framer-motion";
import {ExternalLink, Github, PlayCircle } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8">
        <motion.div 
          className="order-2 lg:order-1 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.Tools.map((tool, i) => (
                <motion.span
                  key={i}
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white/90 text-xs sm:text-sm border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {project.Title}
            </motion.h2>
          </div>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {project.LiveDemo && (
              <motion.a
                href={project.LiveDemo}
                target="_blank"
                className="group flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base">Live Demo</span>
              </motion.a>
            )}

            {project.VideoDemo && (
              <motion.a
                href={project.VideoDemo}
                target="_blank"
                className="group flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base">Watch Demo</span>
              </motion.a>
            )}

            {project.Github && (
              <motion.a
                href={project.Github}
                target="_blank"
                className="group flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-black/30 backdrop-blur-sm hover:bg-black/40 text-white/90 border border-white/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base">View Code</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[600px]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            <motion.img
              src={project.Image || "https://cloud-4efdkt0eh-hack-club-bot.vercel.app/01730837711716.jpeg"}
              alt={project.Title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;