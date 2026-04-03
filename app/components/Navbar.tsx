'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-md z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-[#06B6D4]">C</span>
              <span className="text-white">C</span>
            </span>
            <span className="ml-2 text-sm text-gray-400 hidden sm:block">Comsa Claudiu</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-white font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-white font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-gray-900/95 backdrop-blur-xl rounded-lg p-4">
            <a href="#home" className="block text-gray-300 hover:text-white font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block text-gray-300 hover:text-white font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block text-gray-300 hover:text-white font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className="block text-gray-300 hover:text-white font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-white font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="block bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-6 py-2.5 rounded-full text-center mx-4 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
          </div>
        )}
      </div>
    </nav>
  );
}
