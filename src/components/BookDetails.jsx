import React from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaGraduationCap, FaChild, FaSmile, FaComments, FaHeart, FaUser, FaPaintBrush } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  // Color mapping for figurative language items
  const getColorClass = (color) => {
    const colors = {
      'accent-purple': 'border-accent-purple bg-purple-bg',
      'accent-blue': 'border-secondary bg-secondary/10',
      'accent-teal': 'border-primary bg-primary/5',
      'accent-yellow': 'border-secondary bg-secondary/10',
      'accent-pink': 'border-accent-purple bg-purple-bg'
    };
    return colors[color] || 'border-primary bg-primary/5';
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-white to-purple-bg/30">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Two-Shoes And Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="section-subtitle">A Colorful Journey Through Figurative Language</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent-purple/10 rounded-2xl p-8 shadow-xl border-2 border-secondary/30">
              <div className="mb-6 relative">
                <img 
                  src="/images/twoshoe.jpg"
                  alt="Two-Shoes And Me - Book Cover"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -top-3 -right-3 bg-secondary text-primary-dark rounded-full p-2 shadow-lg">
                  <FaStar size={16} />
                </div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">{book.fullTitle}</h3>
                <div className="w-16 h-0.5 bg-secondary mx-auto my-2"></div>
                
                <div className="mt-3 space-y-1">
                  <p className="text-dark/70 text-sm">
                    <span className="font-semibold text-primary">Author:</span> {book.author}
                  </p>
                  <p className="text-dark/70 text-sm">
                    <span className="font-semibold text-primary">Illustrator:</span> {book.illustrator}
                  </p>
                </div>
                
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-secondary" />
                  ))}
                </div>
                <p className="text-xs text-primary mt-2 font-semibold">🎨 A Colorful Learning Adventure 🎨</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-8 h-8 bg-primary rounded-full opacity-50"></div>
                <div className="w-8 h-8 bg-secondary rounded-full opacity-50"></div>
                <div className="w-8 h-8 bg-accent-purple rounded-full opacity-50"></div>
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
                  <div key={idx} className={`flex items-center gap-3 rounded-lg p-3 shadow-md border-l-4 ${getColorClass(item.color)}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-primary text-sm">{item.name}</p>
                      <p className="text-xs text-dark/50">{item.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-bg rounded-xl p-5 shadow-md mb-6 border-l-4 border-secondary">
              <FaQuoteLeft className="text-secondary mb-2" size={24} />
              <p className="text-dark/70 italic mb-3 text-sm">
                "Students will be able to read how figurative language is used in everyday conversations without the awareness of using such language. They will also be able to read and see how figurative language is being used in fiction writing."
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaHeart className="text-secondary" size={14} />
                <span className="text-xs text-primary">Perfect for elementary classrooms</span>
                <FaHeart className="text-secondary" size={14} />
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-secondary/30">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <FaGraduationCap size={18} />
                Skills Young Readers Will Gain:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.details.skillsDeveloped.map((skill, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-dark/70 shadow-sm border border-secondary/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-secondary flex-1 text-center flex items-center justify-center gap-2">
                <FaBook size={16} />
                Buy Two-Shoes And Me
              </button>
              <button className="btn-outline flex-1 text-center flex items-center justify-center gap-2">
                <FaChild size={16} />
                Teacher Resources
              </button>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-dark/50 bg-purple-bg px-4 py-2 rounded-full">
                <FaSmile className="text-secondary" />
                <span>📚 {book.details.targetAudience}</span>
                <FaSmile className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;