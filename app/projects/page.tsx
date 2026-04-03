import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of web development projects by Comsa Claudiu. React, Next.js, and modern web applications. Portofoliu programator web.",
  openGraph: {
    title: "Projects | Comsa Claudiu — Web Developer",
    description:
      "Portfolio of web development projects by Comsa Claudiu.",
    url: "https://claudiu.dev/projects",
  },
};

const projects = [
  {
    emoji: "\uD83C\uDF10",
    title: "Banciu Costin — Professional Website",
    description:
      "A complete professional website built for Banciu Costin. Features responsive design, optimized performance, SEO-friendly structure, and modern aesthetics. Delivered a clean, fast-loading site that effectively showcases the client\u2019s services.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    buttons: [
      {
        label: "View Live",
        href: "https://www.banciucostin.ro",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/ClaudiuNSL",
        primary: false,
      },
    ],
  },
  {
    emoji: "\uD83D\uDCBC",
    title: "Interactive Portfolio",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS. Features modern animations, responsive design, contact form integration, and comprehensive SEO optimization. Currently in active development with new features being added regularly.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Formspree", "SEO"],
    buttons: [
      {
        label: "In Development",
        href: "#",
        disabled: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/ClaudiuNSL",
        primary: false,
      },
    ],
  },
  {
    emoji: "\uD83D\uDE80",
    title: "Custom Web Solutions",
    description:
      "Custom web development services for businesses of all sizes. From landing pages to complex web applications, I deliver tailored solutions using React, Node.js, and MongoDB. Each project is built with scalability, performance, and user experience in mind.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Full-Stack"],
    buttons: [
      {
        label: "Discuss Project",
        href: "/#contact",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/ClaudiuNSL",
        primary: false,
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Projects
        </h1>
        <p className="text-lg text-gray-600 mb-16">
          A showcase of my recent work and contributions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-56 bg-gradient-to-br from-[#C4E532]/20 to-[#a8c428]/20 flex items-center justify-center">
                <span className="text-7xl">{project.emoji}</span>
              </div>

              <div className="p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-[#C4E532]/20 text-gray-700 text-xs rounded-full border border-[#C4E532]/30 m-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  {project.buttons.map((btn) =>
                    btn.disabled ? (
                      <span
                        key={btn.label}
                        className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-200 text-gray-400 cursor-not-allowed"
                      >
                        {btn.label}
                      </span>
                    ) : btn.primary ? (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target={
                          btn.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          btn.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="px-5 py-2.5 rounded-lg text-sm font-medium bg-[#C4E532] text-gray-900 hover:bg-[#b5d42e] transition-colors"
                      >
                        {btn.label}
                      </a>
                    ) : (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target={
                          btn.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          btn.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {btn.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white rounded-xl shadow-sm p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 mb-6">
            I&apos;m always open to discussing new projects and creative ideas.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 rounded-lg text-sm font-medium bg-[#C4E532] text-gray-900 hover:bg-[#b5d42e] transition-colors"
          >
            Let&apos;s Talk &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
