'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, PlusCircle, GitCompare } from 'lucide-react';
import { servicesData, ServiceData } from '../data/services';
import { getRelatedServices } from '../data/serviceClusters';
import { getComparisonsForService } from '../data/comparisons';

interface RelatedTopicsProps {
  currentServiceSlug: string;
  currentServiceTitle: string;
}

const RelatedTopics: React.FC<RelatedTopicsProps> = ({ currentServiceSlug, currentServiceTitle }) => {
  const clusterInfo = servicesData.find(s => s.slug === currentServiceSlug)?.clusterInfo;
  const relatedServicesData = getRelatedServices(currentServiceSlug);
  const comparisons = getComparisonsForService(currentServiceSlug);

  if (!clusterInfo || !relatedServicesData || relatedServicesData.length === 0) {
    return null;
  }

  // Group related services by relationship type
  const prerequisites = relatedServicesData.filter(r => r.relationship === 'prerequisite');
  const complementary = relatedServicesData.filter(r => r.relationship === 'complementary');
  const alternatives = relatedServicesData.filter(r => r.relationship === 'alternative');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Semantisches Topic Cluster
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Verwandte Themen & Dienste
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Entdecken Sie verwandte Dienstleistungen, die {currentServiceTitle} ergänzen,
              erweitern oder alternativ Lösungen bieten.
            </p>
          </div>

          {/* Prerequisites */}
          {prerequisites.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Voraussetzungen & Grundlagen</h3>
                  <p className="text-sm text-slate-500">Dienstleistungen, die {currentServiceTitle} zugrunde liegen</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {prerequisites.map((related) => {
                  const relatedService = servicesData.find(s => s.slug === related.slug);
                  if (!relatedService) return null;

                  return (
                    <Link
                      key={related.slug}
                      href={`/leistungen/${related.slug}`}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          {relatedService.icon}
                        </div>
                        <ArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{relatedService.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{relatedService.shortDesc}</p>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs text-blue-600 font-medium">
                          {related.semanticConnection}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Complementary Services */}
          {complementary.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mr-4">
                  <PlusCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Ergänzende Dienstleistungen</h3>
                  <p className="text-sm text-slate-500">Perfekte Kombinationen mit {currentServiceTitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {complementary.map((related) => {
                  const relatedService = servicesData.find(s => s.slug === related.slug);
                  if (!relatedService) return null;

                  return (
                    <Link
                      key={related.slug}
                      href={`/leistungen/${related.slug}`}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          {relatedService.icon}
                        </div>
                        <ArrowRight className="text-brand-400 group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{relatedService.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{relatedService.shortDesc}</p>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs text-brand-600 font-medium">
                          {related.semanticConnection}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <GitCompare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Alternativen & Vergleiche</h3>
                  <p className="text-sm text-slate-500">Ähnliche Ansätze oder alternative Lösungen</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {alternatives.map((related) => {
                  const relatedService = servicesData.find(s => s.slug === related.slug);
                  if (!relatedService) return null;

                  return (
                    <Link
                      key={related.slug}
                      href={`/leistungen/${related.slug}`}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          {relatedService.icon}
                        </div>
                        <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{relatedService.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{relatedService.shortDesc}</p>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-xs text-purple-600 font-medium">
                          {related.semanticConnection}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Comparison Pages Section */}
          {comparisons && comparisons.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <GitCompare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Vergleiche & Entscheidungshilfen</h3>
                  <p className="text-sm text-slate-500">Vergleichen Sie {currentServiceTitle} mit verwandten Dienstleistungen</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {comparisons.map((comp) => {
                  const otherServiceSlug = comp.service1 === currentServiceSlug ? comp.service2 : comp.service1;
                  const otherService = servicesData.find(s => s.slug === otherServiceSlug);

                  if (!otherService) return null;

                  return (
                    <Link
                      key={comp.slug}
                      href={`/vergleich/${comp.slug}`}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                            {servicesData.find(s => s.slug === comp.service1)?.icon}
                          </div>
                          <span className="text-slate-400 font-bold">vs</span>
                          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                            {servicesData.find(s => s.slug === comp.service2)?.icon}
                          </div>
                        </div>
                        <ArrowRight className="text-orange-400 group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{comp.title}</h4>
                      <p className="text-sm text-slate-600 line-clamp-2">{comp.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {clusterInfo.secondaryTopics && clusterInfo.secondaryTopics.length > 0 && (
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Verwandte Suchbegriffe & Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {clusterInfo.secondaryTopics.slice(0, 12).map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedTopics;
