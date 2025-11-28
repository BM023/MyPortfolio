import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import CustomCursor from './components/CustomCursor';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="overflow-x-hidden cursor-none">
      <CustomCursor cursorPos={cursorPos} />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'skills' && <SkillsPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Footer */}
      <footer className="bg-blue-200 text-blue-700 text-center py-6 border-t border-blue-300">
        <p>© 2025 Boikanyo Maswi. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}