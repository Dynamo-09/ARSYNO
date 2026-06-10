import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full pb-24">
      <section className="bg-white/60 backdrop-blur-md py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-navy-900"
          >
            About <span className="text-techblue">ARSYNO Group</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-medium"
          >
            We are redefining how modern companies approach their financials.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-gray-700 space-y-8"
        >
          <p className="text-2xl leading-relaxed font-semibold text-navy-900">
            We provide end-to-end bookkeeping and accounting services for AI companies, SaaS businesses, real estate firms, and early-stage startups.
          </p>
          
          <p>
            Our comprehensive financial solutions help founders and business owners streamline their finances, maintain accurate records, ensure compliance, and gain valuable financial insights. By taking care of the bookkeeping and accounting functions, we enable businesses to focus on innovation, growth, and scaling their operations with confidence.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-6">Our Tech-Driven Approach</h2>
          <p>
            We don't just use spreadsheets. We leverage the latest financial technology stack—automating the mundane data entry and reconciliation tasks so our team of expert analysts and CFOs can focus on high-value strategic work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg shadow-gray-200/50">
              <h3 className="text-4xl font-bold text-techblue mb-2">99%</h3>
              <p className="text-sm font-semibold text-navy-900">Accuracy Guarantee</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg shadow-gray-200/50">
              <h3 className="text-4xl font-bold text-techblue mb-2">3x</h3>
              <p className="text-sm font-semibold text-navy-900">Faster Close</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center shadow-lg shadow-gray-200/50">
              <h3 className="text-4xl font-bold text-techblue mb-2">24/7</h3>
              <p className="text-sm font-semibold text-navy-900">Data Access</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-900 mt-12 mb-6">Partnering for the Long Haul</h2>
          <p>
            When you work with ARSYNO, you aren't just hiring a vendor; you are gaining a dedicated financial team. We pride ourselves on clear communication, proactive advice, and becoming an integrated part of your company's journey to success.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
