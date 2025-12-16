import React from 'react';
import { Users, Target, Shield, Clock } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={`About ${COMPANY_NAME} - Reliable USA Support - Call ${PHONE_NUMBER}`}
        description={`Learn about ${COMPANY_NAME} services, offering timely support for login issues, account recovery, and more. Call ${PHONE_NUMBER} for assistance.`}
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your trusted partner for resolving complex email issues with speed and expertise.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At {COMPANY_NAME}, our mission is simple: to provide accessible, high-quality technical support for users struggling with email technology. We understand how critical email is for communication, business, and personal life. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We bridge the gap between complex technical problems and seamless user experiences. Our goal is to minimize downtime and frustration by offering immediate, effective solutions via our dedicated helpline.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/300/300?team1" alt="Support Agent" className="rounded-lg shadow-md" />
                <img src="https://picsum.photos/300/300?team2" alt="Technical Meeting" className="rounded-lg shadow-md mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Customers Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly trained technicians specializing in email protocols and security.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">We value your time. Our goal is to resolve issues on the first call.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-gray-600">Your privacy and data security are our top priorities during support.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Results Driven</h3>
              <p className="text-gray-600">We don't just troubleshoot; we aim for permanent solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to get your email fixed?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team is waiting for your call.</p>
          <a href={PHONE_LINK} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-lg">
            Call Support: {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;