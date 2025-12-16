import React from 'react';
import { Key, RefreshCw, MailX, Server, Smartphone, ShieldAlert } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';

const servicesList = [
  {
    id: "login-help",
    title: "Account Login Help",
    desc: "Struggling to sign in? We assist with forgotten usernames, account lockouts, and browser compatibility issues preventing access to your Verizon email.",
    icon: <Key size={40} />
  },
  {
    id: "password-recovery",
    title: "Password Recovery",
    desc: "We guide you through the secure process of resetting your password, setting up strong credentials, and updating recovery information.",
    icon: <ShieldAlert size={40} />
  },
  {
    id: "email-sync",
    title: "Email Synchronization Support",
    desc: "Ensure your emails appear on all your devices. We fix sync issues between Outlook, iPhone Mail, Android, and webmail interfaces.",
    icon: <RefreshCw size={40} />
  },
  {
    id: "spam-filter",
    title: "Spam and Junk Mail Filtering",
    desc: "Stop drowning in spam. We help configure filters to keep your inbox clean while ensuring important emails don't get blocked.",
    icon: <MailX size={40} />
  },
  {
    id: "server-errors",
    title: "Server Error Troubleshooting",
    desc: "Resolving technical errors like 'Cannot Verify Server Identity', SMTP connection failures, and POP3/IMAP misconfigurations.",
    icon: <Server size={40} />
  },
  {
    id: "mobile-setup",
    title: "Mobile Device Setup",
    desc: "Complete assistance setting up your Verizon email on new smartphones, tablets, and third-party email applications.",
    icon: <Smartphone size={40} />
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${COMPANY_NAME} Services - Account Issues & Support - Call ${PHONE_NUMBER}`}
        description={`Discover the services offered by ${COMPANY_NAME}, including password recovery, troubleshooting, and email sync issues. Reach out to us at ${PHONE_NUMBER}.`}
      />

      {/* Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Comprehensive solutions for every email challenge.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="text-red-600 mb-6 bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-gray-100">
                   <a href={PHONE_LINK} className="w-full block text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                     Get Support: {PHONE_NUMBER}
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find your issue listed?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Email problems can be complex and unique. Give us a call, and our technicians will diagnose the specific issue you are facing.
          </p>
          <a href={PHONE_LINK} className="text-red-600 font-bold text-2xl hover:text-red-700">
            Call Us Now at {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;