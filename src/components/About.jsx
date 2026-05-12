import React from 'react';
import { FaHeart, FaBook, FaGraduationCap, FaStar, FaLightbulb, FaSmile, FaChalkboardTeacher, FaMagic, FaCrown, FaShoePrints, FaQuoteLeft } from 'react-icons/fa';
import { GiTeacher, GiBookshelf, GiOpenBook } from 'react-icons/gi';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-purple-bg/20 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-secondary/5 via-transparent to-primary/5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float-slow">
        <FaMagic size={30} className="text-secondary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float-delayed">
        <FaCrown size={25} className="text-primary" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-pulse-slow">
        <FaStar size={20} className="text-secondary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-pulse-slow">
        <FaStar size={15} className="text-primary" />
      </div>
      
      {/* Floating shoe prints */}
      <div className="absolute top-60 left-5 opacity-15 animate-float">
        <FaShoePrints size={40} className="text-secondary" />
      </div>
      <div className="absolute bottom-60 right-5 opacity-15 animate-float-delayed">
        <FaShoePrints size={35} className="text-primary" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Animated title badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4 animate-pulse-slow">
            <FaStar size={14} className="text-secondary" />
            <span className="text-primary-dark font-semibold text-sm">Meet the Author</span>
            <FaStar size={14} className="text-secondary" />
          </div>
          <h2 className="section-title text-primary">About Ruby Ponder</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6 rounded-full"></div>
          <p className="section-subtitle max-w-2xl mx-auto text-dark/60">
            Dedicated to helping young readers discover the joy of language through stories that inspire and educate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Author Bio Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border-l-8 border-secondary hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-secondary to-secondary-dark p-3 rounded-full">
                    <GiOpenBook size={28} className="text-primary-dark" />
                  </div>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-secondary to-transparent"></div>
                <FaQuoteLeft size={24} className="text-secondary/40" />
              </div>
              
              <p className="text-dark/80 leading-relaxed text-lg mb-6">
                {authorData.authorBio.fullBio}
              </p>
              
              <div className="mt-6 pt-4 border-t-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-transparent p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <FaLightbulb size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-semibold italic text-lg">
                      "{authorData.authorBio.mission}"
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <FaHeart size={12} className="text-secondary animate-pulse" />
                      <span className="text-xs text-dark/50">Ruby's Promise to Young Readers</span>
                      <FaHeart size={12} className="text-secondary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative shoe prints at bottom */}
              <div className="flex justify-center gap-1 mt-6 opacity-30">
                <FaShoePrints size={16} className="text-secondary" />
                <FaShoePrints size={16} className="text-primary" />
                <FaShoePrints size={16} className="text-secondary" />
              </div>
            </div>
          </div>

          {/* Right Column - Educational Focus & Promise */}
          <div className="space-y-6">
            {/* Educational Focus Card */}
            <div className="relative group hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-secondary/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-primary flex items-center gap-2">
                    <div className="bg-gradient-to-br from-secondary to-secondary-dark p-2 rounded-lg">
                      <FaGraduationCap size={20} className="text-primary-dark" />
                    </div>
                    Educational Focus
                  </h3>
                  <div className="bg-secondary/10 px-2 py-1 rounded-full">
                    <span className="text-xs text-primary">⭐ Featured</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {authorData.authorBio.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-purple-bg to-white rounded-lg p-3 transform hover:translate-x-1 transition-all duration-300 border-l-4 border-secondary">
                      <div className="bg-secondary/10 p-2 rounded-full">
                        <GiTeacher size={16} className="text-secondary" />
                      </div>
                      <span className="text-dark/70 font-medium">{specialty}</span>
                      <FaStar size={12} className="text-secondary ml-auto opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Author's Promise Card with Depth */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Background decorative pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary rounded-full blur-md"></div>
                    <div className="relative bg-secondary p-2 rounded-full">
                      <FaLightbulb size={24} className="text-primary-dark" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary">The Author's Promise</h3>
                  <FaCrown size={18} className="text-secondary ml-auto" />
                </div>
                
                <p className="text-white/95 leading-relaxed text-base relative z-10">
                  Every book is crafted to engage young minds, build vocabulary, and make learning figurative language a fun adventure.
                </p>
                
                <div className="flex items-center justify-center gap-3 mt-5 pt-3 border-t border-white/20 relative z-10">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <FaSmile size={14} className="text-secondary" />
                    <span className="text-sm text-white/90">Elementary Level Readers</span>
                    <FaSmile size={14} className="text-secondary" />
                  </div>
                  <div className="flex items-center gap-1">
                    <GiBookshelf size={14} className="text-secondary" />
                    <span className="text-xs text-white/70">Ages 6-10</span>
                  </div>
                </div>
                
                {/* Animated stars */}
                <div className="absolute bottom-2 right-2 opacity-20">
                  <FaStar size={40} className="text-secondary animate-pulse-slow" />
                </div>
              </div>
            </div>

            {/* Fun Fact Badge */}
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="bg-white rounded-full px-4 py-2 shadow-md border border-secondary/20 flex items-center gap-2">
                <FaMagic size={14} className="text-secondary" />
                <span className="text-xs text-dark/60">Making language magical since 2025</span>
                <FaHeart size={12} className="text-secondary" />
              </div>
            </div>
          </div>
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
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;