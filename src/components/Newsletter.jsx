import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaChild, FaStar, FaShoePrints, FaSmile } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Colorful decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl"></div>
      
      {/* Floating shoe prints */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <FaShoePrints size={40} className="text-accent-yellow" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 animate-float-delayed">
        <FaShoePrints size={35} className="text-accent-pink" />
      </div>
      
      <div className="container-custom mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-accent-yellow to-accent-teal p-4 rounded-full shadow-lg animate-bounce-slow">
            <FaBook size={32} className="text-primary" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Join the Two-Shoes Learning Adventure!
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Get updates on new releases, teaching resources, and free figurative language activities for your classroom.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-accent-teal rounded-full flex items-center justify-center text-white text-sm shadow-md">
            👟
          </div>
          <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center text-white text-sm shadow-md">
            👞
          </div>
          <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center text-dark text-sm shadow-md">
            👠
          </div>
          <div className="w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center text-white text-sm shadow-md">
            👢
          </div>
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm shadow-md">
            👡
          </div>
        </div>
        
        {/* Fixed: Email in one line - icon and text on same line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2">
            <FaEnvelope size={14} className="text-accent-yellow" />
            <span className="text-sm text-white/90">{authorData.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-accent-yellow bg-white placeholder:text-dark/40"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-accent-yellow to-secondary hover:from-accent-yellow/90 hover:to-secondary/90 text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg">
            <FaPaperPlane size={18} />
            Subscribe Now
          </button>
        </form>

        {submitted && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 inline-block mx-auto animate-pulse">
            <p className="text-accent-yellow font-semibold flex items-center gap-2">
              <FaSmile size={18} />
              Thank you for subscribing! 📚 Get ready for fun learning with Two-Shoes!
              <FaSmile size={18} />
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mt-6 text-white/70 text-sm flex-wrap">
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaChild size={12} className="text-accent-yellow" />
            <span>Free resources for educators</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaStar size={12} className="text-accent-yellow" />
            <span>Classroom activities</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaBook size={12} className="text-accent-yellow" />
            <span>Book updates</span>
          </div>
        </div>
        
        <p className="text-white/40 text-xs mt-6">
          No spam ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;