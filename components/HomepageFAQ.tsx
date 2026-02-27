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
    answer: 'Professionelles Webdesign in Heidelberg beginnt bei mir ab 599 EUR fuer eine kompakte Starter-Website. Die Kosten haengen vom Umfang ab. In einem kostenlosen Erstgespraech besprechen wir Ihre Anforderungen und Sie erhalten ein transparentes Festpreisangebot ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert eine Website-Erstellung?',
    answer: 'Eine typische Unternehmenswebsite ist in 4-6 Wochen fertig. Das umfasst Konzeption, Design, Entwicklung und Feedback-Runden. Einfache Landingpages gehen oft schneller. Bei jedem Projekt bekommen Sie einen klaren Zeitplan.',
  },
  {
    question: 'Wie laeuft der Ablauf vom Erstgespraech bis zum Launch?',
    answer: 'Der Ablauf ist klar strukturiert: 1) Erstgespraech und Zieldefinition, 2) Angebot und Konzept, 3) Design und Entwicklung, 4) Feedback und Feinschliff, 5) Launch. Sie wissen jederzeit, was als naechstes passiert.',
  },
  {
    question: 'Wie laeuft die Betreuung nach dem Launch ab?',
    answer: 'Auch nach dem Livegang bin ich Ihr direkter Ansprechpartner. Auf Wunsch uebernehme ich Updates, technische Pflege, kleine Anpassungen und Support. Umfang und Reaktionszeit stimmen wir transparent auf Ihr Unternehmen ab.',
  },
  {
    question: 'Warum einen lokalen Webdesigner in Heidelberg waehlen?',
    answer: 'Als lokaler Webdesigner in Heidelberg biete ich persoenliche Beratung und schnelle Erreichbarkeit. Sie sprechen direkt mit dem Entwickler, nicht mit einem Call-Center.',
  },
];

const HomepageFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card rounded-lg px-4 py-2 border border-brand-400/20 shadow-sm mb-6">
              <HelpCircle size={16} className="text-brand-500" />
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wide">
                Haeufige Fragen
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              FAQ: Webdesign und Webentwicklung Heidelberg
            </h2>
            <p className="text-lg text-slate-600">
              Antworten auf die haeufigsten Fragen rund um Preis, Dauer, Ablauf und Betreuung.
            </p>
          </div>

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

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Weitere Fragen? Ich helfe gerne persoenlich.</p>
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
