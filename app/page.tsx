import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#06B6D4]/20 text-white font-medium text-sm px-4 py-1.5 rounded-full mb-6 border border-[#06B6D4]/40">
                Web Developer & AI Enthusiast
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Building Digital Solutions That Drive Results
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From innovative web applications to AI-powered solutions, I provide expert development to help your business grow, scale, and thrive.
              </p>
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Expert Solutions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Client Dedication</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  View Projects &rarr;
                </a>
                <a
                  href="#contact"
                  className="border-2 border-gray-600 hover:border-gray-400 text-gray-200 px-8 py-3 rounded-full transition-colors"
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
          <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate web developer with experience in creating modern and innovative applications.
                  I love transforming ideas into reality using the latest technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My specialization includes React, Next.js, TypeScript, and AI integration in web applications.
                  I'm always looking for new challenges and learning opportunities.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">My Goals</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create web applications that not only work perfectly but also provide
                  memorable experiences for users. I believe in the power of technology to change the world for the better.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>

                <div className="flex flex-wrap">
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">React & Next.js</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">TypeScript</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">Tailwind CSS</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">AI Integration</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">Node.js & APIs</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">MongoDB</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">Git & GitHub</span>
                  <span className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">UI/UX Design</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#06B6D4]/80 backdrop-blur-xl text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm font-semibold">Projects</div>
                </div>
                <div className="bg-[#06B6D4]/80 backdrop-blur-xl text-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold mb-1">3+</div>
                  <div className="text-sm font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">What I Offer</h2>
          <p className="text-lg text-gray-300 mb-12">Comprehensive web development services tailored to your needs</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Modern, responsive websites and web applications built with React, Next.js, and the latest technologies.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Integration</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Smart AI-powered features and automation to enhance your applications and streamline workflows.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Tailored business applications, dashboards, and management systems designed for your specific needs.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Clean, modern interfaces with focus on user experience, accessibility, and visual appeal.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/services" className="inline-flex items-center gap-2 text-gray-200 font-semibold hover:text-white transition-colors">
              View All Services
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 mb-12">Some of my recent work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 flex items-center justify-center">
                <div className="text-6xl">🌐</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Banciu Costin - Professional Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Modern professional website with responsive design, optimized for performance and SEO.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">HTML5</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">CSS3</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">JavaScript</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.banciucostin.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/ClaudiuNSL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Interactive Portfolio
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Modern personal portfolio with advanced animations and responsive design. Built with Next.js and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">Next.js</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">Tailwind</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <button disabled className="flex-1 bg-gray-700 text-gray-400 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                    In Development
                  </button>
                  <a
                    href="https://github.com/ClaudiuNSL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Custom Web Solutions
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  I develop custom web solutions for businesses: landing pages, web applications, and management systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">React</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">Node.js</span>
                  <span className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors"
                  >
                    Discuss Project
                  </a>
                  <a
                    href="https://github.com/ClaudiuNSL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/projects" className="inline-flex items-center gap-2 text-gray-200 font-semibold hover:text-white transition-colors">
              View All Projects
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="text-lg text-gray-300 mb-12">Feedback from people I've worked with</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
              <span className="text-[#06B6D4] text-5xl font-serif leading-none">&ldquo;</span>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                Claudiu built an amazing website for my business. Professional, fast, and the design exceeded my expectations. Highly recommended!
              </p>
              <div className="text-[#06B6D4] mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="text-white font-semibold">Alexandru M.</div>
              <div className="text-gray-400 text-sm">Business Owner</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
              <span className="text-[#06B6D4] text-5xl font-serif leading-none">&ldquo;</span>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                Working with Claudiu was a great experience. He understood our vision perfectly and delivered a modern, responsive web application on time.
              </p>
              <div className="text-[#06B6D4] mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="text-white font-semibold">Maria D.</div>
              <div className="text-gray-400 text-sm">Startup Founder</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
              <span className="text-[#06B6D4] text-5xl font-serif leading-none">&ldquo;</span>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                Excellent work on our company website redesign. The attention to detail and clean code quality really sets Claudiu apart from other developers.
              </p>
              <div className="text-[#06B6D4] mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="text-white font-semibold">Andrei P.</div>
              <div className="text-gray-400 text-sm">Marketing Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-gray-300 mb-12">Have a project in mind? Let&apos;s discuss how I can bring it to life!</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

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
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-colors text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-colors text-white placeholder-gray-400"
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
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-colors text-white placeholder-gray-400"
                    placeholder="What do you want to discuss?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Tell me more about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#06B6D4] hover:bg-[#0891B2] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Or email me directly at{' '}
                  <a href="mailto:claudiucomsa29@gmail.com" className="font-semibold text-white hover:text-[#0891B2] transition-colors">
                    claudiucomsa29@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-3">claudiucomsa29@gmail.com</p>
                <a
                  href="mailto:claudiucomsa29@gmail.com"
                  className="inline-block bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-3">0761 880 406</p>
                <a
                  href="tel:+40761880406"
                  className="inline-block bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300 mb-3">Constanța, Romania</p>
                <span className="inline-block bg-[#06B6D4]/20 text-white font-medium px-4 py-2 rounded-lg text-sm border border-[#06B6D4]/40">
                  Available Remote
                </span>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                <h3 className="font-semibold text-white mb-4">Connect</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ClaudiuNSL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/claudiu-comsa-72b552364/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89717.47034519996!2d28.5831228!3d44.1598013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae0ba0a462f71%3A0x5765bc591a20fdd6!2sConstan%C8%9Ba!5e0!3m2!1sen!2sro!4v1"
                  width="100%"
                  height="250"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location - Constanța, Romania"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
