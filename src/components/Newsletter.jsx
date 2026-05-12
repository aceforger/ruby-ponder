import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaChild, FaStar, FaShoePrints, FaSmile, FaMagic, FaCrown } from 'react-icons/fa';
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Purple gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent-purple"></div>
      
      {/* Glow effects for depth */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float-slow">
        <FaMagic size={40} className="text-secondary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float-delayed">
        <FaCrown size={35} className="text-secondary" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-pulse-slow">
        <FaStar size={25} className="text-secondary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-pulse-slow">
        <FaStar size={20} className="text-secondary" />
      </div>
      
      {/* Floating shoe prints */}
      <div className="absolute top-60 left-5 opacity-15 animate-float">
        <FaShoePrints size={45} className="text-secondary" />
      </div>
      <div className="absolute bottom-60 right-5 opacity-15 animate-float-delayed">
        <FaShoePrints size={40} className="text-secondary" />
      </div>
      
      <div className="container-custom mx-auto text-center relative z-10">
        {/* Shiny badge */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-secondary to-secondary-dark p-5 rounded-full shadow-2xl animate-bounce-slow">
              <FaBook size={34} className="text-primary-dark" />
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
          Join the Two-Shoes Learning Adventure!
        </h2>
        <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
          Get updates on new releases, teaching resources, and free figurative language activities for your classroom.
        </p>
        
        {/* Colorful shoe emojis with depth */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center text-white text-sm shadow-xl transform group-hover:scale-110 transition-transform">
              👟
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-primary-dark text-sm shadow-xl transform group-hover:scale-110 transition-transform">
              👞
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-purple rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-accent-purple to-primary rounded-full flex items-center justify-center text-white text-sm shadow-xl transform group-hover:scale-110 transition-transform">
              👠
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center text-white text-sm shadow-xl transform group-hover:scale-110 transition-transform">
              👢
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center text-primary-dark text-sm shadow-xl transform group-hover:scale-110 transition-transform">
              👡
            </div>
          </div>
        </div>
        
        {/* Email display with glassmorphism effect */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-full inline-flex items-center gap-3 shadow-xl border border-white/20">
            <div className="bg-secondary/20 p-2 rounded-full">
              <FaEnvelope size={16} className="text-secondary" />
            </div>
            <span className="text-white font-medium">{authorData.email}</span>
          </div>
        </div>

        {/* Form with depth */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="relative w-full px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-secondary bg-white shadow-lg placeholder:text-dark/40"
              required
            />
          </div>
          <button type="submit" className="relative group">
            <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-secondary to-secondary-dark text-primary-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform group-hover:-translate-y-0.5 shadow-xl">
              <FaPaperPlane size={18} />
              Subscribe Now
            </div>
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-white/20 backdrop-blur-md rounded-lg p-4 inline-block mx-auto animate-bounce border border-secondary/30 shadow-xl">
            <p className="text-secondary font-bold flex items-center gap-3">
              <FaSmile size={20} />
              Thank you for subscribing! 📚 Get ready for fun learning with Two-Shoes!
              <FaSmile size={20} />
            </p>
          </div>
        )}

        {/* Feature badges with depth */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {[
            { icon: FaChild, text: "Free resources for educators", color: "secondary" },
            { icon: FaStar, text: "Classroom activities", color: "secondary" },
            { icon: FaBook, text: "Book updates", color: "secondary" }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/20 hover:bg-white/20 transition-all">
                <item.icon size={14} className="text-secondary" />
                <span className="text-white text-sm">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-white/50 text-xs mt-8">
          No spam ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Newsletter;