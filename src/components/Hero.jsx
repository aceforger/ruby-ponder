import React from 'react';
import { FaArrowRight, FaChevronRight, FaBook, FaStar } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-cream via-accent/10 to-cream">
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <FaStar size={16} />
              <span>Making Language Fun for Young Readers</span>
              <FaStar size={16} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-primary-light text-2xl md:text-3xl mt-2">Children's Author & Educator</span>
            </h1>
            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
              Discover the magic of figurative language through engaging stories that help young readers grow their vocabulary and love for reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Two-Shoe And Me
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline flex items-center justify-center gap-2">
                Learn More
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-accent/20 to-primary/10 p-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop"
                  alt="Ruby Ponder - Children's Author"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg">
                  <FaBook size={24} />
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