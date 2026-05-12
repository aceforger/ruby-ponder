import React from 'react';
import { FaArrowRight, FaChevronRight, FaBook, FaStar, FaChild, FaShoePrints } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white">
      {/* Colorful decorative elements inspired by shoes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-teal/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-pink/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-accent-yellow/5 via-transparent to-accent-purple/5"></div>
      
      {/* Floating shoe icons */}
      <div className="absolute top-40 left-20 opacity-20 animate-bounce">
        <FaShoePrints size={60} className="text-accent-teal" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20 animate-bounce delay-1000">
        <FaShoePrints size={50} className="text-accent-pink" />
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/30 rounded-full text-primary font-semibold text-sm mb-6">
              <FaStar size={14} className="text-secondary" />
              <span>Two-Shoes Learning Adventure</span>
              <FaStar size={14} className="text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-primary-light text-2xl md:text-3xl mt-2">Children's Author & Educator</span>
            </h1>
            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
              Discover the magic of figurative language through engaging stories that help young readers grow their vocabulary and love for reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="btn-secondary flex items-center justify-center gap-2 group">
                Explore Two-Shoes And Me
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline flex items-center justify-center gap-2">
                Learn More
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-accent-teal/10 via-accent-pink/10 to-accent-yellow/10 p-6 border-2 border-accent-yellow/50">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop"
                  alt="Ruby Ponder - Children's Author"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-full p-3 shadow-lg">
                  <FaChild size={24} />
                </div>
              </div>
              
              {/* Colorful shoe decorations */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-accent-teal rounded-full flex items-center justify-center text-white text-sm shadow-md">
                  👟
                </div>
                <div className="w-10 h-10 bg-accent-pink rounded-full flex items-center justify-center text-white text-sm shadow-md">
                  👞
                </div>
                <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center text-dark text-sm shadow-md">
                  👠
                </div>
                <div className="w-10 h-10 bg-accent-purple rounded-full flex items-center justify-center text-white text-sm shadow-md">
                  👢
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;