import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaStar, FaShoePrints, FaChild, FaCrown, FaMagic } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Deep purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent-purple"></div>
      
      {/* Depth effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary-dark to-secondary"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent-purple/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-10 left-5 opacity-20 animate-float-slow">
        <FaMagic size={30} className="text-secondary" />
      </div>
      <div className="absolute bottom-10 right-5 opacity-20 animate-float-delayed">
        <FaCrown size={25} className="text-secondary" />
      </div>
      <div className="absolute top-1/4 right-10 opacity-15 animate-pulse-slow">
        <FaStar size={20} className="text-secondary" />
      </div>
      
      {/* Floating shoe prints */}
      <div className="absolute bottom-1/4 left-5 opacity-10 animate-float">
        <FaShoePrints size={50} className="text-secondary" />
      </div>
      <div className="absolute top-1/3 right-8 opacity-10 animate-float-delayed">
        <FaShoePrints size={40} className="text-secondary" />
      </div>
      
      <div className="container-custom mx-auto relative z-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo section with depth */}
          <div className="text-center md:text-left">
            <div className="relative inline-flex items-center gap-2 justify-center md:justify-start mb-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-secondary to-secondary-dark p-2 rounded-full">
                  <FaBook className="text-primary-dark" size={22} />
                </div>
                <FaStar className="text-secondary absolute -top-2 -right-2 text-xs animate-pulse" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">Ruby Ponder</h3>
            </div>
            <p className="text-white/80 text-sm">Children's Author | Educator | Two-Shoes Creator</p>
            
            {/* Shoe emoji row with depth */}
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
              {[
                { emoji: "👟", color: "primary" },
                { emoji: "👞", color: "secondary" },
                { emoji: "👠", color: "accent-purple" },
                { emoji: "👢", color: "primary" }
              ].map((shoe, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
                  <div className={`relative w-8 h-8 bg-gradient-to-br from-${shoe.color} to-${shoe.color}-dark rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <span className="text-sm">{shoe.emoji}</span>
                  </div>
                </div>
              ))}
              <p className="text-white/60 text-xs ml-1">"Two-Shoes And Me"</p>
            </div>
          </div>
          
          {/* Navigation links with glass effect */}
          <div className="flex gap-8 text-sm">
            {['Home', 'About', 'Book', 'Contact'].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white/80 hover:text-secondary transition-all duration-300 hover:scale-110 transform relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Social icons with depth */}
          <div className="flex gap-5">
            {[
              { icon: FaTwitter, color: "secondary", hover: "secondary" },
              { icon: FaInstagram, color: "secondary", hover: "secondary" },
              { icon: FaFacebookF, color: "secondary", hover: "secondary" },
              { icon: FaYoutube, color: "secondary", hover: "secondary" },
              { icon: FaEnvelope, color: "secondary", hover: "secondary" }
            ].map((item, idx) => (
              <a 
                key={idx}
                href={idx === 4 ? `mailto:${authorData.email}` : "#"} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-secondary/20 transition-all duration-300 transform group-hover:scale-110">
                  <item.icon size={18} className="text-secondary group-hover:text-secondary-dark transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Middle decorative row with glass card */}
        <div className="my-8 p-4 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white/70 text-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaShoePrints size={12} className="text-secondary" />
              </div>
              <span>Figurative Language Learning</span>
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaShoePrints size={12} className="text-secondary" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaChild size={12} className="text-secondary" />
              </div>
              <span>© 2025 Ruby Ponder. All rights reserved.</span>
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaChild size={12} className="text-secondary" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaStar size={10} className="text-secondary" />
              </div>
              <span>Elementary Level Readers (Ages 6-10)</span>
              <div className="bg-secondary/20 p-1.5 rounded-full">
                <FaStar size={10} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer with heart animation */}
        <div className="text-center text-white/50 text-xs">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="animate-pulse">
              <FaHeart size={12} className="text-secondary" />
            </div>
            <span>Making language fun for young readers with Two-Shoes!</span>
            <div className="animate-pulse delay-150">
              <FaHeart size={12} className="text-secondary" />
            </div>
          </div>
          <p className="mt-2">
            Illustrated by <span className="text-secondary font-semibold">Cornice "DaArtist" Butler</span>
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .delay-150 { animation-delay: 0.15s; }
      `}</style>
    </footer>
  );
};

export default Footer;