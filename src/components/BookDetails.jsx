import React from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaGraduationCap, FaChild, FaSmile, FaComments } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Two-Shoe And Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">Where Figurative Language Comes to Life for Young Readers</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 shadow-xl border-2 border-accent/50">
              <div className="mb-6 relative">
                <img 
                  src="/images/twoshoe.jpg"
                  alt="Two-Shoe And Me - Book Cover"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -top-3 -right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                  <FaStar size={16} />
                </div>
              </div>
              
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{book.fullTitle}</h3>
                <div className="w-16 h-0.5 bg-primary mx-auto my-2"></div>
                <p className="text-gray-600 text-sm">By Ruby D. Ponder</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-gold" />
                  ))}
                </div>
                <p className="text-xs text-primary mt-2">Elementary Level Reader</p>
              </div>
            </div>
          </div>

          <div>
            <div className="prose text-dark/80 mb-6">
              <p className="leading-relaxed text-lg">{book.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <FaComments size={20} />
                Figurative Language Explored:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {book.figurativeLanguage.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-md border-l-4 border-primary">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-primary text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream rounded-xl p-5 shadow-md mb-6 border-l-4 border-accent">
              <FaQuoteLeft className="text-primary mb-2" size={24} />
              <p className="text-dark/80 italic mb-3 text-sm">
                "Students will be able to read how figurative language is used in everyday conversations without the awareness of using such language. They will also be able to read and see how figurative language is being used in fiction writing."
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <FaGraduationCap size={18} />
                Skills Young Readers Will Gain:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.details.skillsDeveloped.map((skill, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-dark/70 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 text-center flex items-center justify-center gap-2">
                <FaBook size={16} />
                Buy Two-Shoe And Me
              </button>
              <button className="btn-outline flex-1 text-center flex items-center justify-center gap-2">
                <FaChild size={16} />
                Teacher Resources
              </button>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <FaSmile className="text-primary" />
                <span>Perfect for ages 6-10 | Classroom & Home Use</span>
                <FaSmile className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;