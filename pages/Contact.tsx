import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={`Contact ${COMPANY_NAME} - Support for Email Issues - Call ${PHONE_NUMBER}`}
        description={`Reach ${COMPANY_NAME} for all your support needs. Call ${PHONE_NUMBER} or use our contact form to resolve email issues and get expert assistance.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We are here to help you 24/7. Reach out for immediate assistance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg text-red-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone Support</h3>
                  <p className="text-gray-500 mb-1">Immediate assistance for urgent issues.</p>
                  <a href={PHONE_LINK} className="text-2xl font-bold text-red-600 hover:text-red-700 block">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Support</h3>
                  <p className="text-gray-500 mb-1">Send us your queries anytime.</p>
                  <a href="mailto:support@verizonemailhelp.com" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                    support@verizonemailhelp.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
                  <p className="text-gray-700">Monday - Sunday: 24 Hours</p>
                  <p className="text-gray-500 text-sm">We are available on holidays.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Location</h3>
                  <p className="text-gray-700">Headquarters based in USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. A support agent will review your message and call you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-green-700 underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    placeholder="Please describe your email issue..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by our support team.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;