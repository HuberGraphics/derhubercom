import React from 'react';
import { Smartphone, Monitor, MousePointerClick, TrendingUp, Bot, Workflow } from 'lucide-react';

// Base interfaces
export interface ServiceData {
  slug: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  process: { title: string; desc: string }[];

  // NEW: Pillar Content Fields
  pillarContent?: {
    overview: string;          // 300+ word comprehensive overview
    targetAudience: string[];  // Specific user personas
    useCases: UseCase[];       // Practical applications
    technicalSpecs?: TechnicalSpec[];
    portfolio?: string[];      // References to portfolio project slugs
  };

  // NEW: Expertise & Process Fields (instead of Case Studies)
  expertiseContent?: {
    bio: string;               // Short bio
    skills: string[];          // Technologies & Tools
    certifications?: string[]; // Optional certifications
  };

  // Extended process content (optional, overrides basic process if present)
  processContent?: {
    phases: ProcessPhase[];
    timeline: string;
    deliverables: string[];
  };

  // NEW: Topic Cluster Metadata
  clusterInfo?: {
    primaryTopic: string;          // Main topic keyword
    secondaryTopics: string[];     // LSI keywords
    relatedServices: string[];     // Slugs of related services
    comparisonPages?: string[];    // Slugs of comparison pages
  };
}

// Supporting interfaces
export interface UseCase {
  title: string;
  description: string;
  targetAudience: string;
}

export interface TechnicalSpec {
  category: string;
  specs: string[];
}

export interface ProcessPhase {
  name: string;
  duration: string;
  description: string;
  deliverables: string[];
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
    ],
    // NEW: Pillar Content
    pillarContent: {
      overview: `Webdesign ist weit mehr als nur Ästhetik – es ist die Kunst, Benutzererlebnisse zu schaffen, die Besucher zu Kunden wandeln. Als Webdesigner in Heidelberg entwickle ich seit Jahren responsive, barrierefreie und konversionsorientierte Websites, die nicht nur schön aussehen, sondern auch funktionieren.

Mein Ansatz kombiniert modernstes UI-Design mit bewährten UX-Prinzipien. Jedes Projekt beginnt mit einem tiefen Verständnis Ihrer Zielgruppe, ihrer Bedürfnisse und ihres Verhaltens. Diese User-Centric-Methodik stellt sicher, dass jede Design-Entscheidung einen klaren Zweck verfolgt.

Besonders wichtig ist mir das Mobile-First-Prinzip: Da über 70% der Nutzer Websites über Smartphones besuchen, designe ich zuerst für mobile Bildschirme und skaliere dann auf größere Displays hoch. Das garantiert optimale Nutzererfahrung auf allen Geräten.

Ein weiterer Schwerpunkt liegt auf Barrierefreiheit (Accessibility). Webdesign sollte für alle Menschen zugänglich sein – unabhängig von körperlichen Einschränkungen. Das steigert nicht nur die Reichweite, sondern ist auch ein Zeichen von Inklusion und moderner Unternehmensführung.`,
      targetAudience: [
        'Kleine und mittlere Unternehmen (KMU) aus Heidelberg und Rhein-Neckar',
        'Startups und Gründer mit Digitalisierungsbedarf',
        'Local Businesses wie Restaurants, Arztpraxen, Handwerker',
        'Dienstleister und Berater die online gefunden werden wollen',
        'E-Commerce Unternehmen mit Fokus auf Conversion'
      ],
      useCases: [
        {
          title: 'Firmen-Website Relaunch',
          description: 'Modernisierung veralteter Websites mit responsive Design, verbesserter UX und SEO-Optimierung. Steigerung der Ver conversions durch klarere Struktur und professionelles Design.',
          targetAudience: 'Etablierte Unternehmen mit Digitalisierungsrückstand'
        },
        {
          title: 'Gründer-Website',
          description: 'Komplett-Neuentwicklung für Startups und Selbstständige. Von der Logo-entwicklung bis zur go-live Website in 4-6 Wochen. Schnelle Time-to-Market.',
          targetAudience: 'Startups, Freelancer, Gründer'
        },
        {
          title: 'Landing Page für Kampagnen',
          description: 'Hochspezialisierte Landing Pages für Google Ads, Social Media Kampagnen oder Produktlaunches. Fokus auf Conversion und klarer Call-to-Action.',
          targetAudience: 'Marketing-Teams, Agenturen, KMU mit Kampagnen'
        },
        {
          title: 'E-Commerce Design',
          description: 'Konversionsorientierte Shop-Designs mit optimiertem Checkout-Prozess, Vertrauenselementen und mobilem Einkaufserlebnis. Integration mit gängigen Shop-Systemen.',
          targetAudience: 'Online-Händler, Produkt-Unternehmen'
        }
      ],
      technicalSpecs: [
        {
          category: 'Design-Tools',
          specs: ['Figma', 'Adobe XD', 'Adobe Photoshop', 'Illustrator']
        },
        {
          category: 'Design-Prinzipien',
          specs: ['Mobile-First Responsive Design', 'Material Design & Human Interface Guidelines', 'WCAG 2.1 AA Barrierefreiheit', 'Google Core Web Vitals Optimierung']
        },
        {
          category: 'Typografie & Farbe',
          specs: ['Webfont-Integration (Google Fonts, Adobe Fonts)', 'Custom Font-Hosting', 'Farbpsychologie & Branding', 'Dark Mode Support']
        },
        {
          category: 'UI-Komponenten',
          specs: ['Responsive Grids & Layouts', 'Animationen & Micro-interactions', 'Formular-Design mit Validierung', 'Icon-Systeme & Illustrationen']
        }
      ],
      portfolio: ['retireandenjoy', 'paintatlas']
    },
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'Als Webdesigner und Frontend-Entwickler mit Fokus auf Heidelberg und den Rhein-Neckar-Kreis kombiniere ich designästhetische mit technischem Expertise. Seit mehreren Jahren entwickle ich responsive, barrierefreie und konversionsorientierte Websites, die nicht nur schön aussehen, sondern auch Ergebnisse liefern.',
      skills: [
        'UI/UX Design',
        'Responsive Webdesign',
        'Mobile-First Design',
        'Figma & Adobe XD',
        'HTML5, CSS3, Sass/Tailwind',
        'Accessibility (WCAG 2.1)',
        'Design Thinking',
        'Prototyping & Wireframing',
        'Brand Identity Design'
      ]
    },
    // NEW: Extended Process Content
    processContent: {
      timeline: '4-8 Wochen je nach Projektumfang',
      deliverables: [
        'Design-Konzept mit Style Guide',
        'Responsive Screens für alle Breakpoints',
        'Interaktiver Prototyp',
        'Design-Assets (Logos, Icons, Bilder)',
        'Barrierefreiheit-Audit',
        'Handover an Development'
      ],
      phases: [
        {
          name: 'Discovery & Analyse',
          duration: '1 Woche',
          description: 'Kick-off-Workshop, Zielgruppenanalyse, Wettbewerbsanalyse, Definition von Zielen und KPIs.',
          deliverables: ['Briefing-Dokument', 'User Personas', 'Projekt-Ziele', 'Zeitplan']
        },
        {
          name: 'Konzeption & Wireframing',
          duration: '1 Woche',
          description: 'Informationsarchitektur, Sitemap, Low-Fidelity Wireframes, User Flow Mapping.',
          deliverables: ['Sitemap', 'Wireframe-Konzept', 'User Flow Diagramm', 'Content-Strategie']
        },
        {
          name: 'UI-Design',
          duration: '2-3 Wochen',
          description: 'High-Fidelity Designs, Responsive Breakpoints, Design System, Animationen.',
          deliverables: ['Visual Design Mockups', 'Responsive Screens', 'Style Guide', 'Interaktiver Prototyp']
        },
        {
          name: 'Testing & Optimierung',
          duration: '1 Woche',
          description: 'Usability-Testing, Feedback-Runden, Barrierefreiheit-Check, Performance-Optimierung.',
          deliverables: ['Test-Report', 'Optimierte Designs', 'Accessibility-Audit', 'Final Assets']
        },
        {
          name: 'Development Handover',
          duration: '1 Woche',
          description: 'Übergabe an Entwicklung, Design-Support, QA-Testing.',
          deliverables: ['Design-Assets Package', 'Design-Specifikationen', 'Entwickler-Support']
        }
      ]
    },
    // NEW: Topic Cluster Info
    clusterInfo: {
      primaryTopic: 'Webdesign',
      secondaryTopics: [
        'Responsive Webdesign',
        'Mobile-First Design',
        'UI Design',
        'UX Design',
        'Webdesign Heidelberg',
        'Webdesign Kosten',
        'Barrierefreies Webdesign',
        'Webdesign Agentur'
      ],
      relatedServices: ['webentwicklung', 'ux-design'],
      comparisonPages: ['webdesign-vs-webentwicklung', 'webdesign-vs-ux-design']
    }
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
    ],
    // NEW: Pillar Content
    pillarContent: {
      overview: `Moderne Webentwicklung ist die Grundlage jedes erfolgreichen digitalen Projekts. Als Webentwickler in Heidelberg baue ich performante, sichere und skalierbare Webanwendungen mit React, Next.js und modernen CMS-Lösungen.

Mein technischer Schwerpunkt liegt auf Performance-Optimierung und Developer Experience. Ich verwende TypeScript für type-sicheren Code, setze auf Server-Side Rendering (SSR) und Static Site Generation (SSG) für maximale Geschwindigkeit, und integriere nahtlos APIs, Drittsysteme und E-Commerce-Funktionalitäten.

Ein besonderes Augenmerk liegt auf Ladezeiten. Studien zeigen: Jede Sekunde Ladezeit kostet 7% Konversion. Deswegen optimiere ich jeden Aspekt – von Code-Splitting und Lazy Loading über Bildoptimierung bis hin zu CDN-Integration und Caching-Strategien. Das Ergebnis: Websites, die in unter 2 Sekunden laden und perfekte Google Core Web Vitals erzielen.

Auch Sicherheit ist nicht verhandelbar. Ich implementiere Best Practices wie HTTPS, CORS-Policies, Input-Validierung, SQL-Injection-Prävention und regelmäßige Security-Audits. Für Kunden mit Compliance-Anforderungen (DSGVO, HIPAA) setze ich entsprechende Sicherheitsstandards um.`,
      targetAudience: [
        'Startups und tech-affine Gründer mit komplexen Anforderungen',
        'E-Commerce Unternehmen mit shopsystem und Schnittstellen',
        'SaaS-Unternehmen und Plattform-Betreiber',
        'Unternehmen mit Performance-Problemen oder Legacy-Code',
        'Agenturen und Freelancer die Development-Partnerschaft suchen'
      ],
      useCases: [
        {
          title: 'Webanwendung mit React/Next.js',
          description: 'Moderne Single-Page-Applications oder serverseitig gerenderte Apps mit Next.js. Perfekt für Dashboards, Portale oder interaktive Plattformen mit hoher Performance.',
          targetAudience: 'Startups, SaaS-Unternehmen, Tech-Unternehmen'
        },
        {
          title: 'CMS-Integration',
          description: 'Pflegeleange Content-Management-Systeme wie WordPress, Sanity oder Strapi. Headless-Architektur mit API-First-Ansatz für maximale Flexibilität.',
          targetAudience: 'Marketing-Teams, Content-Unternehmen, Verlage'
        },
        {
          title: 'E-Commerce-Entwicklung',
          description: 'Custom Shop-Lösungen oder Integration mit Shopify, WooCommerce. Performance-optimiertes Checkout, Zahlungsschnittstellen, Inventar-Management.',
          targetAudience: 'Online-Händler, D2C-Marken, Produkt-Unternehmen'
        },
        {
          title: 'API-Integrationen',
          description: 'Anbindung von Drittsystemen wie CRM, ERP, Payment-Provider, Shipping-Diensten. RESTful & GraphQL APIs, Webhooks, Datenbank-Integrationen.',
          targetAudience: 'Unternehmen mit Systemlandschaft, B2B-Unternehmen'
        }
      ],
      technicalSpecs: [
        {
          category: 'Frontend',
          specs: ['React 18+, Next.js 14+', 'TypeScript', 'Tailwind CSS', 'Vite', 'State Management (Zustand, Redux)']
        },
        {
          category: 'Backend & API',
          specs: ['Node.js, Express', 'RESTful APIs, GraphQL', 'Next.js API Routes', 'Serverless Functions (Vercel, AWS Lambda)']
        },
        {
          category: 'CMS & Headless',
          specs: ['WordPress (Headless)', 'Sanity.io', 'Strapi', 'Contentful', 'Directus']
        },
        {
          category: 'Performance & SEO',
          specs: ['Core Web Vitals Optimierung', 'Code Splitting & Lazy Loading', 'Bildoptimierung (WebP, AVIF)', 'SSR/SSG/ISR', 'CDN-Integration']
        },
        {
          category: 'Datenbanken',
          specs: ['PostgreSQL, MySQL', 'MongoDB', 'Supabase', 'Prisma ORM']
        },
        {
          category: 'Deployment & DevOps',
          specs: ['Vercel, Netlify, Cloudflare Pages', 'Docker', 'CI/CD Pipelines (GitHub Actions)', 'Monitoring & Analytics']
        }
      ],
      portfolio: ['retireandenjoy', 'paintatlas']
    },
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'Als Full-Stack Webentwickler spezialisiere ich mich auf moderne JavaScript-Ökosysteme mit React, Next.js und TypeScript. Mein Fokus liegt auf der Entwicklung performanter, wartbarer und sicherer Webanwendungen, die technische Exzellenz mit User Experience verbinden.',
      skills: [
        'React & Next.js',
        'TypeScript',
        'Node.js & Express',
        'Tailwind CSS',
        'Headless CMS (Sanity, Strapi, WordPress)',
        'API-Entwicklung (REST, GraphQL)',
        'Performance Optimierung',
        'SEO & Core Web Vitals',
        'Git & CI/CD',
        'Testing (Jest, Playwright)'
      ]
    },
    // NEW: Extended Process Content
    processContent: {
      timeline: '6-12 Wochen je nach Projektumfang',
      deliverables: [
        'Technische Architektur-Dokumentation',
        'Development Environment Setup',
        'Frontend & Backend Code',
        'API-Integrationen',
        'Performance-Optimierung',
        'Security-Audit',
        'Deployment & Monitoring'
      ],
      phases: [
        {
          name: 'Tech-Architektur & Setup',
          duration: '1 Woche',
          description: 'Technologie-Stack-Definition, Datenbank-Design, API-Konzeption, Development-Environment einrichten.',
          deliverables: ['Tech-Spec Dokument', 'Datenbank-Schema', 'API-Konzept', 'Repo-Setup']
        },
        {
          name: 'Core Development',
          duration: '3-6 Wochen',
          description: 'Frontend-Komponenten, Backend-Logik, API-Integrationen, Datenbank-Implementierung, Progressive Enhancement.',
          deliverables: ['Funktionierender MVP', 'API-Endpunkte', 'Datenbank-Setup', 'Core Features']
        },
        {
          name: 'Integration & CMS',
          duration: '2-3 Wochen',
          description: 'CMS-Integration, Content-Modeling, Dynamic Routing, Formular-Logik, Third-Party-Service Integration.',
          deliverables: ['CMS-Setup', 'Content-Modelle', 'Formulare', 'Integrationen']
        },
        {
          name: 'Performance & Security',
          duration: '1-2 Wochen',
          description: 'Performance-Optimierung, Lighthouse-Audits, Security-Hardening, Code-Optimierung, Bundle-Size-Reduktion.',
          deliverables: ['Performance-Report', 'Lighthouse-Score 90+', 'Security-Audit', 'Optimierter Code']
        },
        {
          name: 'Testing & Deployment',
          duration: '1 Woche',
          description: 'QA-Testing, Bug-Fixes, User-Acceptance-Testing, Production-Deployment, Monitoring-Setup.',
          deliverables: ['Test-Report', 'Live-Website', 'Monitoring-Dashboard', 'Dokumentation']
        }
      ]
    },
    // NEW: Topic Cluster Info
    clusterInfo: {
      primaryTopic: 'Webentwicklung',
      secondaryTopics: [
        'Frontend Entwicklung',
        'React Entwicklung',
        'Next.js Entwicklung',
        'Webentwicklung Heidelberg',
        'CMS Entwicklung',
        'API Entwicklung',
        'E-Commerce Entwicklung',
        'Performance Optimierung'
      ],
      relatedServices: ['webdesign', 'ux-design'],
      comparisonPages: ['webdesign-vs-webentwicklung', 'automatisierung-vs-ki-loesungen']
    }
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
    ],
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'UX/UI Designer mit Fokus auf intuitive Benutzerführung und Conversion-Optimierung in Heidelberg. Ich kombiniere nutzerzentrierte Design-Methoden mit datengetriebenen Entscheidungen, um Websites zu entwickeln, die nicht nur schön aussehen, sondern messbare Ergebnisse liefern.',
      skills: [
        'User Research',
        'Prototyping',
        'Figma',
        'Usability Testing',
        'Customer Journey Mapping',
        'Interaction Design',
        'Wireframing',
        'Accessibility',
        'A/B Testing',
        'Information Architecture'
      ]
    }
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
    ],
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'Digital Marketing Spezialist mit Erfahrung in Local SEO, Google Ads und Content-Strategie für regionale Unternehmen. Mein Fokus liegt darauf, messbare Ergebnisse zu liefern und ROI zu maximieren durch datengetriebene Marketing-Strategien.',
      skills: [
        'Local SEO',
        'Google Ads',
        'Social Media Marketing',
        'Content Marketing',
        'Google Analytics',
        'Conversion Rate Optimization',
        'Keyword Research',
        'Link Building',
        'E-Mail Marketing'
      ]
    }
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
    ],
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'Workflow Automations-Experte mit Erfahrung in Integration und Prozessoptimierung für KMU. Ich helfe Unternehmen dabei, repetitive Aufgaben zu automatisieren und so Zeit und Ressourcen freizusetzen für strategische Aufgaben.',
      skills: [
        'Zapier/Make',
        'E-Mail Automation',
        'API Integration',
        'CRM-Systeme',
        'No-Code Tools',
        'Prozessautomatisierung',
        'Datenmigration',
        'Webhooks',
        'Workflow Design'
      ]
    }
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
    ],
    // NEW: Expertise Content
    expertiseContent: {
      bio: 'KI-Berater und Implementierer mit Fokus auf praktische Unternehmensanwendungen und Automatisierung. Ich helfe KMU dabei, die Vorteile künstlicher Intelligenz zu nutzen, ohne komplexe technische Infrastruktur aufzubauen.',
      skills: [
        'KI-Chatbots',
        'Prompt Engineering',
        'Machine Learning Basics',
        'NLP',
        'API-Integration',
        'Data Analysis',
        'KI-Strategie',
        'Automation mit KI',
        'OpenAI APIs'
      ]
    }
  },
];