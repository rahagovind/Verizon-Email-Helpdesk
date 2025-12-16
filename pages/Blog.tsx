import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';
import SEO from '../components/SEO';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Reset Your Verizon Email Password Safely",
    excerpt: "Forgot your password? Follow these step-by-step instructions to securely recover your account and prevent future lockouts.",
    date: "October 15, 2023",
    category: "Security",
    imageUrl: "https://picsum.photos/600/400?tech"
  },
  {
    id: 2,
    title: "Why Is My Verizon Email Not Syncing on iPhone?",
    excerpt: "A guide to troubleshooting common synchronization errors between Verizon servers and iOS Mail apps. Fix connection timeouts today.",
    date: "November 2, 2023",
    category: "Mobile",
    imageUrl: "https://picsum.photos/600/400?phone"
  },
  {
    id: 3,
    title: "Understanding IMAP vs POP3 Settings",
    excerpt: "Which server setting should you use? We break down the differences and help you configure your email client for optimal performance.",
    date: "November 20, 2023",
    category: "Technical",
    imageUrl: "https://picsum.photos/600/400?server"
  },
  {
    id: 4,
    title: "Spotting Phishing Attempts in Your Inbox",
    excerpt: "Learn how to identify fake emails claiming to be from Verizon support. Protect your personal information from scammers.",
    date: "December 5, 2023",
    category: "Security",
    imageUrl: "https://picsum.photos/600/400?security"
  },
  {
    id: 5,
    title: "Fixing 'Cannot Verify Server Identity' Errors",
    excerpt: "This annoying error popup can stop your email in its tracks. Here is how to fix SSL certificate issues on your device.",
    date: "January 10, 2024",
    category: "Troubleshooting",
    imageUrl: "https://picsum.photos/600/400?code"
  },
  {
    id: 6,
    title: "Organizing Your Inbox with Filters",
    excerpt: "Is your inbox a mess? Learn how to set up automatic folders and spam filters to keep your digital life organized.",
    date: "January 28, 2024",
    category: "Productivity",
    imageUrl: "https://picsum.photos/600/400?work"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={`${COMPANY_NAME} Blog - Tips for Email Troubleshooting & Support - Call ${PHONE_NUMBER}`}
        description={`Stay informed with troubleshooting tips and guides for Verizon email issues. For immediate support, call ${PHONE_NUMBER}.`}
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tips, tricks, and guides to help you manage your email experience.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-medium">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <User size={12} /> Support Team
                  </span>
                  <a href={PHONE_LINK} className="text-red-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Get Help <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need personalized assistance?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            While these guides are helpful, some issues require a professional touch. Don't waste hours troubleshooting alone.
          </p>
          <a href={PHONE_LINK} className="bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-lg">
            Call Support: {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;