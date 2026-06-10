import { ArrowRight, BarChart3, Calculator, PiggyBank, Briefcase, FileSpreadsheet, TrendingUp, Lightbulb, Truck, Cpu, Laptop } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import financeVideo from '../assets/finance.mp4';

const services = [
  { icon: <Briefcase />, title: 'Virtual CFO', desc: 'Strategic financial leadership for scaling businesses.' },
  { icon: <Calculator />, title: 'Bookkeeping', desc: 'Accurate, timely, and compliant financial records.' },
  { icon: <TrendingUp />, title: 'Financial Modeling', desc: 'Forecasts and models to guide your next move.' },
  { icon: <PiggyBank />, title: 'Tax Strategy', desc: 'Proactive tax planning to minimize liabilities.' },
  { icon: <BarChart3 />, title: "Reporting and KPI's", desc: 'Custom dashboards and KPI tracking.' },
  { icon: <FileSpreadsheet />, title: 'Payroll & HR Integration', desc: 'Seamless integration of your workforce financials.' },
  { icon: <Lightbulb />, title: 'Strategy & Advisory', desc: 'Business planning, cost optimization, and growth strategy.' },
  { icon: <Truck />, title: 'Supply Chain Management', desc: 'Vendor management and logistics coordination.' },
  { icon: <Cpu />, title: 'Process Automation', desc: 'Workflow and spreadsheet automation for efficiency.' },
  { icon: <Laptop />, title: 'Technology & Software Support', desc: 'Accounting software setup and ERP implementation.' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent -z-20" />
        
        <div className="absolute inset-0 -z-10">
          <video 
            src={financeVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover blur-[3px] opacity-80"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-navy-900"
          >
            Accounting <span className="block mt-[1%] text-techblue drop-shadow-sm">Beyond Numbers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-12 font-medium"
          >
            Modern accounting, Virtual CFO, and financial strategies tailored for forward-thinking enterprises.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="bg-techblue text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:bg-techblue-hover transition-all flex items-center justify-center">
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Link>
            <Link to="/services" className="bg-white/80 backdrop-blur border border-gray-200 text-navy-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy-900">Our Core <span className="text-techblue">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">We provide a full spectrum of financial services to keep your business lean, compliant, and ready to scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                onClick={() => navigate(`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-white/70 backdrop-blur-md border border-gray-100 p-8 rounded-2xl hover:border-techblue/30 transition-colors group cursor-pointer shadow-lg shadow-gray-200/50"
              >
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-techblue mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden my-12 mx-4 lg:mx-12">
        <div className="max-w-4xl mx-auto text-center text-navy-900 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to transform your financials?</h2>
          <p className="text-xl md:text-2xl mb-10 font-medium text-navy-800">Join top-tier companies that trust ARSYNO to manage their growth.</p>
          <Link to="/contact" className="bg-techblue text-navy-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-techblue-hover transition-colors shadow-xl inline-block">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
