'use client';

const technologies = [
  {
    name: 'React',
    label: 'UI Library',
    color: '#61DAFB',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 20 20)" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    label: 'React Framework',
    color: '#FFFFFF',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12V28L28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="26" y1="12" x2="26" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    label: 'Typed JavaScript',
    color: '#3178C6',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <text x="20" y="26" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    label: 'Utility-First CSS',
    color: '#06B6D4',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 18c2-6 6-8 14-8 4 0 6 2 7 5s3 5 7 5c-2 6-6 8-14 8-4 0-6-2-7-5s-3-5-7-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 22c1-3 3-4 7-4 2 0 3 1 3.5 2.5S24 23 26 23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    label: 'JS Runtime',
    color: '#339933',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="20" y="25" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="bold" fontFamily="Arial, sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    label: 'NoSQL Database',
    color: '#47A248',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4C20 4 14 12 14 22c0 6 3 10 6 12v2h0v-2c3-2 6-6 6-12C26 12 20 4 20 4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="14" x2="20" y2="36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Git',
    label: 'Version Control',
    color: '#F05032',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="13" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="28" y1="13" x2="28" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20 Q12 25 20 27" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M28 20 Q28 25 20 27" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'AI / ML',
    label: 'Machine Learning',
    color: '#06B6D4',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="22" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="30" cy="22" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="14" cy="32" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="26" cy="32" r="3" stroke="currentColor" strokeWidth="1.3" />
        <line x1="20" y1="15" x2="10" y2="19" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="15" x2="30" y2="19" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10" y1="25" x2="14" y2="29" stroke="currentColor" strokeWidth="1.2" />
        <line x1="30" y1="25" x2="26" y2="29" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10" y1="25" x2="26" y2="29" stroke="currentColor" strokeWidth="1.2" />
        <line x1="30" y1="25" x2="14" y2="29" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center
                       transition-all duration-300 ease-in-out
                       hover:border-[#06B6D4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <div
              className="inline-flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <h4 className="text-white font-semibold text-xs mb-0.5">
              {tech.name}
            </h4>
            <p className="text-gray-500 text-[10px]">{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
