'use client';

import React from 'react';
import { Clock, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { servicesData, ServiceData } from '../data/services';

interface ProcessSectionProps {
  serviceSlug: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ serviceSlug }) => {
  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service || !service.processContent) {
    return null;
  }

  const { timeline, deliverables, phases } = service.processContent;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Transparenter Prozess
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              So arbeiten wir zusammen
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Keine Black Box, kein versteckter Prozess. Transparente Zusammenarbeit
              mit klaren Phasen, Deliverables und Zeitrahmen.
            </p>
          </div>

          {/* Timeline & Deliverables Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="text-brand-500 mr-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900">Typischer Zeitrahmen</h3>
              </div>
              <p className="text-2xl font-bold text-brand-600">{timeline}</p>
              <p className="text-sm text-slate-500 mt-2">Je nach Projektumfang und Komplexität</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="text-brand-500 mr-3" size={24} />
                <h3 className="text-lg font-bold text-slate-900">Deliverables</h3>
              </div>
              <ul className="space-y-2">
                {deliverables.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <CheckCircle2 className="text-brand-500 mr-2" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Phases */}
          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Phase Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{phase.name}</h3>
                        <p className="text-slate-300 text-sm flex items-center mt-1">
                          <Calendar className="mr-2" size={16} />
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase Body */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <FileText className="mr-2 text-brand-500" size={18} />
                        Beschreibung
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <CheckCircle2 className="mr-2 text-brand-500" size={18} />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Info */}
          <div className="mt-16 bg-brand-50 p-8 rounded-2xl border border-brand-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Transparente Zusammenarbeit</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Kommunikation</h4>
                <p className="text-slate-600">Regelmäßige Updates via Zoom, E-Mail oder Telefon. Sie sind immer auf dem Laufenden.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Feedback-Runden</h4>
                <p className="text-slate-600">Klare Meilensteine mit definierten Feedback-Phasen. Ihre Meinung zählt.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Dokumentation</h4>
                <p className="text-slate-600">Alle Entscheidungen, Prozesse und Ergebnisse werden dokumentiert.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
