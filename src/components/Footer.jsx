import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaStar, FaShoePrints, FaChild } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-primary-dark/95 text-white/80 py-12 relative overflow-hidden">
      {/* Colorful decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-accent-pink via-accent-yellow to-secondary"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent-teal/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-accent-pink/5 rounded-full blur-2xl"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaBook className="text-accent-yellow" size={22} />
                <FaStar className="text-secondary absolute -top-2 -right-2 text-xs" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Ruby Ponder</h3>
            </div>
            <p className="text-sm text-white/70">Children's Author | Educator | Two-Shoes Creator</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center text-white text-xs">
                👟
              </div>
              <div className="w-6 h-6 bg-accent-pink rounded-full flex items-center justify-center text-white text-xs">
                👞
              </div>
              <div className="w-6 h-6 bg-accent-yellow rounded-full flex items-center justify-center text-dark text-xs">
                👠
              </div>
              <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center text-white text-xs">
                👢
              </div>
              <p className="text-xs text-white/50 ml-1">"Two-Shoes And Me"</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-accent-yellow transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-accent-yellow transition-colors duration-300">About</a>
            <a href="#book" className="hover:text-accent-yellow transition-colors duration-300">Book</a>
            <a href="#contact" className="hover:text-accent-yellow transition-colors duration-300">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent-yellow transition-all duration-300 hover:scale-110 transform"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-accent-pink transition-all duration-300 hover:scale-110 transform"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-accent-teal transition-all duration-300 hover:scale-110 transform"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-secondary transition-all duration-300 hover:scale-110 transform"><FaYoutube size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-accent-yellow transition-all duration-300 hover:scale-110 transform"><FaEnvelope size={18} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <div className="flex items-center justify-center gap-2">
            <FaShoePrints size={12} className="text-accent-yellow" />
            <span>Figurative Language Learning</span>
            <FaShoePrints size={12} className="text-accent-pink" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaChild size={12} className="text-accent-teal" />
            <span>© 2025 Ruby Ponder. All rights reserved.</span>
            <FaChild size={12} className="text-accent-teal" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaStar size={10} className="text-accent-yellow" />
            <span>Elementary Level Readers (Ages 6-10)</span>
            <FaStar size={10} className="text-accent-yellow" />
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-white/30">
          <p className="flex items-center justify-center gap-1">
            <FaHeart size={10} className="text-accent-pink" /> 
            Making language fun for young readers with Two-Shoes!
            <FaHeart size={10} className="text-accent-teal" />
          </p>
          <p className="mt-1">
            Illustrated by <span className="text-accent-yellow">Cornice "DaArtist" Butler</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;