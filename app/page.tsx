'use client';

import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Bara de navigare */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-md z-50 border-b border-white/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Claudiu.dev
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a 
                href="#home" 
                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                <span className="relative z-10">Acasă</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#about" 
                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                <span className="relative z-10">Despre</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#projects" 
                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                <span className="relative z-10">Proiecte</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              
              {/* CTA Button */}
              <a 
                href="#contact" 
                className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Să Colaborăm
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-2">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏠 Acasă
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👨‍💻 Despre
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🚀 Proiecte
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📧 Contact
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Să Colaborăm
              </a>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      </nav>

      {/* Secțiunea Hero */}
      <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Code Snippets */}
          <div className="absolute top-20 left-10 text-green-400 font-mono text-sm opacity-70 animate-pulse">
            {'const developer = () => {'}
          </div>
          <div className="absolute top-40 right-20 text-blue-400 font-mono text-sm opacity-60 animate-bounce">
            {'return <Innovation />;'}
          </div>
          <div className="absolute bottom-40 left-20 text-purple-400 font-mono text-sm opacity-50 animate-pulse">
            AI.create(future);
          </div>
          <div className="absolute bottom-20 right-10 text-cyan-400 font-mono text-sm opacity-70 animate-bounce">
            {'};'}
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500 rounded-full opacity-25 animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            
            {/* Profile Image with Effects */}
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin" style={{padding: '4px'}}>
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </div>
              
              {/* Profile Picture */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
                JS
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold animate-pulse">
                AI
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm animate-ping">
                ⚡
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Bună, sunt{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Claudiu
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
                <div className="mb-4">
                  Creez experiențe web{' '}
                  <span className="text-blue-400 font-semibold">moderne</span> și{' '}
                  <span className="text-purple-400 font-semibold">inovatoare</span>
                </div>
                <div className="font-mono text-lg text-green-400">
                  {'>'} Full-Stack Developer & AI Enthusiast
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#projects" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    Vezi Proiectele
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  Contactează-mă
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 animate-pulse pointer-events-none"></div>
      </div>

      {/* Secțiunea Despre Mine */}
      <div id="about" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-ping"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Despre Mine
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                    👨‍💻
                  </span>
                  Povestea Mea
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Sunt un dezvoltator web pasionat cu experiență în crearea de aplicații moderne și inovatoare. 
                  Îmi place să transform ideile în realitate folosind cele mai noi tehnologii.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Specializarea mea include React, Next.js, TypeScript și integrarea AI în aplicații web. 
                  Sunt mereu în căutarea de noi provocări și oportunități de învățare.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    🎯
                  </span>
                  Obiectivele Mele
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Să creez aplicații web care nu doar funcționează perfect, ci și oferă experiențe 
                  memorabile utilizatorilor. Cred în puterea tehnologiei de a schimba lumea în bine.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                    ⚡
                  </span>
                  Abilitățile Mele
                </h3>

                {/* Skill Bars */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">React & Next.js</span>
                      <span className="text-blue-600 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">TypeScript</span>
                      <span className="text-purple-600 font-bold">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse" style={{width: '90%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Tailwind CSS</span>
                      <span className="text-green-600 font-bold">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse" style={{width: '88%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">AI Integration</span>
                      <span className="text-cyan-600 font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Node.js & APIs</span>
                      <span className="text-orange-600 font-bold">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Proiecte Complete</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">Ani Experiență</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secțiunea Proiecte */}
      <div id="projects" className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20 px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-bounce"></div>
          
          {/* Floating Code Elements */}
          <div className="absolute top-10 right-1/4 text-blue-400 font-mono text-xs opacity-30 animate-pulse">
            {'<Project />'}
          </div>
          <div className="absolute bottom-10 left-1/4 text-purple-400 font-mono text-xs opacity-40 animate-bounce">
            {'npm run build'}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proiectele Mele
              <span className="block text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Inovație în Acțiune
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proiect 1 - Banciu Costin Website */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    🌐
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 text-white/60 text-xs font-mono animate-pulse">
                  Live
                </div>
                <div className="absolute bottom-6 left-6 text-white/60 text-xs font-mono animate-bounce">
                  Website
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Banciu Costin - Website Profesional
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Website profesional modern cu design responsive, optimizat pentru performanță și SEO. Interfață elegantă și funcționalitate completă.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    HTML5
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                    CSS3
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Responsive
                  </span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.banciucostin.ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Vezi Live
                  </a>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg text-sm transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proiect 2 - Portfolio Website */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="relative h-48 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    💼
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-white/60 text-xs font-mono animate-pulse">
                  React
                </div>
                <div className="absolute bottom-6 left-6 text-white/60 text-xs font-mono animate-bounce">
                  Next.js
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Portfolio Interactive
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Portofoliu personal modern cu animații avansate, efecte interactive și design responsive. Construit cu Next.js și Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                    În Dezvoltare
                  </button>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg text-sm transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Proiect 3 - Web Development Services */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="relative h-48 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-white/60 text-xs font-mono animate-pulse">
                  Custom
                </div>
                <div className="absolute bottom-6 left-6 text-white/60 text-xs font-mono animate-bounce">
                  Solutions
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  Soluții Web Personalizate
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Dezvolt soluții web personalizate pentru afaceri: landing pages, aplicații web, sisteme de management și multe altele.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                    Custom
                  </span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#contact"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Discută Proiectul
                  </a>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg text-sm transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6 text-lg">
              Vrei să vezi mai multe proiecte sau să colaborăm la ceva nou?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Să Discutăm
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Secțiunea Contact */}
      <div id="contact" className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Contact Icons */}
          <div className="absolute top-20 left-20 text-4xl animate-bounce opacity-20">📧</div>
          <div className="absolute top-40 right-20 text-4xl animate-pulse opacity-30">💬</div>
          <div className="absolute bottom-40 left-10 text-4xl animate-ping opacity-25">📱</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-bounce opacity-20">🚀</div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-ping"></div>
          
          {/* Code Snippets */}
          <div className="absolute top-10 left-1/3 text-blue-400 font-mono text-sm opacity-30 animate-pulse">
            {'const contact = "claudiucomsa29@gmail.com";'}
          </div>
          <div className="absolute bottom-10 right-1/3 text-purple-400 font-mono text-sm opacity-40 animate-bounce">
            {'// Let\'s build something amazing!'}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Să Lucrăm Împreună
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Ai un proiect în minte? Să discutăm despre cum pot să îl aduc la viață!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                  ✉️
                </span>
                Trimite-mi un Mesaj
              </h3>
              
              <form className="space-y-6" action="mailto:claudiucomsa29@gmail.com" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Nume</label>
                    <input 
                      type="text" 
                      name="Nume"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Subiect</label>
                  <input 
                    type="text" 
                    name="Subiect"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500"
                    placeholder="Despre ce vrei să discutăm?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Mesaj</label>
                  <textarea 
                    rows={5}
                    name="Mesaj"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500 resize-none"
                    placeholder="Spune-mi mai multe despre proiectul tău..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Trimite Mesajul</span>
                  <span className="text-xl">📧</span>
                </button>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800 text-center">
                    <strong>📧 Contact Direct:</strong> Pentru răspuns rapid, scrie-mi direct la{' '}
                    <a href="mailto:claudiucomsa29@gmail.com" className="font-semibold text-blue-600 hover:text-blue-800">
                      claudiucomsa29@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="opacity-90">claudiucomsa29@gmail.com</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:claudiucomsa29@gmail.com"
                    className="mt-4 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Trimite Email
                    <span>→</span>
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      📱
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Telefon</h3>
                      <p className="opacity-90">0761 880 406</p>
                    </div>
                  </div>
                  <a 
                    href="tel:+40761880406"
                    className="mt-4 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Sună Acum
                    <span>→</span>
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Locație</h3>
                      <p className="opacity-90">Constanța, România</p>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                    Disponibil Remote
                    <span>🌍</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg">
                    🌟
                  </span>
                  Conectează-te cu Mine
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl">🐙</span>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm opacity-80">Codul meu</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/claudiu-comsa-72b552364/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl">💼</span>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm opacity-80">Profesional</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://twitter.com/claudiu_comsa" 
                    className="flex items-center gap-3 p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl">🐦</span>
                    <div>
                      <div className="font-semibold">Twitter</div>
                      <div className="text-sm opacity-80">Updates</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://instagram.com/claudiu.comsa" 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl">📸</span>
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <div className="text-sm opacity-80">Behind scenes</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-bold text-lg mb-2">Răspuns Rapid</h3>
                <p className="opacity-90">Răspund în maxim 24 de ore la toate mesajele!</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Gata să Începem?</h3>
              <p className="text-lg opacity-90 mb-6">
                Fie că ai nevoie de un website, o aplicație web sau consultanță tehnică, sunt aici să te ajut!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:claudiucomsa29@gmail.com"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Să Discutăm Proiectul
                </a>
                <a 
                  href="#projects"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Vezi Portofoliul
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Claudiu.dev. Toate drepturile rezervate.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ClaudiuNSL" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/claudiu-comsa-72b552364/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:claudiucomsa29@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}