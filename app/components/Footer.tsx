export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 — Brand */}
          <div>
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-[#06B6D4]">C</span>
              <span className="text-white">C</span>
            </span>
            <p className="text-gray-400 mt-2">Comsa Claudiu</p>
            <p className="text-gray-500 text-sm mt-2">Building digital solutions that drive results.</p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <a href="#home" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">Home</a>
            <a href="#about" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">About</a>
            <a href="#services" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">Services</a>
            <a href="#projects" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">Contact</a>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <a href="https://github.com/ClaudiuNSL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/claudiu-comsa-72b552364/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">LinkedIn</a>
            <a href="mailto:claudiucomsa29@gmail.com" className="text-gray-400 hover:text-[#06B6D4] transition-colors block mb-2 text-sm">Email</a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Comsa Claudiu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
