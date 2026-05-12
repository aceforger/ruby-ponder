import React from 'react';
import { FaArrowRight, FaChevronRight, FaBook, FaStar, FaChild, FaShoePrints, FaPaintBrush, FaPalette } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white via-purple-bg/30 to-white">
      {/* Purple and yellow decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-secondary/5 via-transparent to-accent-purple/5"></div>
      
      {/* Paint splash decorations - More visible */}
      <div className="absolute top-10 left-5 w-32 h-32 animate-paint-splash">
  {/* Brighter, more visible paint splashes - no blur, solid colors */}
    <div className="absolute w-12 h-12 bg-yellow-400 rounded-full opacity-90 shadow-lg"></div>
    <div className="absolute w-9 h-9 bg-purple-600 rounded-full opacity-85 shadow-lg top-5 left-8"></div>
    <div className="absolute w-7 h-7 bg-orange-500 rounded-full opacity-90 shadow-lg top-10 left-3"></div>
    <div className="absolute w-5 h-5 bg-yellow-500 rounded-full opacity-95 shadow-md top-3 left-14"></div>
    {/* Small bright accent dots */}
    <div className="absolute w-3 h-3 bg-pink-500 rounded-full top-1 left-6"></div>
    <div className="absolute w-2 h-2 bg-white rounded-full top-7 left-10"></div>
    </div>

    <div className="absolute top-1/4 left-10 w-28 h-28 animate-paint-splash-delayed">
    <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-85 shadow-lg"></div>
    <div className="absolute w-11 h-11 bg-yellow-400 rounded-full opacity-90 shadow-lg top-5 left-7"></div>
    <div className="absolute w-8 h-8 bg-orange-500 rounded-full opacity-85 shadow-md top-11 left-2"></div>
    <div className="absolute w-4 h-4 bg-pink-500 rounded-full top-3 left-12"></div>
    <div className="absolute w-3 h-3 bg-white rounded-full top-14 left-8"></div>
    </div>

    <div className="absolute bottom-1/3 left-8 w-28 h-28 animate-paint-splash-slow">
    <div className="absolute w-14 h-14 bg-yellow-500 rounded-full opacity-85 shadow-lg"></div>
    <div className="absolute w-10 h-10 bg-purple-600 rounded-full opacity-90 shadow-lg top-4 left-6"></div>
    <div className="absolute w-6 h-6 bg-orange-500 rounded-full opacity-95 shadow-md top-9 left-1"></div>
    <div className="absolute w-4 h-4 bg-pink-500 rounded-full top-13 left-10"></div>
    <div className="absolute w-3 h-3 bg-white rounded-full top-6 left-8"></div>
    <div className="absolute w-5 h-5 bg-yellow-300 rounded-full top-2 left-3"></div>
    </div>
      
      {/* Large paint splatter background */}
      <div className="absolute top-20 left-1/4 w-40 h-40 opacity-30">
        <div className="absolute w-16 h-16 bg-secondary/40 rounded-full blur-xl"></div>
        <div className="absolute w-12 h-12 bg-primary/30 rounded-full blur-xl top-5 left-10"></div>
        <div className="absolute w-8 h-8 bg-accent-purple/30 rounded-full blur-xl top-12 left-4"></div>
      </div>
      
      {/* Floating shoe prints */}
      <div className="absolute top-40 left-20 opacity-20 animate-float">
        <FaShoePrints size={60} className="text-secondary" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20 animate-float-delayed">
        <FaShoePrints size={50} className="text-primary" />
      </div>
      
      {/* Paint brush floating */}
      <div className="absolute top-1/3 right-10 opacity-30 animate-float">
        <FaPaintBrush size={40} className="text-accent-purple" />
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left relative">
            {/* Paint splash effects around the text content - More visible */}
            <div className="absolute -top-12 -left-12 w-40 h-40 pointer-events-none">
              <div className="absolute w-10 h-10 bg-secondary/60 rounded-full blur-md animate-splash-1"></div>
              <div className="absolute w-7 h-7 bg-primary/50 rounded-full blur-md top-6 left-10 animate-splash-2"></div>
              <div className="absolute w-8 h-8 bg-accent-purple/50 rounded-full blur-md top-3 left-20 animate-splash-3"></div>
              <div className="absolute w-5 h-5 bg-secondary/70 rounded-full blur-sm top-14 left-15 animate-splash-4"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 pointer-events-none">
              <div className="absolute w-12 h-12 bg-primary/50 rounded-full blur-md animate-splash-5"></div>
              <div className="absolute w-8 h-8 bg-secondary/60 rounded-full blur-md top-8 left-14 animate-splash-6"></div>
              <div className="absolute w-6 h-6 bg-accent-purple/50 rounded-full blur-md top-16 left-6 animate-splash-7"></div>
              <div className="absolute w-4 h-4 bg-secondary/70 rounded-full blur-sm top-4 left-22 animate-splash-8"></div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-primary font-semibold text-sm mb-6 relative">
              <FaStar size={14} className="text-secondary" />
              <span>Two-Shoes Learning Adventure</span>
              <FaStar size={14} className="text-secondary" />
              {/* Paint dots on the badge - More visible */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent-purple rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-secondary rounded-full"></div>
              <div className="absolute top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight relative">
              {authorData.fullName}
              <span className="block text-accent-purple text-2xl md:text-3xl mt-2">Children's Author & Educator</span>
              {/* Paint splatter near the name - More visible */}
              <div className="absolute -top-8 right-10 w-28 h-28 pointer-events-none hidden md:block">
                <div className="absolute w-6 h-6 bg-secondary/60 rounded-full blur-md top-3 left-6 animate-pulse"></div>
                <div className="absolute w-5 h-5 bg-primary/50 rounded-full blur-md top-10 left-12 animate-pulse animation-delay-200"></div>
                <div className="absolute w-4 h-4 bg-accent-purple/50 rounded-full blur-md top-5 left-18 animate-pulse animation-delay-400"></div>
                <div className="absolute w-3 h-3 bg-secondary/70 rounded-full top-14 left-8 animate-pulse animation-delay-300"></div>
              </div>
            </h1>
            
            <p className="text-lg text-dark/70 mb-8 leading-relaxed relative">
              Discover the magic of figurative language through engaging stories that help young readers grow their vocabulary and love for reading.
              {/* Paint dots around paragraph - More visible */}
              <span className="absolute -left-4 top-1/2 w-3 h-3 bg-secondary/60 rounded-full"></span>
              <span className="absolute -right-3 bottom-2 w-4 h-4 bg-primary/50 rounded-full"></span>
              <span className="absolute left-1/2 -bottom-5 w-3 h-3 bg-accent-purple/50 rounded-full"></span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative">
              <a href="#book" className="btn-secondary flex items-center justify-center gap-2 group relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                Explore Two-Shoes And Me
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline flex items-center justify-center gap-2 group relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></span>
                Learn More
                <FaChevronRight size={18} />
              </a>
              
              {/* Paint splatter near buttons - More visible */}
              <div className="absolute -bottom-8 left-24 w-32 h-32 pointer-events-none">
                <div className="absolute w-5 h-5 bg-secondary/60 rounded-full blur-sm bottom-3 left-6 animate-pulse"></div>
                <div className="absolute w-4 h-4 bg-accent-purple/50 rounded-full blur-sm bottom-6 left-12 animate-pulse animation-delay-300"></div>
                <div className="absolute w-3 h-3 bg-primary/50 rounded-full blur-sm bottom-1 left-18 animate-pulse animation-delay-600"></div>
                <div className="absolute w-6 h-6 bg-secondary/40 rounded-full blur-md bottom-8 left-3 animate-pulse animation-delay-150"></div>
              </div>
            </div>
            
            {/* Additional paint splatter decorations - More visible */}
            <div className="absolute -left-16 top-1/2 w-32 h-32 pointer-events-none hidden lg:block">
              <div className="absolute w-8 h-8 bg-secondary/50 rounded-full blur-md animate-float"></div>
              <div className="absolute w-6 h-6 bg-primary/40 rounded-full blur-md top-10 left-4 animate-float animation-delay-200"></div>
              <div className="absolute w-7 h-7 bg-accent-purple/40 rounded-full blur-md top-5 left-14 animate-float animation-delay-400"></div>
              <div className="absolute w-4 h-4 bg-secondary/60 rounded-full blur-sm top-15 left-8 animate-float animation-delay-300"></div>
            </div>
            
            {/* Paint drip effect on the side */}
            <div className="absolute left-0 top-1/3 w-1 h-20 bg-gradient-to-b from-secondary to-primary opacity-40 rounded-full hidden lg:block"></div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-accent-purple/10 via-secondary/10 to-white p-6 border-2 border-secondary/50">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop"
                  alt="Ruby Ponder - Children's Author"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-primary-dark rounded-full p-3 shadow-lg">
                  <FaChild size={24} />
                </div>
              </div>
              
              {/* Colorful shoe decorations */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm shadow-md hover:scale-110 transition-transform">
                  👟
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md hover:scale-110 transition-transform">
                  👞
                </div>
                <div className="w-10 h-10 bg-accent-purple rounded-full flex items-center justify-center text-white text-sm shadow-md hover:scale-110 transition-transform">
                  👠
                </div>
              </div>
              
              {/* Paint splash on the image card - More visible */}
              <div className="absolute -top-4 -left-4 w-16 h-16">
                <div className="absolute w-5 h-5 bg-secondary/70 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute w-4 h-4 bg-primary/60 rounded-full blur-sm top-3 left-4 animate-pulse animation-delay-200"></div>
                <div className="absolute w-3 h-3 bg-accent-purple/60 rounded-full blur-sm top-7 left-1 animate-pulse animation-delay-400"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14">
                <div className="absolute w-4 h-4 bg-accent-purple/70 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute w-3 h-3 bg-secondary/60 rounded-full blur-sm top-4 left-3 animate-pulse animation-delay-300"></div>
                <div className="absolute w-5 h-5 bg-primary/50 rounded-full blur-md top-2 left-6 animate-pulse animation-delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes paint-splash {
          0% { transform: scale(0.8) translateY(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: scale(1.3) translateY(-15px); opacity: 0; }
        }
        @keyframes paint-splash-delayed {
          0% { transform: scale(0.5) translateY(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: scale(1.6) translateY(-20px); opacity: 0; }
        }
        @keyframes paint-splash-slow {
          0% { transform: scale(0.6) translateY(0); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: scale(1.4) translateY(-12px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
        .animate-paint-splash { animation: paint-splash 3s ease-in-out infinite; }
        .animate-paint-splash-delayed { animation: paint-splash-delayed 4s ease-in-out infinite; }
        .animate-paint-splash-slow { animation: paint-splash-slow 5s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-150 { animation-delay: 0.15s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        
        .animate-splash-1 { animation: paint-splash 2.5s ease-in-out infinite; }
        .animate-splash-2 { animation: paint-splash 3.2s ease-in-out infinite 0.3s; }
        .animate-splash-3 { animation: paint-splash 2.8s ease-in-out infinite 0.6s; }
        .animate-splash-4 { animation: paint-splash 3.5s ease-in-out infinite 0.9s; }
        .animate-splash-5 { animation: paint-splash 2.2s ease-in-out infinite 0.2s; }
        .animate-splash-6 { animation: paint-splash 3.8s ease-in-out infinite 0.5s; }
        .animate-splash-7 { animation: paint-splash 2.6s ease-in-out infinite 0.8s; }
        .animate-splash-8 { animation: paint-splash 3.1s ease-in-out infinite 1.1s; }
      `}</style>
    </section>
  );
};

export default Hero;