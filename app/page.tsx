'use client';

import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#C4E532]/20 text-gray-900 font-medium text-sm px-4 py-1.5 rounded-full mb-6 border border-[#C4E532]/40">
                Web Developer & AI Enthusiast
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Digital Solutions That Drive Results
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From innovative web applications to AI-powered solutions, I provide expert development to help your business grow, scale, and thrive.
              </p>
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Expert Solutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Client Dedication</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="bg-[#C4E532] hover:bg-[#a8c428] text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  View Projects &rarr;
                </a>
                <a
                  href="#contact"
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full transition-colors"
                >
                  Contact Me &rarr;
                </a>
              </div>
            </div>

            <div>
              <img
                src="/profil.jpg"
                alt="Claudiu"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a passionate web developer with experience in creating modern and innovative applications.
                  I love transforming ideas into reality using the latest technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My specialization includes React, Next.js, TypeScript, and AI integration in web applications.
                  I'm always looking for new challenges and learning opportunities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create web applications that not only work perfectly but also provide
                  memorable experiences for users. I believe in the power of technology to change the world for the better.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h3>

                <div className="flex flex-wrap">
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">React & Next.js</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">TypeScript</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">Tailwind CSS</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">AI Integration</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">Node.js & APIs</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">MongoDB</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">Git & GitHub</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#C4E532] text-gray-700 text-sm font-medium m-1">UI/UX Design</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#C4E532] text-gray-900 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm font-semibold">Projects</div>
                </div>
                <div className="bg-[#C4E532] text-gray-900 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-1">3+</div>
                  <div className="text-sm font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute top-40 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-300 mb-12">Some of my recent work</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                <div className="text-6xl">🌐</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Banciu Costin - Professional Website
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Modern professional website with responsive design, optimized for performance and SEO.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">HTML5</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">CSS3</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">JavaScript</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.banciucostin.ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-lg text-sm text-center transition-all font-semibold"
                  >
                    View Live
                  </a>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-500/50 hover:border-yellow-400 text-yellow-400 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Interactive Portfolio
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Modern personal portfolio with advanced animations and responsive design. Built with Next.js and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Tailwind</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-700 text-gray-400 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                    In Development
                  </button>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-500/50 hover:border-yellow-400 text-yellow-400 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Custom Web Solutions
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  I develop custom web solutions for businesses: landing pages, web applications, and management systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">React</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#contact"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-lg text-sm text-center transition-all font-semibold"
                  >
                    Discuss Project
                  </a>
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-500/50 hover:border-yellow-400 text-yellow-400 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="absolute top-20 left-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">Have a project in mind? Let's discuss how I can bring it to life!</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/20">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Send a Message</h3>
              
              <form 
                className="space-y-6" 
                action="https://formspree.io/f/xkovzrpr" 
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-white placeholder-gray-500"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-white placeholder-gray-500"
                    placeholder="What do you want to discuss?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-yellow-500/30 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors resize-none text-white placeholder-gray-500"
                    placeholder="Tell me more about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-yellow-500/30"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-gray-300 text-center">
                  Or email me directly at{' '}
                  <a href="mailto:claudiucomsa29@gmail.com" className="font-semibold text-yellow-400 hover:text-yellow-300">
                    claudiucomsa29@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-2">Email</h3>
                <p className="text-gray-300 mb-3">claudiucomsa29@gmail.com</p>
                <a 
                  href="mailto:claudiucomsa29@gmail.com"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-lg text-sm transition-all font-semibold"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-2">Phone</h3>
                <p className="text-gray-300 mb-3">0761 880 406</p>
                <a 
                  href="tel:+40761880406"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-2 rounded-lg text-sm transition-all font-semibold"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-2">Location</h3>
                <p className="text-gray-300 mb-3">Constanța, Romania</p>
                <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg text-sm border border-yellow-500/30">
                  Available Remote
                </span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-4">Connect</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/ClaudiuNSL" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-3 rounded-lg text-center transition-all font-semibold"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/claudiu-comsa-72b552364/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-4 py-3 rounded-lg text-center transition-all font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-8 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Claudiu.dev. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ClaudiuNSL" className="text-gray-400 hover:text-yellow-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/claudiu-comsa-72b552364/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:claudiucomsa29@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
