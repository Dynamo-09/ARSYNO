import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter block mb-4">
              ARSYNO<span className="text-techblue">.</span>
            </Link>
            <p className="text-sm max-w-md">
              Modern financial solutions for forward-thinking companies. We provide Virtual CFO, Bookkeeping, and strategic financial services powered by technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-techblue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-techblue transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-techblue transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-techblue transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@arsyno.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Boulevard, Suite 400<br/>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ARSYNO Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
