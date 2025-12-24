'use client';

import React, { useRef } from 'react';
import { ExternalLink, Database, Search, Layout } from 'lucide-react';
import { trackProjectClick } from '../utils/analytics';

const ProjectCard: React.FC<{
  title: string;
  category: string;
  description: string;
  image: string;
  features: Array<{ icon: React.ReactNode; text: string }>;
  technologies: string[];
  reversed?: boolean;
  projectUrl: string;
}> = ({ title, category, description, image, features, technologies, reversed = false, projectUrl }) => {

  const directionClass = reversed ? 'lg:flex-row-reverse' : 'lg:flex-row';
  const revealDirection = reversed ? 'reveal-on-scroll-right' : 'reveal-on-scroll-left';

  return (
    <div className={`flex flex-col ${directionClass} gap-16 items-center stagger-container`}>
      {/* Enhanced Image Container */}
      <div className={`lg:w-1/2 ${revealDirection}`}>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
          onClick={() => trackProjectClick(title, projectUrl)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 group ring-1 ring-slate-100 bg-gray-50 transition-all duration-500 ease-out glow-border"
          >
          {/* Enhanced Live Badge */}
          <div className="absolute top-4 left-4 bg-brand-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg flex items-center gap-2 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            LIVE ONLINE
            <div className="absolute inset-0 bg-brand-300 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Enhanced Image with Reveal Animation */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-100/20 via-transparent to-transparent z-10"></div>
            <img
              src={image}
              alt={`${title} Website`}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out reveal-on-scroll"
              style={{
                filter: 'brightness(1) contrast(1)',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </div>

          {/* Enhanced Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-brand-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
            <div className="text-center space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center shadow-xl">
                Website ansehen <ExternalLink size={18} className="ml-2" />
              </div>
              <p className="text-white/80 text-sm">Klicken für Live-Demo</p>
            </div>
          </div>

          {/* Enhanced Border Glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-brand-200/50 via-brand-300/50 to-brand-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 scale-105"></div>
        </div>
        </a>
      </div>

      {/* Enhanced Content */}
      <div className="lg:w-1/2 reveal-on-scroll delay-200">
        <div className="space-y-6">
          {/* Enhanced Title with underline animation */}
          <h4 className="text-3xl font-bold text-slate-900 tracking-tight relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-400 transition-all duration-500 group-hover:w-full"></div>
          </h4>

          {/* Enhanced Category Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-block bg-gradient-to-r from-brand-50 to-brand-100 text-brand-700 text-xs font-bold px-4 py-2 rounded-md tracking-wide uppercase border border-brand-200/50 glow-border">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-500 font-medium">Aktives Projekt</span>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
            {description}
          </p>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-slate-700 font-medium group/item p-3 rounded-lg hover:bg-brand-50/50 transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mr-3 text-brand-500 group-hover/item:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="group-hover/item:text-slate-900 transition-colors duration-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Technology Stack */}
          <div className="border-t border-gray-100 pt-6 space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Technologie-Stack</p>
            <div className="flex gap-3 flex-wrap">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="relative bg-white text-slate-600 px-4 py-2 rounded-lg text-sm font-medium border border-slate-100 shadow-sm hover:border-brand-300 hover:text-brand-600 hover:shadow-md transition-all duration-300 cursor-default group/tech"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {tech}
                  <div className="absolute inset-0 bg-brand-50 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const project1Features = [
    { icon: <Layout size={18} />, text: 'Hunderte Artikel' },
    { icon: <Search size={18} />, text: 'SEO-optimiert' },
    { icon: <Layout size={18} />, text: 'Responsive Design' }
  ];

  const project2Features = [
    { icon: <Database size={18} />, text: '15.000+ Produkte' },
    { icon: <Search size={18} />, text: 'Advanced Filtering' },
    { icon: <Layout size={18} />, text: 'Cross-Platform' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="mb-20 stagger-container">
          <h2 className="stagger-item reveal-on-scroll text-brand-600 font-bold uppercase tracking-widest text-xs mb-4">
            Referenzen
          </h2>
          <h3 className="stagger-item reveal-on-scroll delay-100 text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Projekte, die funktionieren
          </h3>
          <p className="stagger-item reveal-on-scroll delay-200 text-slate-600 max-w-2xl text-lg leading-relaxed">
            Theorie ist schön, aber Ergebnisse sind besser. Hier sehen Sie zwei aktuelle Projekte, die zeigen, was ich für Unternehmen und Nutzer umsetzen kann.
          </p>
        </div>

        {/* Enhanced Projects Space */}
        <div className="space-y-32">

          {/* Project 1 - RetireAndEnjoy */}
          <ProjectCard
            title="RetireAndEnjoy.com"
            category="Informationsplattform"
            description="Umfassende Informationsplattform für Personen im Ruhestand. Die Seite bietet wertvolle Ressourcen, Guides und Tipps für ein erfülltes Leben nach dem Berufsleben."
            image="/images/retireandenjoy.png"
            features={project1Features}
            technologies={['React', 'SEO-Optimierung', 'CMS']}
            projectUrl="https://retireandenjoy.com"
          />

          {/* Project 2 - PaintAtlas */}
          <ProjectCard
            title="PaintAtlas.com"
            category="Produkt-Verzeichnis"
            description="Umfassendes Directory mit über 15.000 Farben für Hobby-Maler. Die Plattform ermöglicht das Suchen, Vergleichen und Finden der perfekten Farben."
            image="/images/paintatlas.png"
            features={project2Features}
            technologies={['Datenbanken', 'Performance']}
            reversed={true}
            projectUrl="https://paintatlas.com"
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