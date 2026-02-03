'use client';

import React, { useRef, useEffect } from 'react';
import { ExternalLink, Database, Search, Layout } from 'lucide-react';
import { trackProjectClick } from '../utils/analytics';

const ProjectCard: React.FC<{
  title: string;
  category: string;
  description: string;
  image: string;
  features: Array<{ icon: React.ReactNode; text: string }>;
  technologies: string[];
  projectUrl: string;
  isClientProject?: boolean;
}> = ({ title, category, description, image, features, technologies, projectUrl, isClientProject = false }) => {

  return (
    <div className="flex flex-col gap-6 group/card">
      {/* Image Container - Compact for Grid */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onClick={() => trackProjectClick(title, projectUrl)}
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg shadow-slate-200 ring-1 ring-slate-100 bg-gray-50 transition-all duration-500 ease-out hover:shadow-xl hover:ring-brand-200">
          {/* Project Type Badge */}
          <div className={`absolute bottom-3 right-3 text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-md flex items-center gap-1.5 ${isClientProject ? 'bg-brand-400 text-slate-950' : 'bg-slate-700 text-white'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            {isClientProject ? 'Kundenprojekt' : 'Eigenprojekt'}
          </div>

          {/* Image */}
          <div className="relative overflow-hidden aspect-[3/2]">
            <img
              src={image}
              alt={`${title} Website`}
              className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-brand-800/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex items-center justify-center">
            <div className="text-center transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
              <div className="bg-white text-slate-950 px-6 py-3 rounded-lg font-bold flex items-center shadow-xl text-sm">
                Website ansehen <ExternalLink size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Content - Compact */}
      <div className="space-y-4">
        {/* Title */}
        <h4 className="text-xl font-bold text-slate-900 tracking-tight">
          {title}
        </h4>

        {/* Category Badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block bg-gradient-to-r from-brand-50 to-brand-100 text-brand-700 text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wide uppercase border border-brand-200/50">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
          {description}
        </p>

        {/* Features - Compact Single Column */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center text-xs text-slate-700 font-medium"
            >
              <div className="mr-2 text-brand-500">
                {feature.icon}
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Technology Stack - Compact */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex gap-2 flex-wrap">
            {technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded text-xs font-medium border border-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const project1Features = [
    { icon: <Layout size={16} />, text: 'Hunderte Artikel' },
    { icon: <Search size={16} />, text: 'SEO-optimiert' },
    { icon: <Layout size={16} />, text: 'Responsive Design' }
  ];

  const project2Features = [
    { icon: <Database size={16} />, text: '15.000+ Produkte' },
    { icon: <Search size={16} />, text: 'Advanced Filtering' },
    { icon: <Layout size={16} />, text: 'Cross-Platform' }
  ];

  const project3Features = [
    { icon: <Layout size={16} />, text: 'Leistungsübersicht' },
    { icon: <Search size={16} />, text: 'Lokale SEO' },
    { icon: <ExternalLink size={16} />, text: 'Kontaktformular' }
  ];

  const project4Features = [
    { icon: <Database size={16} />, text: 'Online-Buchung' },
    { icon: <Layout size={16} />, text: 'Fahrradkatalog' },
    { icon: <Search size={16} />, text: 'Verfügbarkeitsprüfung' }
  ];

  // IntersectionObserver for reveal-on-scroll animations
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const revealElements = sectionRef.current?.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right, .reveal-on-scale');
      revealElements?.forEach((el) => revealObserver.observe(el));
    }, 100);

    return () => revealObserver.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 stagger-container">
          <h2 className="stagger-item reveal-on-scroll text-brand-600 font-bold uppercase tracking-widest text-xs mb-4">
            Referenzen
          </h2>
          <h3 className="stagger-item reveal-on-scroll delay-100 text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Projekte, die funktionieren
          </h3>
          <p className="stagger-item reveal-on-scroll delay-200 text-slate-600 max-w-2xl text-lg leading-relaxed">
            Theorie ist schön, aber Ergebnisse sind besser. Hier sehen Sie ausgewählte Projekte, die zeigen, was ich für Unternehmen und Nutzer umsetzen kann.
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Project 1 - Klinger Glasreinigung (Kundenprojekt) */}
          <ProjectCard
            title="Klinger Glasreinigung"
            category="Unternehmens-Website"
            description="Professionelle Website für einen Glasreinigungsbetrieb mit Leistungsübersicht, Kontaktformular und lokaler SEO-Optimierung."
            image="/images/klinger-glasreinigung.png"
            features={project3Features}
            technologies={['Next.js', 'Lokale SEO', 'Formular']}
            projectUrl="https://klinger-glasreinigung.de"
            isClientProject={true}
          />

          {/* Project 2 - Joyrides-Rent (Kundenprojekt) */}
          <ProjectCard
            title="Joyrides-Rent"
            category="Unternehmens-Website"
            description="Fahrradverleih-Website mit Online-Buchungssystem für Heidelberg und Umgebung. Einfache Reservierung und Verfügbarkeitsprüfung."
            image="/images/joyrides-rent.png"
            features={project4Features}
            technologies={['React', 'Buchungssystem', 'API']}
            projectUrl="https://joyrides-rent.de"
            isClientProject={true}
          />

          {/* Project 3 - RetireAndEnjoy (Eigenprojekt) */}
          <ProjectCard
            title="RetireAndEnjoy.com"
            category="Informationsplattform"
            description="Umfassende Informationsplattform für Personen im Ruhestand. Die Seite bietet wertvolle Ressourcen, Guides und Tipps für ein erfülltes Leben nach dem Berufsleben."
            image="/images/retireandenjoy.png"
            features={project1Features}
            technologies={['React', 'SEO', 'CMS']}
            projectUrl="https://retireandenjoy.com"
            isClientProject={false}
          />

          {/* Project 4 - PaintAtlas (Eigenprojekt) */}
          <ProjectCard
            title="PaintAtlas.com"
            category="Produkt-Verzeichnis"
            description="Umfassendes Directory mit über 15.000 Farben für Hobby-Maler. Die Plattform ermöglicht das Suchen, Vergleichen und Finden der perfekten Farben."
            image="/images/paintatlas.png"
            features={project2Features}
            technologies={['Datenbank', 'Performance', 'API']}
            projectUrl="https://paintatlas.com"
            isClientProject={false}
          />

        </div>

        {/* Enhanced CTA Section */}
        <div className="stagger-container">
          <div className="stagger-item reveal-on-scale mt-24 bg-gradient-to-br from-white via-brand-50/30 to-white border border-brand-100 shadow-xl rounded-3xl p-10 md:p-20 text-center text-slate-900 relative overflow-hidden group glow-border">
            {/* Enhanced Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none parallax-slow" data-speed="0.3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 pointer-events-none parallax-slow" data-speed="0.5"></div>

            <div className="relative z-10 space-y-6">
              {/* Enhanced Title */}
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Bereit für Ihr eigenes erfolgreiches Projekt?
              </h3>

              <p className="text-slate-600 max-w-2xl mx-auto text-lg group-hover:text-slate-700 transition-colors duration-300">
                Egal ob Informationsplattform, Produkt-Verzeichnis oder Unternehmens-Website – ich entwickle die Lösung, die genau auf Ihre Bedürfnisse zugeschnitten ist.
              </p>

              {/* Enhanced CTA Button */}
              <div className="inline-block">
                <a
                  href="#contact"
                  className="magnetic-button inline-block bg-gradient-to-r from-brand-400 to-brand-500 text-slate-950 font-bold px-10 py-4 rounded-xl hover:from-brand-300 hover:to-brand-400 transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(27,222,148,0.4)] hover:shadow-[0_8px_30px_-5px_rgba(27,222,148,0.6)] hover:-translate-y-1 glow-border ripple-container gpu-accelerated group"
                >
                  <span className="relative z-10 flex items-center">
                    Projekt besprechen
                    <ExternalLink size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;