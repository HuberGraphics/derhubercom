'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Was kostet Webdesign in Heidelberg?',
    answer: 'Professionelles Webdesign in Heidelberg beginnt bei mir ab 599€ für eine kompakte Starter-Website. Die Kosten hängen vom Umfang ab: Eine einfache One-Page-Website kostet weniger als ein umfangreicher Online-Shop. In einem kostenlosen Erstgespräch besprechen wir Ihre Anforderungen und ich erstelle ein transparentes Festpreisangebot – ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert eine Website-Erstellung?',
    answer: 'Eine typische Unternehmenswebsite ist in 4-6 Wochen fertig. Das umfasst Konzeption, Design, Entwicklung und Ihre Feedback-Runden. Einfache Landing Pages können auch schneller realisiert werden. Größere Projekte mit vielen Unterseiten oder Shop-Funktionen dauern entsprechend länger. Bei jedem Projekt bekommen Sie einen klaren Zeitplan.',
  },
  {
    question: 'Warum einen lokalen Webdesigner in Heidelberg wählen?',
    answer: 'Als lokaler Webdesigner in Heidelberg biete ich persönliche Beratung vor Ort – kein anonymes Call-Center. Ich verstehe die Bedürfnisse von KMU im Rhein-Neckar-Kreis und bin schnell erreichbar. Bei Fragen oder Änderungswünschen haben Sie einen direkten Ansprechpartner statt langer Ticket-Warteschleifen.',
  },
  {
    question: 'Welche Leistungen bietet Der Huber an?',
    answer: 'Ich biete das komplette Paket für Ihre Online-Präsenz: Webdesign (UI/UX), Webentwicklung mit React und Next.js, WordPress-Entwicklung, lokales SEO für Heidelberg und Umgebung, sowie Automatisierungen und KI-Lösungen. Von der ersten Beratung bis zur fertigen Website und darüber hinaus – alles aus einer Hand.',
  },
];

const HomepageFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD Schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 border border-brand-400/20 shadow-sm mb-6">
              <HelpCircle size={16} className="text-brand-500" />
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">
                Häufige Fragen
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              FAQ: Webdesign Heidelberg
            </h2>
            <p className="text-lg text-slate-600">
              Antworten auf die häufigsten Fragen rund um Webdesign und Webentwicklung.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-brand-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Weitere Fragen? Ich helfe gerne persönlich.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
