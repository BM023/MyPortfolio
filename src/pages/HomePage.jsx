import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomePage({ setCurrentPage }) {
  const [typedText, setTypedText] = useState('');

  // Typing effect
  useEffect(() => {
    const fullText = "Welcome to my tech journey";
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold text-blue-500 mb-4 min-h-16">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl text-blue-600 mb-8">Tech Engineer Trainee • Aspiring Data Scientist</p>
        <p className="text-blue-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Motivated Wits University Health Science alum turned engineering trainee. With a strong foundation in problem-solving, collaboration, and data analytics, I'm eager to grow within the tech and innovation space.
        </p>
        <button
          onClick={() => setCurrentPage('about')}
          className="bg-blue-300 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition transform hover:scale-105"
        >
          Explore My Work <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}