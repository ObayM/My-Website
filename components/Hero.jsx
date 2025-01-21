'use client';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { value: "35+", label: "Repos", color: "from-purple-500 to-sky-500" },
    { value: "15+", label: "Projects Completed", color: "from-sky-500 to-blue-500" },
    { value: "16", label: "y/o", color: "from-blue-500 to-indigo-500" },
    { value: "1x", label: "Hackathon Winner", color:"from-green-500 to-yellow-500"}
  ];

  const socialLinks = [
    {icon:Linkedin, url:"https://www.linkedin.com/in/obay-dev/"},
    {icon:Github, url:"https://github.com/obayM"},
    {icon:Twitter, url:"https://x.com/ObayRashad/"},
    {icon:Mail, url:"mailto:obay.developer@gmail.com"}
  ]

  return (
    <div className="min-h-screen overflow-hidden">

      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="space-y-4 relative"
              variants={itemVariants}
            >

              <motion.h1 
                className="text-7xl font-bold"
                variants={itemVariants}
              >
                Hi, I'm
                <motion.span
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200%" }}
                >
                  Obay Rashad
                </motion.span>
                <motion.span 
                  className="block mt-2 text-4xl text-gray-600"
                  variants={itemVariants}
                >
                  Software Engineer
                </motion.span>
              </motion.h1>
              <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              I'm a software engineer with a focus on AI and full-stack development. 
              My work involves building intelligent, scalable applications using modern tools and technologies.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-sky-600 text-sky-600 rounded-xl"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(186, 230, 253, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              variants={itemVariants}
            >
              { socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="p-3 rounded-lg hover:bg-sky-100/50 group"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-6 h-6 text-gray-600 group-hover:text-sky-600" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>



          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.div 
                className="w-96 h-96 mx-auto relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-2xl opacity-20" />
                <motion.div
                  className="w-full h-full rounded-full border-8 border-white/80 shadow-2xl overflow-hidden"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                >
                  <img
                    src="/images/Obay.jpeg"
                    alt="Obay Rashad"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 relative"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <motion.div 
                className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/20"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`text-6xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-cyan-700 font-semibold mt-2">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;