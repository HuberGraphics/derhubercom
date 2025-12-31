'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Database, Layout, Search, Code, Zap } from 'lucide-react';
import { getProjectsByService } from '../data/portfolio';

interface PortfolioSectionProps {
  serviceSlug: string;
  serviceTitle: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ serviceSlug, serviceTitle }) => {
  const projects = getProjectsByService(serviceSlug);

  if (projects.length === 0) {
    return null;
  }

  // Get icon based on feature text
  const getFeatureIcon = (feature: string) => {
    const lower = feature.toLowerCase();
    if (lower.includes('datenbank') || lower.includes('15.000') || lower.includes('produkten')) return <Database size={18} />;
    if (lower.includes('seo') || lower.includes('such') || lower.includes('filter')) return <Search size={18} />;
    if (lower.includes('responsive') || lower.includes('design') || lower.includes('mobile')) return <Layout size={18} />;
    if (lower.includes('react') || lower.includes('api') || lower.includes('entwicklung')) return <Code size={18} />;
    return <Zap size={18} />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Portfolio & Referenzen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Projekte, die {serviceTitle} zeigen
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Theorie ist gut, Praxis ist besser. Hier sehen Sie aktuelle Projekte,
              die meine Expertise im Bereich {serviceTitle} demonstrieren.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 w-full">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-md ring-1 ring-slate-100 bg-white">
                      {/* Live Badge */}
                      <div className="absolute top-4 left-4 bg-brand-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        LIVE DEMO
                      </div>

                      {/* Image */}
                      <img
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold flex items-center shadow-lg mx-auto">
                            Website ansehen <ExternalLink size={18} className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                  <div className="space-y-6">
                    {/* Title & Category */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-4 py-2 rounded-md tracking-wide uppercase border border-brand-200">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-500 font-medium">Aktives Projekt</span>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-200">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Projekt-Typ</p>
                        <p className="text-sm font-medium text-slate-900">{project.projectType}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Dauer</p>
                        <p className="text-sm font-medium text-slate-900">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Rolle</p>
                        <p className="text-sm font-medium text-slate-900">{project.role}</p>
                      </div>
                      {project.client && (
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Branche</p>
                          <p className="text-sm font-medium text-slate-900">{project.client.industry}</p>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                        Highlights & Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-slate-700 font-medium p-3 rounded-lg bg-white border border-gray-100"
                          >
                            <div className="mr-3 text-brand-500">
                              {getFeatureIcon(feature)}
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                        Technologie-Stack
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-100 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
                      >
                        Live-Projekt ansehen
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-white via-brand-50/30 to-white border border-brand-100 shadow-lg rounded-lg p-10 md:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Bereit für Ihr eigenes Projekt?
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                Egal ob Informationsplattform, Produkt-Verzeichnis oder Unternehmens-Website –
                ich entwickle die Lösung, die genau auf Ihre Bedürfnisse zugeschnitten ist.
              </p>
              <a
                href="#contact"
                className="inline-block bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-4 px-10 rounded-lg transition-base shadow-md hover:shadow-lg"
              >
                Projekt besprechen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
