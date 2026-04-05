import Image from 'next/image';
import { Monitor, Bot, Zap, Palette, Globe, Briefcase, Rocket } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ContactForm from './components/ContactForm';

const serviceIcons: Record<string, React.ReactNode> = {
  'Web Development': <Monitor className="w-8 h-8" aria-hidden="true" />,
  'AI Integration': <Bot className="w-8 h-8" aria-hidden="true" />,
  'Custom Solutions': <Zap className="w-8 h-8" aria-hidden="true" />,
  'UI/UX Design': <Palette className="w-8 h-8" aria-hidden="true" />,
};

const projectIcons: Record<string, React.ReactNode> = {
  'Banciu Costin': <Globe className="w-14 h-14" aria-hidden="true" />,
  'Interactive Portfolio': <Briefcase className="w-14 h-14" aria-hidden="true" />,
  'Custom Web Solutions': <Rocket className="w-14 h-14" aria-hidden="true" />,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#06B6D4] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section id="home" aria-label="Introduction" className="min-h-screen flex items-center pt-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <span className="inline-block bg-[#06B6D4]/20 text-white font-medium text-sm px-4 py-1.5 rounded-full mb-6 border border-[#06B6D4]/40">
                  Web Developer & AI Enthusiast
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Building Digital Solutions That Drive Results
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  From innovative web applications to AI-powered solutions, I provide expert development to help your business grow, scale, and thrive.
                </p>
                <div className="flex items-center gap-8 mb-8" aria-label="Key statistics">
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
                    className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    View Projects &rarr;
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-gray-600 hover:border-gray-400 text-gray-200 px-8 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    Contact Me &rarr;
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <Image
                  src="/profil.jpg"
                  alt="Comsa Claudiu — Web Developer"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-12">About Me</h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I&apos;m a passionate web developer with experience in creating modern and innovative applications.
                      I love transforming ideas into reality using the latest technologies.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      My specialization includes React, Next.js, TypeScript, and AI integration in web applications.
                      I&apos;m always looking for new challenges and learning opportunities.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">My Goals</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To create web applications that not only work perfectly but also provide
                      memorable experiences for users. I believe in the power of technology to change the world for the better.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="space-y-8">
                <AnimatedSection delay={0.15}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8">
                    <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
                    <div className="flex flex-wrap" role="list" aria-label="Technical skills">
                      {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Node.js & APIs', 'MongoDB', 'Git & GitHub', 'UI/UX Design'].map((skill) => (
                        <span key={skill} role="listitem" className="inline-block px-4 py-2 rounded-full border-2 border-[#06B6D4] text-gray-200 text-sm font-medium m-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
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
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" aria-labelledby="services-heading" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">What I Offer</h2>
              <p className="text-lg text-gray-300 mb-12">Comprehensive web development services tailored to your needs</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Web Development', desc: 'Modern, responsive websites and web applications built with React, Next.js, and the latest technologies.' },
                { name: 'AI Integration', desc: 'Smart AI-powered features and automation to enhance your applications and streamline workflows.' },
                { name: 'Custom Solutions', desc: 'Tailored business applications, dashboards, and management systems designed for your specific needs.' },
                { name: 'UI/UX Design', desc: 'Clean, modern interfaces with focus on user experience, accessibility, and visual appeal.' },
              ].map((service, i) => (
                <AnimatedSection key={service.name} delay={i * 0.1}>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 hover:shadow-md hover:border-[#06B6D4]/30 transition-all h-full">
                    <div className="text-[#06B6D4] mb-4">{serviceIcons[service.name]}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="text-center mt-10">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-gray-200 font-semibold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 rounded-lg px-2 py-1"
                >
                  View All Services
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" aria-labelledby="projects-heading" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 id="projects-heading" className="text-4xl font-bold text-white mb-4">My Projects</h2>
              <p className="text-lg text-gray-300 mb-12">Some of my recent work</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  key: 'Banciu Costin',
                  title: 'Banciu Costin - Professional Website',
                  desc: 'Modern professional website with responsive design, optimized for performance and SEO.',
                  tags: ['HTML5', 'CSS3', 'JavaScript'],
                  liveUrl: 'https://www.banciucostin.ro',
                  githubUrl: 'https://github.com/ClaudiuNSL',
                },
                {
                  key: 'Interactive Portfolio',
                  title: 'Interactive Portfolio',
                  desc: 'Modern personal portfolio with advanced animations and responsive design. Built with Next.js and Tailwind CSS.',
                  tags: ['Next.js', 'Tailwind', 'TypeScript'],
                  disabled: true,
                  githubUrl: 'https://github.com/ClaudiuNSL',
                },
                {
                  key: 'Custom Web Solutions',
                  title: 'Custom Web Solutions',
                  desc: 'I develop custom web solutions for businesses: landing pages, web applications, and management systems.',
                  tags: ['React', 'Node.js', 'MongoDB'],
                  contactUrl: '#contact',
                  githubUrl: 'https://github.com/ClaudiuNSL',
                },
              ].map((project, i) => (
                <AnimatedSection key={project.key} delay={i * 0.15}>
                  <article className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:shadow-md hover:border-[#06B6D4]/30 transition-all h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 flex items-center justify-center text-[#06B6D4]">
                      {projectIcons[project.key]}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-[#06B6D4]/20 text-gray-200 text-xs rounded-full border border-[#06B6D4]/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
                            aria-label={`View live site: ${project.title}`}
                          >
                            View Live
                          </a>
                        )}
                        {project.disabled && (
                          <span className="flex-1 bg-gray-700 text-gray-400 px-4 py-2 rounded-lg text-sm text-center cursor-not-allowed" aria-label="Project is in development">
                            In Development
                          </span>
                        )}
                        {project.contactUrl && (
                          <a
                            href={project.contactUrl}
                            className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
                          >
                            Discuss Project
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-200 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="text-center mt-10">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-gray-200 font-semibold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 rounded-lg px-2 py-1"
                >
                  View All Projects
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 id="testimonials-heading" className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
              <p className="text-lg text-gray-300 mb-12">Feedback from people I&apos;ve worked with</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: 'Claudiu built an amazing website for my business. Professional, fast, and the design exceeded my expectations. Highly recommended!', name: 'Alexandru M.', role: 'Business Owner' },
                { quote: 'Working with Claudiu was a great experience. He understood our vision perfectly and delivered a modern, responsive web application on time.', name: 'Maria D.', role: 'Startup Founder' },
                { quote: 'Excellent work on our company website redesign. The attention to detail and clean code quality really sets Claudiu apart from other developers.', name: 'Andrei P.', role: 'Marketing Manager' },
              ].map((testimonial, i) => (
                <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                  <blockquote className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 h-full flex flex-col">
                    <span className="text-[#06B6D4] text-5xl font-serif leading-none" aria-hidden="true">&ldquo;</span>
                    <p className="text-gray-300 mb-6 leading-relaxed italic flex-1">{testimonial.quote}</p>
                    <div className="text-[#06B6D4] mb-3" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <footer>
                      <cite className="not-italic">
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </cite>
                    </footer>
                  </blockquote>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 id="contact-heading" className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
              <p className="text-lg text-gray-300 mb-12">Have a project in mind? Let&apos;s discuss how I can bring it to life!</p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection delay={0.1}>
                <ContactForm />
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-3">claudiucomsa29@gmail.com</p>
                    <a
                      href="mailto:claudiucomsa29@gmail.com"
                      className="inline-block bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
                    >
                      Send Email
                    </a>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300 mb-3">0761 880 406</p>
                    <a
                      href="tel:+40761880406"
                      className="inline-block bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
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
                        aria-label="GitHub profile"
                        className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/claudiu-comsa-72b552364/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="flex-1 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-lg text-sm text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50"
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
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location - Constanța, Romania"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
