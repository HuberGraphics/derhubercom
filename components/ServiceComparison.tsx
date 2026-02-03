'use client';

import React from 'react';
import Link from 'next/link';
import { Check, X, Minus, ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import { ComparisonData } from '../data/comparisons';
import { servicesData } from '../data/services';

interface ServiceComparisonProps {
  comparison: ComparisonData;
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ comparison }) => {
  const service1 = servicesData.find(s => s.slug === comparison.service1);
  const service2 = servicesData.find(s => s.slug === comparison.service2);

  if (!service1 || !service2) {
    return null;
  }

  return (
    <>
      {/* Schema.org Comparison Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: comparison.title,
            description: comparison.description,
            comparison: {
              '@type': 'ListItem',
              item: {
                '@type': 'Product',
                name: service1.title
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center text-slate-600 hover:text-brand-600 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Zurück zu Leistungen
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-4 inline-block">
              Vergleich
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {comparison.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              {comparison.description}
            </p>
          </div>

          {/* Quick Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-200 relative">
              <div className="absolute -top-4 left-8 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Service 1
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mr-4">
                  {service1.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{service1.title}</h2>
              </div>
              <p className="text-slate-600">{service1.shortDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-8 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Service 2
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                  {service2.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{service2.title}</h2>
              </div>
              <p className="text-slate-600">{service2.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Was ist der Unterschied?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-12">
              {comparison.comparison.focus}
            </p>

            {/* When to Choose */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mr-3">
                    1
                  </div>
                  Wann {service1.title} wählen?
                </h3>
                <ul className="space-y-3">
                  {comparison.comparison.whenChoose.service1.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <Check className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-3">
                    2
                  </div>
                  Wann {service2.title} wählen?
                </h3>
                <ul className="space-y-3">
                  {comparison.comparison.whenChoose.service2.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <Check className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Detaillierter Vergleich
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Kriterium</th>
                    <th className="px-6 py-4 text-center font-bold">{service1.title}</th>
                    <th className="px-6 py-4 text-center font-bold">{service2.title}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.criteria.map((criterion, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-bold text-slate-900">{criterion.category}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-slate-700">{criterion.service1Value}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-slate-700">{criterion.service2Value}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Relationship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Wie arbeiten sie zusammen?
            </h2>

            <div className="bg-gradient-to-br from-slate-50 to-brand-50/30 p-8 rounded-2xl border border-brand-100 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {comparison.comparison.typicalCombination}
              </p>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="mr-3 text-brand-400" size={24} />
                Semantische Beziehung
              </h3>
              <p className="text-slate-300">
                <strong className="text-white">Typ:</strong> {comparison.relationship.type === 'complementary' ? 'Komplementär' : comparison.relationship.type === 'alternative' ? 'Alternativ' : comparison.relationship.type === 'overlapping' ? 'Überschneidend' : 'Sequentiell'}
              </p>
              <p className="text-slate-300 mt-4">{comparison.relationship.semanticExplanation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Kosten & Zeitrahmen
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Kostenvergleich</h3>
                <p className="text-slate-600 leading-relaxed">{comparison.comparison.costComparison}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Zeitrahmen</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{service1.title}</p>
                    <p className="text-slate-900 font-medium">{comparison.comparison.timeline.service1}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{service2.title}</p>
                    <p className="text-slate-900 font-medium">{comparison.comparison.timeline.service2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Bereit für Ihre Entscheidung?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Link
                href={`/leistungen/${service1.slug}`}
                className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border-2 border-brand-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mr-4">
                    {service1.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{service1.title}</h3>
                    <p className="text-sm text-slate-500">Mehr erfahren</p>
                  </div>
                </div>
                <div className="flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform">
                  Zur Dienstleistung <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>

              <Link
                href={`/leistungen/${service2.slug}`}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {service2.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{service2.title}</h3>
                    <p className="text-sm text-slate-500">Mehr erfahren</p>
                  </div>
                </div>
                <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                  Zur Dienstleistung <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Unsicher? Holen Sie sich Beratung.</h3>
              <p className="text-slate-300 mb-8">
                Ich helfe Ihnen, die richtige Entscheidung für Ihr Projekt zu treffen.
              </p>
              <a
                href="#contact"
                className="inline-block bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Kostenlose Beratung vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceComparison;
