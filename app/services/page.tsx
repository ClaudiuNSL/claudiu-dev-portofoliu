import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development services: React, Next.js, AI integration, custom web solutions. Programator web Constanța, România.",
  openGraph: {
    title: "Services | Comsa Claudiu — Web Developer",
    description:
      "Professional web development services: React, Next.js, AI integration, custom web solutions.",
    url: "https://claudiu.dev/services",
  },
};

const services = [
  {
    icon: "\u{1F4BB}",
    title: "Web Development",
    description:
      "I build modern, responsive websites and web applications using cutting-edge technologies. From landing pages to complex web platforms, I deliver clean, performant code.",
    includes: [
      "Responsive Design",
      "Performance Optimization",
      "SEO-Friendly Code",
      "Cross-Browser Compatibility",
      "Mobile-First Approach",
    ],
  },
  {
    icon: "\u{1F916}",
    title: "AI Integration",
    description:
      "Enhance your applications with artificial intelligence. I integrate AI-powered features like chatbots, content generation, data analysis, and smart automation into existing or new projects.",
    includes: [
      "AI Chatbot Development",
      "Content Generation Tools",
      "Data Analysis Dashboards",
      "Workflow Automation",
      "API Integration",
    ],
  },
  {
    icon: "\u26A1",
    title: "Custom Solutions",
    description:
      "Every business is unique. I develop tailored web solutions including management systems, dashboards, e-commerce platforms, and internal tools designed specifically for your workflow.",
    includes: [
      "Business Management Systems",
      "Custom Dashboards",
      "E-Commerce Solutions",
      "Internal Tools",
      "Database Design",
    ],
  },
  {
    icon: "\u{1F3A8}",
    title: "UI/UX Design",
    description:
      "Great software starts with great design. I create intuitive, visually appealing interfaces that provide excellent user experiences while maintaining brand consistency.",
    includes: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping",
      "Design Systems",
      "Accessibility Compliance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
    <section className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Services</h1>
        <p className="text-lg text-gray-600 mb-16">
          Comprehensive web development solutions for your business
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-sm p-10"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2 mb-6">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#C4E532]">{"\u2713"}</span>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className="inline-block bg-[#C4E532] text-gray-900 font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white rounded-xl shadow-sm p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss your ideas and bring them to life.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-[#C4E532] text-gray-900 font-semibold px-8 py-3 rounded-full hover:brightness-110 transition"
          >
            Get in Touch &rarr;
          </a>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
