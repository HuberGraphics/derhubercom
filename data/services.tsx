import React from 'react';
import { Smartphone, Monitor, MousePointerClick, TrendingUp, Bot, Workflow } from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  process: { title: string; desc: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'webdesign',
    title: 'Webdesign',
    icon: <Smartphone size={28} />,
    shortDesc: 'Professionelles Webdesign Heidelberg. Moderne, responsive Websites die Ihre Kunden begeistern und Vertrauen schaffen.',
    fullDesc: 'Ihr digitaler erste Eindruck entscheidet oft in Sekunden. Als erfahrener Webdesigner in Heidelberg entwickle ich Websites, die nicht nur visuell beeindrucken, sondern Ihre Markenidentität perfekt widerspiegeln. Ich setze auf klare Strukturen, emotionale Bildsprache und ein Design, das Ihre Zielgruppe dort abholt, wo sie steht.',
    features: ['Mobile-First Design', 'UI/UX Konzeption', 'Branding & Corporate Identity', 'Barrierefreiheit'],
    benefits: [
      'Höhere Glaubwürdigkeit bei Neukunden',
      'Perfekte Darstellung auf Smartphones & Tablets',
      'Abgrenzung von regionalen Wettbewerbern',
      'Steigerung der Anfragen durch klare Führung'
    ],
    process: [
      { title: 'Analyse', desc: 'Wir definieren Ihre Zielgruppe und die Ziele der Website.' },
      { title: 'Wireframing', desc: 'Grobe Skizzierung der Struktur und Inhalte.' },
      { title: 'Design', desc: 'Ausarbeitung des visuellen Designs mit Ihren Markenfarben.' },
      { title: 'Umsetzung', desc: 'Technische Realisierung des Designs.' }
    ]
  },
  {
    slug: 'webentwicklung',
    title: 'Webentwicklung',
    icon: <Monitor size={28} />,
    shortDesc: 'Technisch ausgereifte Websites, CMS, schnelle Ladezeiten und stabiler Code.',
    fullDesc: 'Design ist nichts ohne Funktion. Ich programmiere moderne Webanwendungen und Websites, die blitzschnell laden, sicher sind und sich kinderleicht verwalten lassen. Egal ob individuelle React-Anwendung oder pflegeleichtes CMS – ich liefere sauberen Code, der auch morgen noch funktioniert.',
    features: ['React & Next.js Entwicklung', 'CMS Integration (WordPress, Sanity)', 'API Anbindungen', 'Performance Optimierung'],
    benefits: [
      'Extrem schnelle Ladezeiten (Google Core Web Vitals)',
      'Einfache Inhaltspflege für Ihr Team',
      'Zukunftssichere Technologie',
      'Hohe Sicherheit gegen Angriffe'
    ],
    process: [
      { title: 'Tech-Stack Wahl', desc: 'Auswahl der besten Technologie für Ihr Projekt.' },
      { title: 'Development', desc: 'Programmierung der Komponenten und Logik.' },
      { title: 'Testing', desc: 'Ausführliche Tests auf verschiedenen Geräten.' },
      { title: 'Deployment', desc: 'Live-Schaltung auf Hochleistungsservern.' }
    ]
  },
  {
    slug: 'ux-design',
    title: 'UX-Design',
    icon: <MousePointerClick size={28} />,
    shortDesc: 'Nutzerfreundliche Websites die Besucher zu Kunden machen durch durchdachte Benutzerführung.',
    fullDesc: 'User Experience (UX) Design ist der Schlüssel zu hohen Konversionsraten. Ich analysiere, wie sich Ihre Nutzer verhalten, und gestalte Prozesse so einfach wie möglich. Keine unnötigen Klicks, keine Verwirrung – nur ein gerader Weg zur Kontaktaufnahme.',
    features: ['User Research', 'Customer Journey Mapping', 'Prototyping', 'Usability Testing'],
    benefits: [
      'Mehr Anfragen bei gleicher Besucherzahl',
      'Weniger Abbruchraten im Kaufprozess',
      'Höhere Kundenzufriedenheit',
      'Intuitive Bedienung der Website'
    ],
    process: [
      { title: 'Recherche', desc: 'Verstehen der Nutzerbedürfnisse.' },
      { title: 'Konzept', desc: 'Erstellung von User Flows.' },
      { title: 'Prototyp', desc: 'Klickbare Voransicht der Anwendung.' },
      { title: 'Optimierung', desc: 'Feinschliff basierend auf Tests.' }
    ]
  },
  {
    slug: 'online-marketing',
    title: 'Online-Marketing',
    icon: <TrendingUp size={28} />,
    shortDesc: 'SEO, Google Ads und Social Media Marketing für bessere Sichtbarkeit in Heidelberg und Umgebung.',
    fullDesc: 'Die schönste Website bringt nichts, wenn sie niemand findet. Mit gezieltem Online-Marketing sorge ich dafür, dass Sie in Heidelberg und dem Rhein-Neckar-Kreis sichtbar werden. Von lokaler Suchmaschinenoptimierung (SEO) bis zu profitablen Google Ads Kampagnen.',
    features: ['Local SEO Heidelberg', 'Google Ads Kampagnen', 'Social Media Strategie', 'Content Marketing'],
    benefits: [
      'Top-Platzierungen bei Google',
      'Messbarer ROI durch Tracking',
      'Gezielte Ansprache Ihrer Wunschkunden',
      'Nachhaltiger Traffic-Aufbau'
    ],
    process: [
      { title: 'Audit', desc: 'Analyse des Ist-Zustands und der Konkurrenz.' },
      { title: 'Strategie', desc: 'Entwicklung eines Marketing-Plans.' },
      { title: 'Umsetzung', desc: 'Erstellung von Content und Anzeigen.' },
      { title: 'Reporting', desc: 'Monatliche Auswertung der Erfolge.' }
    ]
  },
  {
    slug: 'automatisierung',
    title: 'Automatisierung',
    icon: <Workflow size={28} />,
    shortDesc: 'Chatbots, Anfrage-Management und Buchungssysteme für effizientere Geschäftsprozesse.',
    fullDesc: 'Sparen Sie Zeit und Geld, indem Sie wiederkehrende Aufgaben automatisieren. Ich verbinde Ihre Website mit Ihrem CRM, richte automatische E-Mail-Antworten ein oder implementiere Buchungssysteme, die Ihnen die Terminplanung abnehmen.',
    features: ['Zapier / Make Integrationen', 'E-Mail Automation', 'Digitale Terminbuchung', 'CRM Anbindung'],
    benefits: [
      'Enorme Zeitersparnis im Alltag',
      'Fehlervermeidung durch Automatisierung',
      'Schnellere Reaktionszeiten für Kunden',
      'Skalierbare Prozesse'
    ],
    process: [
      { title: 'Prozess-Analyse', desc: 'Identifikation von Zeitfressern.' },
      { title: 'Tool-Auswahl', desc: 'Wahl der passenden Software.' },
      { title: 'Implementierung', desc: 'Einrichtung der Workflows.' },
      { title: 'Schulung', desc: 'Einweisung in das neue System.' }
    ]
  },
  {
    slug: 'ki-loesungen',
    title: 'KI-Lösungen',
    icon: <Bot size={28} />,
    shortDesc: 'Intelligente KI-Beratung, Implementierung und Schulungen für Ihr Unternehmen.',
    fullDesc: 'Nutzen Sie die Kraft künstlicher Intelligenz für Ihr Unternehmen. Ich berate Sie zu sinnvollen Einsatzmöglichkeiten von KI, integriere intelligente Chatbots auf Ihrer Website oder zeige Ihnen, wie Sie mit Tools wie ChatGPT Ihre Produktivität steigern.',
    features: ['KI-Chatbots', 'Prompt Engineering Workshops', 'Content-Erstellung mit KI', 'Datenanalyse'],
    benefits: [
      '24/7 Kundenservice durch KI-Bots',
      'Effizientere Content-Erstellung',
      'Wettbewerbsvorteil durch Innovation',
      'Reduzierung von Personalkosten'
    ],
    process: [
      { title: 'Consulting', desc: 'Potenzialanalyse für KI in Ihrer Firma.' },
      { title: 'Konzept', desc: 'Planung der KI-Integration.' },
      { title: 'Integration', desc: 'Technische Einbindung der Modelle.' },
      { title: 'Training', desc: 'Anpassung der KI auf Ihre Daten.' }
    ]
  },
];