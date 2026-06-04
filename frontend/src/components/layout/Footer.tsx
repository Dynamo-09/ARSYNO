import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import fbLogo from '../../assets/FB.png';
import instaLogo from '../../assets/Insta.png';
import linkedinLogo from '../../assets/linkedin.png';

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
            <ul className="space-y-2 text-sm mb-6">
              <li><Link to="/about" className="hover:text-techblue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-techblue transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-techblue transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-techblue transition-colors">Blog</Link></li>
            </ul>
            <div className="flex space-x-4 items-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
                <img src={fbLogo} alt="Facebook" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
                <img src={instaLogo} alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
                <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-techblue" />
                <span>info@arsynogroup.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-techblue" />
                <span>8910339068</span>
              </li>
              <li className="flex items-start space-x-3 leading-relaxed">
                <MapPin className="w-5 h-5 text-techblue shrink-0 mt-0.5" />
                <span>Plot No. 1, Lovelock Street,<br/>Behind Punjab Club, Ballygunge,<br/>Kolkata, WestBengal, 700019</span>
              </li>
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
