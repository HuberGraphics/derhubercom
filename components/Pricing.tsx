import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingCard: React.FC<{
  title: string;
  description: string;
  price: number;
  priceNote: string;
  features: Array<{ text: string; highlighted?: boolean }>;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  isBestseller?: boolean;
  badge?: string;
}> = ({
  title,
  description,
  price,
  priceNote,
  features,
  buttonText,
  buttonVariant,
  isBestseller = false,
  badge
}) => {
  const baseClasses = `bg-white p-8 lg:p-10 rounded-2xl border border-slate-200 transition-base relative`;
  const bestsellerClasses = isBestseller
    ? 'shadow-lg border-brand-200 hover:shadow-xl hover-lift'
    : 'shadow-sm hover:shadow-card hover-lift';

  const buttonClasses = buttonVariant === 'primary'
    ? 'block w-full text-center bg-brand-400 hover:bg-brand-300 text-slate-950 font-semibold py-3.5 rounded-xl transition-base shadow-brand-subtle hover:shadow-button-hover focus-ring'
    : 'block w-full text-center border border-slate-200 hover:border-brand-400 hover:bg-brand-400 hover:text-slate-950 text-slate-900 font-semibold py-3.5 rounded-xl transition-base focus-ring';

  return (
    <div className={`${baseClasses} ${bestsellerClasses}`}>
      {/* Bestseller Badge */}
      {isBestseller && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide flex items-center shadow-subtle z-10">
          <Star size={12} className="mr-1.5 fill-current" />
          Bestseller
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10">
        {/* Title */}
        <h4 className="text-xl font-semibold text-slate-900 mb-3">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Price Section */}
        <div className="mb-8 text-center">
          <div className="text-4xl font-bold text-slate-900 tracking-tight">
            {price.toLocaleString('de-DE')} €
          </div>
          <span className="text-slate-400 text-sm font-medium">einmalig</span>
          <div className="text-sm text-slate-500 mt-2 font-medium">
            {priceNote}
          </div>
        </div>

        {/* CTA Button */}
        <a href="#contact" className={`${buttonClasses} mb-10`}>
          {buttonText}
        </a>

        {/* Features List */}
        <ul className="space-y-3 text-sm text-slate-700">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check
                size={18}
                className="text-brand-500 flex-shrink-0 mr-3 mt-0.5"
              />
              <span className={feature.highlighted ? 'font-semibold text-slate-900' : ''}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Additional Badge */}
        {badge && (
          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-brand-600 font-semibold text-center tracking-wide uppercase">
            {badge}
          </div>
        )}
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Starter Website',
      description: 'Für Gründer und kleine Unternehmen, die schnell sichtbar sein wollen.',
      price: 599,
      priceNote: '+ 99 € monatlich (Hosting & Service)',
      buttonText: 'Jetzt anfragen',
      buttonVariant: 'secondary' as const,
      features: [
        { text: '1–3 Seiten' },
        { text: 'Modernes Design' },
        { text: 'Kontaktformular' },
        { text: 'Hosting inklusive' },
        { text: 'Fertig in ca. 2 Wochen' }
      ]
    },
    {
      title: 'Smart Website',
      description: 'Unser Bestseller für professionelle Kundengewinnung.',
      price: 1299,
      priceNote: '+ 249 € monatlich (Hosting & Service)',
      buttonText: 'Jetzt sichern',
      buttonVariant: 'primary' as const,
      isBestseller: true,
      badge: 'Limitiert für die nächsten 3 Kunden',
      features: [
        { text: 'Alles aus Starter', highlighted: true },
        { text: '3–5 Seiten, Individuelles Design' },
        { text: 'Terminbuchungssystem' },
        { text: 'Anfrage-Management' },
        { text: 'Basis-Chatbot' },
        { text: 'Kunden-Dashboard' },
        { text: 'Fertig in ca. 4 Wochen' }
      ]
    },
    {
      title: 'Premium Growth',
      description: 'Maximale Automatisierung und Skalierung für Ihr Business.',
      price: 2499,
      priceNote: '+ 399 € monatlich (Hosting & Service)',
      buttonText: 'Jetzt starten',
      buttonVariant: 'secondary' as const,
      features: [
        { text: 'Alles aus Smart', highlighted: true },
        { text: '5–10 Seiten, Conversion-Optimiert' },
        { text: 'CRM-Anbindung & E-Mail-Sequenzen' },
        { text: 'Erweiterter KI-Chatbot' },
        { text: 'Online-Zahlungssystem' },
        { text: 'Premium-Support' }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-brand-100 rounded-full mb-6">
            <span className="text-brand-700 font-semibold text-xs uppercase tracking-wide">Preise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Unsere Website-Pakete
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Finden Sie das Paket, das zu Ihrem Unternehmen passt – von der schnellen Starter-Lösung bis zum umfassenden Premium-Auftritt.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;