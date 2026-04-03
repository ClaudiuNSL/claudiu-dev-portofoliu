'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-[#C4E532]">C</span>
              <span className="text-gray-900">C</span>
            </span>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block">Comsa Claudiu</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-[#C4E532] hover:bg-[#a8c428] text-gray-900 font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-600 hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block text-gray-600 hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block text-gray-600 hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className="block text-gray-600 hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="block bg-[#C4E532] hover:bg-[#a8c428] text-gray-900 font-semibold px-6 py-2.5 rounded-full text-center mx-4 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
          </div>
        )}
      </div>
    </nav>
  );
}
