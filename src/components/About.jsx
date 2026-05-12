import React from 'react';
import { FaHeart, FaBook, FaGraduationCap, FaStar, FaLightbulb, FaSmile, FaChalkboardTeacher } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">About Ruby Ponder</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">
            Dedicated to helping young readers discover the joy of language
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-primary">
              <FaBook className="text-primary mb-4" size={40} />
              <p className="text-dark/80 leading-relaxed text-lg">
                {authorData.authorBio.fullBio}
              </p>
              <div className="mt-6 pt-4 border-t border-accent">
                <p className="text-primary font-semibold italic">
                  "{authorData.authorBio.mission}"
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-md border border-accent">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaGraduationCap size={24} className="text-primary" />
                Educational Focus
              </h3>
              <div className="space-y-3">
                {authorData.authorBio.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-warm rounded-lg p-3">
                    <FaStar className="text-primary" />
                    <span className="text-dark/70">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaLightbulb size={24} className="text-accent" />
                <h3 className="text-xl font-display font-bold">The Author's Promise</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Every book is crafted to engage young minds, build vocabulary, and make learning figurative language a fun adventure.
              </p>
              <div className="flex items-center gap-2 mt-4 text-accent">
                <FaSmile />
                <span className="text-sm">For elementary level readers</span>
                <FaSmile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;