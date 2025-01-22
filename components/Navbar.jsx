'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Home, FolderKanban, BookOpen, FileText, Newspaper, Trophy } from 'lucide-react';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'Projects', href: '/projects', icon: FolderKanban },
    { title: 'Journey', href: '/journey', icon: BookOpen },
    { title: 'Resume', href: '/resume', icon: FileText },
    { title: 'Blog', href: '/blog', icon: Newspaper },
    { title: 'Awards', href: '/awards', icon: Trophy },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.nav 
        className="rounded-full backdrop-blur-md bg-black/10 border border-white/10 overflow-hidden"
        animate={{
          width: isExpanded ? 'auto' : '48px',
          height: isExpanded ? 'auto' : '48px',
          padding: isExpanded ? '8px' : '4px'
        }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-1 p-1"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-black/70 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="w-10 h-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Menu className="w-5 h-5 text-white/90" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};

export default Header;


