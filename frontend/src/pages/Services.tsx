import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calculator, TrendingUp, PiggyBank, BarChart3, FileSpreadsheet, CheckCircle2, Lightbulb, Truck, Cpu, Laptop } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const detailedServices = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Virtual CFO',
    description: 'Get the strategic guidance of a Chief Financial Officer at a fraction of the cost. We help you navigate complex financial decisions and plan for sustainable growth.',
    benefits: ['Strategic financial planning', 'Cash flow management', 'Board reporting', 'Fundraising support']
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Bookkeeping',
    description: 'Maintain accurate and up-to-date financial records. We handle the day-to-day transactions so you can focus on running your business.',
    benefits: ['Monthly reconciliations', 'Accounts payable/receivable', 'Expense tracking', 'Clean historical data']
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Financial Modeling',
    description: 'Visualize your financial future. We build robust models to forecast revenue, expenses, and capital requirements under various scenarios.',
    benefits: ['Scenario analysis', 'Budget vs. actuals', 'Valuation models', 'Unit economics']
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: 'Tax Strategy',
    description: 'Minimize your tax burden with proactive planning. We keep you compliant while identifying opportunities for tax savings.',
    benefits: ['Entity structuring', 'R&D tax credits', 'Quarterly estimates', 'Annual filings']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reporting and KPI's",
    description: 'Understand your business at a glance. We create custom dashboards tracking the metrics that matter most to your success.',
    benefits: ['Custom dashboards', 'Industry benchmarking', 'Profitability analysis', 'Investor updates']
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8" />,
    title: 'Payroll & HR Integration',
    description: 'Streamline your workforce finances. We integrate payroll processing with your general ledger for seamless accounting.',
    benefits: ['Automated payroll runs', 'Benefits administration', 'Compliance tracking', 'Contractor payments']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategy & Advisory',
    description: 'Comprehensive strategic guidance to optimize operations, reduce costs, and drive sustainable growth for your business.',
    benefits: ['Business Process Improvement', 'Cost Optimization', 'Startup & Growth Advisory', 'Financial Strategy', 'Business Planning', 'Operational Advisory', 'Decision Support & Reporting']
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions to streamline logistics, manage vendors, and optimize your operational workflow.',
    benefits: ['Vendor Management', 'Procurement Support', 'Inventory Analysis', 'Logistics Coordination', 'Supply Chain Process Optimization', 'Operational Workflow Support']
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Process Automation',
    description: 'Transform manual tasks into efficient, automated workflows to increase accuracy and accelerate your business processes.',
    benefits: ['Workflow Automation', 'Financial Process Automation', 'Reporting Automation', 'Spreadsheet & Excel Automation', 'ERP & Accounting Software Support', 'Process Standardization', 'Business Efficiency Solutions']
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'Technology & Software Support',
    description: 'Expert implementation and support for the software, tools, and systems that power your financial operations.',
    benefits: ['Accounting Software Setup', 'ERP Support & Implementation', 'Process Automation Tools', 'Dashboard & Reporting Solutions', 'Workflow Optimization', 'Excel & Spreadsheet Automation', 'Financial System Support']
  }
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-white/60 backdrop-blur-md py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-navy-900"
          >
            Our <span className="text-techblue">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-medium"
          >
            Tailored financial solutions designed to scale with your business from startup to enterprise.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-24">
          {detailedServices.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={idx}
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className={`flex flex-col md:flex-row gap-12 items-center pt-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-techblue border border-gray-100 shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-navy-900">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-techblue mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden relative shadow-xl shadow-gray-200/50">
                   <div className="absolute inset-0 bg-gradient-to-tr from-techblue/10 to-transparent" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 text-navy-900">
                     {service.icon}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-12">
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-navy-900">Not sure which services you need?</h2>
          <p className="text-lg text-navy-800 mb-8 max-w-2xl mx-auto">Let's discuss your current financial situation and build a custom package tailored to your goals.</p>
          <Link to="/contact" className="inline-block bg-techblue text-navy-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:bg-techblue-hover transition-all">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
