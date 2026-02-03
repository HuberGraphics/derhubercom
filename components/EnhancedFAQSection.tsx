'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getFAQsByService, getFAQCategories, getFAQsByCategory, FAQItem } from '../data/expandedFAQs';

interface EnhancedFAQSectionProps {
  serviceSlug: string;
  serviceTitle: string;
}

const EnhancedFAQSection: React.FC<EnhancedFAQSectionProps> = ({ serviceSlug, serviceTitle }) => {
  const allFAQs = getFAQsByService(serviceSlug);
  const categories = getFAQCategories(serviceSlug);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categoryLabels: Record<string, string> = {
    all: 'Alle Fragen',
    general: 'Allgemein',
    pricing: 'Preise & Kosten',
    technical: 'Technisch',
    process: 'Prozess & Ablauf'
  };

  const filteredFAQs = selectedCategory === 'all'
    ? allFAQs
    : getFAQsByCategory(serviceSlug, selectedCategory as FAQItem['category']);

  // Generate JSON-LD Schema for FAQPage
  const generateFAQSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFAQs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    return JSON.stringify(schema);
  };

  if (allFAQs.length === 0) {
    return null;
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateFAQSchema() }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Häufig gestellte Fragen zu {serviceTitle}
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Finden Sie Antworten auf die häufigsten Fragen rund um {serviceTitle}.
              Nicht gefunden? Kontaktieren Sie mich gerne für ein persönliches Gespräch.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', ...categories].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-500 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                    aria-expanded={openItems.has(faq.id)}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-slate-900 text-lg leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.has(faq.id) ? (
                        <ChevronUp className="text-brand-500" size={24} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={24} />
                      )}
                    </div>
                  </button>

                  {openItems.has(faq.id) && (
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>

                        {/* Related Services Links */}
                        {faq.relatedServices && faq.relatedServices.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-slate-500 mb-2">Verwandte Dienstleistungen:</p>
                            <div className="flex flex-wrap gap-2">
                              {faq.relatedServices.map(relatedSlug => (
                                <Link
                                  key={relatedSlug}
                                  href={`/leistungen/${relatedSlug}`}
                                  className="inline-flex items-center px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium hover:bg-brand-100 transition-colors"
                                >
                                  {relatedSlug === 'webdesign' && 'Webdesign'}
                                  {relatedSlug === 'webentwicklung' && 'Webentwicklung'}
                                  {relatedSlug === 'ux-design' && 'UX-Design'}
                                  {relatedSlug === 'online-marketing' && 'Online-Marketing'}
                                  {relatedSlug === 'automatisierung' && 'Automatisierung'}
                                  {relatedSlug === 'ki-loesungen' && 'KI-Lösungen'}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Ihre Frage nicht dabei? Ich helfe Ihnen gerne weiter.
              </p>
              <a
                href="#contact"
                className="inline-block bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Jetzt Frage stellen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedFAQSection;
