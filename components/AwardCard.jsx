import { Award, ExternalLink, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const AwardCard = ({ award, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <div className="relative rounded-3xl border border-white/20 shadow-xl overflow-hidden backdrop-blur-xl bg-white/30">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/10 to-purple-50/10" />
          
          <div className="relative p-8 lg:p-10">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/30">
                  {index === 0 ? (
                    <Trophy className="w-6 h-6 text-indigo-600" />
                  ) : (
                    <Award className="w-6 h-6 text-indigo-600" />
                  )}
                </div>
                <span className="text-lg font-medium text-indigo-600">{award.AwardingBody}</span>
              </div>
            </div>
  
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-indigo-900 group-hover:text-indigo-600 transition-colors">
                  {award.Title}
                </h3>
                <p className="text-lg text-slate-600">
                  {award.Description}
                </p>
                {award.Link && (
                  <a 
                    href={award.Link}
                    target="_blank"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-lg transition-colors"
                  >
                    <span className="mr-2">{award.LinkDes}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
  
              {award.Images && award.Images.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                  {award.Images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative rounded-2xl overflow-hidden shadow-lg ${
                        i === 0 ? 'col-span-2 aspect-video' : 'aspect-video'
                      }`}
                    >
                      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
                      <img 
                        src={image} 
                        alt={`${award.Title} image ${i + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export default AwardCard;