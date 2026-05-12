import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaChild, FaStar } from 'react-icons/fa';
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
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container-custom mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-accent text-primary p-4 rounded-full">
            <FaBook size={32} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Stay Updated with Ruby's Books
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Get updates on new releases, teaching resources, and free figurative language activities for your classroom.
        </p>
        <p className="text-sm text-white/70 mb-8 flex items-center justify-center gap-2">
          <FaEnvelope />
          {authorData.email}
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-accent bg-white"
            required
          />
          <button type="submit" className="bg-accent hover:bg-accent-dark text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
            <FaPaperPlane size={18} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-accent-light mt-4 animate-pulse">
            Thank you for subscribing! 📚 Get ready for fun learning!
          </p>
        )}

        <div className="flex items-center justify-center gap-2 mt-6 text-white/60 text-sm">
          <FaChild size={12} />
          <span>Free resources for educators and parents</span>
          <FaStar size={12} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;