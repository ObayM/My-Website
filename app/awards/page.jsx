'use client'
import React from "react";
import { motion } from "framer-motion";
import { awards } from "@/app/constants";
import AwardCard from "@/components/AwardCard";

const AwardsSection = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-20"
      >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-sky-600 via-blue-600 to-indigo-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Awards & Achievements
          </motion.h1>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-20">
        {awards.map((award, index) => (
          <AwardCard 
            key={index} 
            award={award} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;