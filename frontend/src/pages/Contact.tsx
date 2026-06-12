import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { submitContact } from '../services/api';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  serviceOfInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContact(data);
      toast.success('Your message has been sent successfully!');
      reset();
    } catch (error: any) {
      toast.error(error.message || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="w-full pb-24">
      <Toaster position="top-right" toastOptions={{ className: 'bg-white text-navy-900 border border-gray-200' }} />
      
      <section className="bg-white/60 backdrop-blur-md py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-navy-900"
          >
            Get in <span className="text-techblue">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-medium"
          >
            Let's discuss how ARSYNO can elevate your financial operations.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-navy-900">Contact Information</h2>
              <p className="text-gray-600 font-medium">Our team is ready to answer your questions and set up a consultation.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-xl border border-gray-200 text-techblue mr-4 shadow-sm shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-navy-900">Email Us</h3>
                  <p className="text-gray-600">info@arsynogroup.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-xl border border-gray-200 text-techblue mr-4 shadow-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-navy-900">Call Us</h3>
                  <p className="text-gray-600">8910339068</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded-xl border border-gray-200 text-techblue mr-4 shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-lg text-navy-900">Office</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Plot No. 1, Lovelock Street,<br/>
                    Behind Punjab Club, Ballygunge,<br/>
                    Kolkata, WestBengal, 700019
                  </p>
                  <div className="w-full mt-6">
                    <iframe 
                      src="https://maps.google.com/maps?q=Plot%20No.%201,%20Lovelock%20Street,%20Ballygunge,%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      className="w-full h-64 md:h-80 rounded-xl shadow-md border border-gray-200 mb-4"
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ARSYNO Office Location"
                    ></iframe>
                    <a 
                      href="https://maps.google.com/?q=Plot+No.+1,+Lovelock+Street,+Ballygunge,+Kolkata,+West+Bengal+700019" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-techblue hover:bg-techblue-hover text-white text-center font-bold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                    >
                      Click here for larger map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-techblue/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 z-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Name *</label>
                  <input 
                    {...register('name')} 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors shadow-sm"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Company Name</label>
                  <input 
                    {...register('companyName')} 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors shadow-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Email Address *</label>
                  <input 
                    {...register('email')} 
                    type="email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors shadow-sm"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Phone Number</label>
                  <input 
                    {...register('phone')} 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Service of Interest *</label>
                <select 
                  {...register('serviceOfInterest')}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors shadow-sm"
                >
                  <option value="">Select a service...</option>
                  <option value="Virtual CFO">Virtual CFO</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Financial Modeling">Financial Modeling</option>
                  <option value="Tax Strategy">Tax Strategy</option>
                  <option value="Reporting & KPIs">Reporting & KPIs</option>
                  <option value="Payroll & HR">Payroll & HR</option>
                  <option value="Other">Other</option>
                </select>
                {errors.serviceOfInterest && <p className="text-red-500 text-sm mt-1 font-medium">{errors.serviceOfInterest.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Message *</label>
                <textarea 
                  {...register('message')} 
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors resize-none shadow-sm"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1 font-medium">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-techblue hover:bg-techblue-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
