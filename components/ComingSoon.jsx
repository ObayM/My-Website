'use client'
import { motion} from 'framer-motion';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-20 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-4xl"
      >
        <div className="rounded-3xl border border-white/20 shadow-xl overflow-hidden backdrop-blur-xl bg-white/30 p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-4 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30"
            >
              <Clock className="w-8 h-8 text-indigo-600" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Coming Soon
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl">
              Oops, I am still cooking up this page, come later to see somthing special!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;