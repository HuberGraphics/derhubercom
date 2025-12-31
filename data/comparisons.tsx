/**
 * Service Comparisons Data
 *
 * Defines comparison pages for services to capture high commercial intent traffic.
 * Comparisons help users understand differences and make informed decisions.
 */

export interface ComparisonData {
  slug: string;                    // URL slug: "webdesign-vs-webentwicklung"
  service1: string;                // Service slug 1
  service2: string;                // Service slug 2
  title: string;                   // Page title
  description: string;             // Meta description

  comparison: {
    focus: string;                 // What each service focuses on
    whenChoose: {
      service1: string[];          // When to choose service 1
      service2: string[];          // When to choose service 2
    };
    typicalCombination: string;    // How they're often used together
    costComparison: string;        // Cost comparison
    timeline: {
      service1: string;            // Typical timeline for service1
      service2: string;            // Typical timeline for service2
    };
  };

  criteria: {
    category: string;
    service1Value: string;
    service2Value: string;
    winner?: 'service1' | 'service2' | 'tie';
  }[];

  relationship: {
    type: 'complementary' | 'alternative' | 'overlapping' | 'sequential';
    semanticExplanation: string;
  };
}

export const comparisonsData: ComparisonData[] = [
  {
    slug: 'webdesign-vs-webentwicklung',
    service1: 'webdesign',
    service2: 'webentwicklung',
    title: 'Webdesign vs. Webentwicklung',
    description: 'Was ist der Unterschied zwischen Webdesign und Webentwicklung? Wann brauchen Sie was? Eine klare Entscheidungshilfe.',
    comparison: {
      focus: 'Webdesign konzentriert sich auf visuelle Gestaltung und User Experience, während Webentwicklung die technische Implementierung und Programmierung umfasst.',
      whenChoose: {
        service1: [
          'Sie benötigen visuelle Konzeption und Branding',
          'User Experience und Benutzerführung stehen im Vordergrund',
          'Wireframing, Prototyping und UI-Design benötigt',
          'Bestehende Website soll visuell überarbeitet werden'
        ],
        service2: [
          'Technische Funktionalität und Interaktivität erforderlich',
          'Datenbanken, APIs oder komplexe Logik notwendig',
          'Performance und technische Optimierung gefragt',
          'Bestehendes Design soll technisch umgesetzt werden'
        ]
      },
      typicalCombination: 'Die meisten professionellen Websites benötigen beides: Webdesign für die visuelle Konzeption und Webentwicklung für die technische Umsetzung. Oft arbeiten Designer und Entwickler eng zusammen.',
      costComparison: 'Webdesign: 1.500€ - 8.000€ | Webentwicklung: 2.000€ - 20.000€+. Komplette Projekte (Design + Development) typischerweise 5.000€ - 30.000€.',
      timeline: {
        service1: '2-6 Wochen für professionelles Webdesign',
        service2: '4-12 Wochen für Webentwicklung, abhängig von Komplexität'
      }
    },
    criteria: [
      {
        category: 'Fokus',
        service1Value: 'Visuelle Gestaltung, UI/UX, Branding',
        service2Value: 'Technische Umsetzung, Programmierung, Funktionen'
      },
      {
        category: 'Hauptaufgaben',
        service1Value: 'Layout, Farben, Typografie, Benutzerführung',
        service2Value: 'Datenbanken, APIs, Server-Logik, Performance'
      },
      {
        category: 'Typische Tools',
        service1Value: 'Figma, Adobe XD, Photoshop, Illustrator',
        service2Value: 'VS Code, React, Next.js, Node.js, Datenbanken'
      },
      {
        category: 'Auslieferung',
        service1Value: 'Design-Dateien, Style Guide, Prototypen',
        service2Value: 'Funktionsfähige Website/Anwendung, Code, Deployment'
      },
      {
        category: 'Skillset',
        service1Value: 'Kreativität, Design-Theorie, Ästhetik, User Research',
        service2Value: 'Logisches Denken, Programmierung, Problemlösung, Architektur'
      },
      {
        category: 'Messbarer Erfolg',
        service1Value: 'Conversion Rate, Verweildauer, User Satisfaction',
        service2Value: 'Ladezeiten, Uptime, Bug-Freiheit, Performance Scores'
      }
    ],
    relationship: {
      type: 'complementary',
      semanticExplanation: 'Webdesign und Webentwicklung sind komplementär: Design erstellt die visuelle Erfahrung, Development bringt sie zur Leben. Die besten Websites kombinieren beides.'
    }
  },
  {
    slug: 'webdesign-vs-ux-design',
    service1: 'webdesign',
    service2: 'ux-design',
    title: 'Webdesign vs. UX-Design',
    description: 'Webdesign oder UX-Design: Was ist besser? Verstehen Sie die Unterschiede zwischen visueller Gestaltung und User Experience.',
    comparison: {
      focus: 'Webdesign ist visuelle Gestaltung für digitale Medien, UX-Design ist ein breiterer Ansatz für die gesamte Benutzererfahrung über alle Touchpoints hinweg.',
      whenChoose: {
        service1: [
          'Visuelle Gestaltung für Websites und Apps benötigt',
          'Branding, Farben, Layouts im Fokus',
          'Website-spezifische Anforderungen',
          'Screen-basierte digitale Produkte'
        ],
        service2: [
          'Gesamte User Journey optimieren',
          'User Research und Usability-Testing durchführen',
          'Produktstrategie und User-Centered Design',
          'Omnichannel-Erfahrungen (Digital & Physical)'
        ]
      },
      typicalCombination: 'UX-Design sollte idealerweise vor Webdesign kommen: User Research und Personas informieren Design-Entscheidungen. Praktisch arbeiten UX-Designer und Webdesigner oft zusammen.',
      costComparison: 'Webdesign: 1.500€ - 8.000€ | UX-Design (Research): 2.000€ - 10.000€. Kombinierte UX+Design Projekte: 5.000€ - 20.000€.',
      timeline: {
        service1: '2-6 Wochen für Webdesign',
        service2: '3-8 Wochen für UX-Design mit Research und Testing'
      }
    },
    criteria: [
      {
        category: 'Fokus',
        service1Value: 'Visuelles Design für Screens',
        service2Value: 'Gesamte Benutzererfahrung über alle Touchpoints'
      },
      {
        category: 'Scope',
        service1Value: 'Websites, Apps, Interfaces',
        service2Value: 'Digital, Physical, Service Design, Strategy'
      },
      {
        category: 'Methoden',
        service1Value: 'Wireframing, UI-Design, Prototyping, Branding',
        service2Value: 'User Research, Persona Development, Journey Mapping, Usability Testing'
      },
      {
        category: 'Deliverables',
        service1Value: 'Screens, Mockups, Design-Systems, Assets',
        service2Value: 'Research Reports, Personas, Journey Maps, Wireframes, Test Results'
      },
      {
        category: 'Fragestellung',
        service1Value: 'Wie sieht es aus?',
        service2Value: 'Wie funktioniert es und fühlt es sich an?'
      },
      {
        category: 'Beginn',
        service1Value: 'Nach UX-Research oder mit bestehenden Brand',
        service2Value: 'Am Projektstart vor visuellem Design',
        winner: 'service2'
      }
    ],
    relationship: {
      type: 'sequential',
      semanticExplanation: 'UX-Design ist typischerweise der erste Schritt: Research und Konzeption bilden das Foundation. Webdesign ist die visuelle Ausführung basierend auf UX-Erkenntnissen.'
    }
  },
  {
    slug: 'automatisierung-vs-ki-loesungen',
    service1: 'automatisierung',
    service2: 'ki-loesungen',
    title: 'Automatisierung vs. KI-Lösungen',
    description: 'Business Automation oder KI? Welcher Ansatz passt zu Ihrem Unternehmen? Vergleichen Sie Automatisierung und Künstliche Intelligenz.',
    comparison: {
      focus: 'Automatisierung optimiert wiederkehrende Prozesse mit regelbasierten Workflows. KI-Lösungen ergänzen dies mit intelligenter Entscheidungsfindung und Mustererkennung.',
      whenChoose: {
        service1: [
          'Wiederkehrende Aufgaben automatisieren',
          'Klar definierte Prozesse mit festen Regeln',
          'System-Integrationen und Datenfluss optimieren',
          'Zeitersparnis bei Routine-Tätigkeiten'
        ],
        service2: [
          'Intelligente Analyse und Entscheidungen benötigen',
          'Große Datenmengen analysieren und Muster erkennen',
          'Chatbots oder Content-Erstellung mit KI',
          'Predictive Analytics oder Empfehlungssysteme'
        ]
      },
      typicalCombination: 'Die Kombination ist mächtig: Automatisierung als Backbone für Prozesse, KI als intelligente Schicht für Entscheidungen. Beispiel: Automatisierter Workflow mit KI-basierter Klassifizierung.',
      costComparison: 'Automatisierung: 1.000€ - 10.000€ | KI-Lösungen: 2.000€ - 15.000€+. Kombinierte Projekte: 5.000€ - 30.000€.',
      timeline: {
        service1: '2-6 Wochen für Automatisierungs-Projekte',
        service2: '4-10 Wochen für KI-Integrationen'
      }
    },
    criteria: [
      {
        category: 'Art der Aufgaben',
        service1Value: 'Regelbasiert, vorhersehbar, wiederkehrend',
        service2Value: 'Komplex, musterhaft, entscheidungsintensiv'
      },
      {
        category: 'Intelligenz',
        service1Value: 'Fix programmierte Regeln und Logic',
        service2Value: 'Lernende Algorithmen, Mustererkennung, Vorhersagen'
      },
      {
        category: 'Typische Use Cases',
        service1Value: 'E-Mail Automation, CRM Sync, Terminbuchung, Workflows',
        service2Value: 'Chatbots, Content-Generierung, Datenanalyse, Predictive Models'
      },
      {
        category: 'Flexibilität',
        service1Value: 'Anpassung erfordert Code-Änderungen',
        service2Value: 'KI lernt und adaptiert sich mit neuen Daten',
        winner: 'service2'
      },
      {
        category: 'Transparenz',
        service1Value: 'Logik ist nachvollziehbar und erklärbar',
        service2Value: 'KI-Entscheidungen sind oft "Black Box"',
        winner: 'service1'
      },
      {
        category: 'Initialaufwand',
        service1Value: 'Geringer bis mittel, abhängig von Komplexität',
        service2Value: 'Höher, durch Training und Fine-Tuning',
        winner: 'service1'
      }
    ],
    relationship: {
      type: 'complementary',
      semanticExplanation: 'Automatisierung und KI arbeiten idealerweise zusammen: Automatisierung liefert die Prozess-Struktur, KI fügt Intelligenz hinzu. Sie verstärken sich gegenseitig.'
    }
  }
];

/**
 * Helper function to get comparison by slug
 */
export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisonsData.find(c => c.slug === slug);
}

/**
 * Helper function to get all comparison slugs for static params
 */
export function getAllComparisonSlugs(): string[] {
  return comparisonsData.map(c => c.slug);
}

/**
 * Helper function to get comparisons for a specific service
 */
export function getComparisonsForService(serviceSlug: string): ComparisonData[] {
  return comparisonsData.filter(c => c.service1 === serviceSlug || c.service2 === serviceSlug);
}

/**
 * Helper function to get related comparisons
 */
export function getRelatedComparisons(service1Slug: string, service2Slug: string): ComparisonData[] {
  const service1Comparisons = getComparisonsForService(service1Slug);
  const service2Comparisons = getComparisonsForService(service2Slug);
  const combined = [...service1Comparisons, ...service2Comparisons];

  // Remove current comparison and duplicates
  const currentSlug = `${service1Slug}-vs-${service2Slug}`;
  return combined
    .filter(c => c.slug !== currentSlug)
    .filter((c, index, self) => index === self.findIndex(t => t.slug === c.slug));
}
