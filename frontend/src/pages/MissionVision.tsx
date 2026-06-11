import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MissionVision() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Mission Section */}
        <section id="mission" className="flex flex-col md:flex-row items-center gap-12 pt-12 scroll-mt-32 min-h-[50vh]">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-navy-900"
            >
              Our <span className="text-techblue">Mission</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              By combining accounting expertise, technology, and strategic financial guidance, we transform complex financial processes into clear, growth-focused systems that empower entrepreneurs to build exceptional businesses.
            </motion.p>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 shadow-sm">
              <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-medium">Space for Mission Picture</span>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="flex flex-col md:flex-row-reverse items-center gap-12 pb-12 scroll-mt-32 min-h-[50vh]">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-navy-900"
            >
              Our <span className="text-techblue">Vision</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              To become the finance backbone behind the world's most ambitious startups and growth-stage companies.
            </motion.p>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full aspect-video bg-gray-100 border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 shadow-sm">
              <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="font-medium">Space for Vision Picture</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
