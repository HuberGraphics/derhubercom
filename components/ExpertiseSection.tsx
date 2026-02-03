'use client';

import React from 'react';
import { Award, Code2, Palette, Zap, CheckCircle2 } from 'lucide-react';
import { servicesData, ServiceData } from '../data/services';

interface ExpertiseSectionProps {
  serviceSlug: string;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ serviceSlug }) => {
  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service || !service.expertiseContent) {
    return null;
  }

  const { bio, skills, certifications } = service.expertiseContent;

  // Get icon based on skill category
  const getSkillIcon = (skill: string) => {
    const lower = skill.toLowerCase();
    if (lower.includes('design') || lower.includes('ui') || lower.includes('ux')) return <Palette size={16} />;
    if (lower.includes('react') || lower.includes('next') || lower.includes('typescript') || lower.includes('node')) return <Code2 size={16} />;
    if (lower.includes('performance') || lower.includes('optimierung')) return <Zap size={16} />;
    return <CheckCircle2 size={16} />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Expertise & Qualifikationen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Meine Erfahrung im Bereich {service.title}
            </h2>
          </div>

          {/* Bio */}
          <div className="bg-gradient-to-br from-slate-50 to-brand-50/30 p-8 rounded-2xl border border-brand-100 mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Code2 className="mr-3 text-brand-500" size={24} />
              Technologien & Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:border-brand-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="mr-3 text-brand-500">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (optional) */}
          {certifications && certifications.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Award className="mr-3 text-brand-500" size={24} />
                Zertifizierungen & Weiterbildungen
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 bg-white border border-gray-100 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mr-4">
                      <Award size={20} />
                    </div>
                    <span className="font-medium text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Warum diese Expertise für Sie wichtig</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Tiefes Fachwissen:</strong> Jährliche Erfahrung mit {service.title} sorgt für effiziente Problemlösung.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Zukunftssichere Technologien:</strong> Modernste Stack garantiert Langlebigkeit Ihrer Lösung.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-brand-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span><strong className="text-white">Best Practices:</strong> Branchenstandards und Patterns für wartbaren Code.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
