'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, Zap, Shield, Smartphone, Globe, Search } from 'lucide-react';
import { servicesData, ServiceData } from '../data/services';

interface TechnicalSpecsSectionProps {
  serviceSlug: string;
}

const TechnicalSpecsSection: React.FC<TechnicalSpecsSectionProps> = ({ serviceSlug }) => {
  const service = servicesData.find(s => s.slug === serviceSlug);

  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  if (!service || !service.pillarContent?.technicalSpecs) {
    return null;
  }

  const technicalSpecs = service.pillarContent.technicalSpecs;

  const toggleCategory = (category: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(category)) {
      newOpenCategories.delete(category);
    } else {
      newOpenCategories.add(category);
    }
    setOpenCategories(newOpenCategories);
  };

  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('frontend') || lower.includes('design-tools') || lower.includes('ui')) return <Code2 size={20} />;
    if (lower.includes('performance') || lower.includes('optimierung')) return <Zap size={20} />;
    if (lower.includes('sicherheit') || lower.includes('security')) return <Shield size={20} />;
    if (lower.includes('responsive') || lower.includes('mobile')) return <Smartphone size={20} />;
    if (lower.includes('seo') || lower.includes('suche')) return <Search size={20} />;
    return <Globe size={20} />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Technische Spezifikationen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technologien & Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transparenz über den Technologie-Stack, verwendete Tools und angewendete Standards.
              So wissen Sie genau, was Sie bekommen.
            </p>
          </div>

          {/* Technical Specs Accordion */}
          <div className="space-y-4">
            {technicalSpecs.map((specCategory, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(specCategory.category)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                  aria-expanded={openCategories.has(specCategory.category)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mr-4">
                      {getCategoryIcon(specCategory.category)}
                    </div>
                    <span className="font-bold text-slate-900 text-lg">
                      {specCategory.category}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openCategories.has(specCategory.category) ? (
                      <ChevronUp className="text-brand-500" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={24} />
                    )}
                  </div>
                </button>

                {openCategories.has(specCategory.category) && (
                  <div className="px-6 pb-5 pt-2">
                    <div className="pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specCategory.specs.map((spec, specIdx) => (
                          <div
                            key={specIdx}
                            className="flex items-center p-3 bg-white rounded-lg border border-gray-100"
                          >
                            <div className="w-2 h-2 rounded-full bg-brand-500 mr-3"></div>
                            <span className="text-slate-700 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
