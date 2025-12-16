import React from 'react';
import { Phone, CheckCircle, AlertTriangle, Lock, RefreshCcw, Mail, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title={`${COMPANY_NAME} - Customer Support for Email Issues - Call ${PHONE_NUMBER}`}
        description={`Get expert support for Verizon email login issues, password recovery, spam filtering, and more. Call ${PHONE_NUMBER} for USA-based customer support.`}
      />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Trouble with your <span className="text-red-500">Verizon Email?</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              We provide fast, reliable, and secure support for login issues, password recovery, and server errors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={PHONE_LINK} 
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <Phone size={24} />
                Call {PHONE_NUMBER}
              </a>
              <a 
                href="#common-issues" 
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Common Issues
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">Available 24/7 • USA Based Experts • Secure</p>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-red-600 mb-2">98%</h3>
              <p className="text-gray-600 font-medium">Issue Resolution Rate</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-gray-100">
              <h3 className="text-4xl font-bold text-red-600 mb-2">15 min</h3>
              <p className="text-gray-600 font-medium">Average Response Time</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-gray-100">
              <h3 className="text-4xl font-bold text-red-600 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section id="common-issues" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Email Issues We Resolve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our technicians are trained to handle a wide variety of email problems. If you are experiencing any of these, call us immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Lock className="w-8 h-8 text-red-600" />, title: "Login & Password Issues", desc: "Cannot access your account? We help with password resets and recovery." },
              { icon: <RefreshCcw className="w-8 h-8 text-red-600" />, title: "Sync Problems", desc: "Emails not updating on your iPhone, Android, or Outlook? We fix sync errors." },
              { icon: <AlertTriangle className="w-8 h-8 text-red-600" />, title: "Server Errors", desc: "Fixing POP3, IMAP, and SMTP configuration errors quickly." },
              { icon: <Mail className="w-8 h-8 text-red-600" />, title: "Sending/Receiving Failures", desc: "Emails stuck in outbox or not arriving in your inbox? We investigate." },
              { icon: <ShieldCheck className="w-8 h-8 text-red-600" />, title: "Hacked Accounts", desc: "Suspicious activity? We help secure your compromised email account." },
              { icon: <AlertTriangle className="w-8 h-8 text-red-600" />, title: "Spam Filters", desc: "Too much junk mail or important emails going to spam? We configure filters." },
            ].map((issue, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {issue.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{issue.title}</h3>
                <p className="text-gray-600 mb-6">{issue.desc}</p>
                <a href={PHONE_LINK} className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-1">
                  Get Help Now &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Don't Let Email Issues Stop Your Day</h2>
          <p className="text-red-100 text-xl mb-8 max-w-3xl mx-auto">
            Our expert team is standing by to assist you with any Verizon email problem. Fast, friendly, and effective support is just a phone call away.
          </p>
          <a 
            href={PHONE_LINK} 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Call {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/600/400?office" 
                alt="Customer Support Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose {COMPANY_NAME}?</h2>
              <ul className="space-y-4">
                {[
                  "Dedicated team of email specialists.",
                  "Support for desktop, mobile, and tablet devices.",
                  "Step-by-step guidance for non-technical users.",
                  "Secure remote assistance capabilities.",
                  "Transparent pricing and clear communication."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="/about-us" className="text-red-600 font-bold hover:underline">Learn more about us &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;