import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_LINK, NAV_LINKS } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1"><ShieldCheck size={14} /> Secure & Reliable Support</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> USA-Based Support Team</span>
          </div>
          <a href={PHONE_LINK} className="font-bold hover:text-red-400 transition-colors">
            Call for Immediate Help: {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">
                  V
                </div>
                <div>
                  <h1 className="text-xl font-bold leading-none tracking-tight">Email Helpdesk</h1>
                  <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Independent Support</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    location.pathname === link.path ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={PHONE_LINK}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Phone size={18} />
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-4 rounded-md text-base font-medium border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={PHONE_LINK}
                className="block w-full text-center bg-red-600 text-white px-4 py-4 rounded-md font-bold mt-4"
              >
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex justify-between items-center gap-4">
        <div className="text-sm font-medium text-gray-600">Need Help?</div>
        <a href={PHONE_LINK} className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold text-center flex justify-center items-center gap-2 shadow-md active:scale-95 transition-transform">
           <Phone size={20} /> Call Support
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h3>
              <p className="text-sm leading-relaxed mb-4">
                We provide expert third-party support for Verizon email issues. Our dedicated team is available to assist with login problems, configuration, and security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-red-400 transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-red-400">Password Recovery</Link></li>
                <li><Link to="/services" className="hover:text-red-400">Login Issues</Link></li>
                <li><Link to="/services" className="hover:text-red-400">Hacked Account</Link></li>
                <li><Link to="/services" className="hover:text-red-400">Server Configuration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-red-500 mt-0.5" />
                  <a href={PHONE_LINK} className="font-bold text-white hover:text-red-400">{PHONE_NUMBER}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-red-500 mt-0.5" />
                  <span>support@verizonemailhelp.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-red-500 mt-0.5" />
                  <span>New York, NY, USA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link to="/about-us" className="hover:text-white">Privacy Policy</Link>
              <Link to="/services" className="hover:text-white">Sitemap</Link>
            </div>
            <p className="mt-4 text-slate-500 italic">Disclaimer: We are an independent third-party support provider and are not affiliated with Verizon Communications Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;