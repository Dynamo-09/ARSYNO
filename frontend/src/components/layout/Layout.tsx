import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-900 relative">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
