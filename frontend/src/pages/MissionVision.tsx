import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import missionImg from '../assets/Mission.jpeg';
import visionImg from '../assets/Vision.jpeg';
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
            <img src={missionImg} alt="Our Mission" className="w-full aspect-video object-cover rounded-2xl shadow-lg border border-gray-100" />
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
            <img src={visionImg} alt="Our Vision" className="w-full aspect-video object-cover rounded-2xl shadow-lg border border-gray-100" />
          </div>
        </section>

      </div>
    </div>
  );
}
