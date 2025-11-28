import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-blue-50 to-transparent backdrop-blur-sm z-50 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">BM</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize transition ${
                currentPage === page
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-300'
                  : 'text-blue-600 hover:text-blue-400'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-blue-600" />
          ) : (
            <Menu className="text-blue-600" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-100 p-4">
          {['home', 'about', 'projects', 'skills', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 capitalize text-blue-600 hover:text-blue-400"
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}