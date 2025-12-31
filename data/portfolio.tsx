/**
 * Portfolio Projects Data
 *
 * Project examples to demonstrate expertise and capabilities.
 * These are used in the Portfolio Section of service detail pages.
 */

export interface PortfolioProject {
  id: string;
  slug: string;                    // URL-friendly identifier
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  url: string;

  // Project details
  projectType: string;
  duration: string;
  role: string;

  // Technologies & Features
  technologies: string[];
  features: string[];

  // Results & Challenges
  challenges: string[];
  solutions: string[];
  results: string[];

  // Related services
  relevantServices: string[];      // Slugs of services this project demonstrates

  // Optional: Client info (can be omitted for privacy)
  client?: {
    type: string;                  // e.g., "Startup", "E-Commerce", "Publisher"
    industry: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'retireandenjoy',
    slug: 'retireandenjoy',
    title: 'RetireAndEnjoy.com',
    category: 'Informationsplattform & Content-Website',
    shortDescription: 'Umfassende Informationsplattform für Personen im Ruhestand mit Hunderten von Artikeln, SEO-Optimierung und responsive Design.',
    fullDescription: `
RetireAndEnjoy ist eine umfassende Content-Plattform für Senioren und Personen im Ruhestand. Die Website bietet wertvolle Ressourcen, Guides und Tipps für ein erfülltes Leben nach dem Berufsleben.

**Herausforderungen:**
- Große Mengen an Content müssen organisiert und leicht auffindbar sein
- Zielgruppe mit speziellen UX-Anforderungen (Ältere Menschen)
- SEO-Optimierung für wettbewerbsstarke Keywords
- Schnelle Ladezeiten trotz umfangreichem Content

**Lösungen:**
- Clear Information Architecture mit intuitiver Navigation
- Large Touch Targets und hohe Kontraste für bessere Lesbarkeit
- Schema.org Markup für Rich Snippets in Suchergebnissen
- Performance-Optimierung mit Lazy Loading und Bildkomprimierung

**Ergebnisse:**
- Hunderte gut strukturierter Artikel und Guides
- Responsive Design für alle Geräte
- SEO-optimiert für bessere Sichtbarkeit
- Barrierefreies Design für seniors
    `,
    image: '/images/retireandenjoy.png',
    url: 'https://retireandenjoy.com',

    projectType: 'Content-Plattform mit CMS',
    duration: '6-8 Wochen',
    role: 'Webdesign & Webentwicklung',

    technologies: [
      'React',
      'Next.js',
      'CMS (WordPress/Headless)',
      'SEO-Optimierung',
      'Responsive Design',
      'Performance Optimization'
    ],
    features: [
      'Hunderte Artikel mit Kategorisierung',
      'SEO-optimierte Content-Struktur',
      'Responsive Mobile-First Design',
      'Barrierefreiheit (Accessibility)',
      'Schnelle Ladezeiten (< 2s)',
      'Suchfunktion & Filter',
      'Social Media Integration'
    ],
    challenges: [
      'Große Content-Mengen organisieren',
      'Senioren-gerechte UX gestalten',
      'Wettbewerbsintensive SEO-Keywords',
      'Performance bei vielen Artikeln'
    ],
    solutions: [
      'Clear Information Architecture',
      'Large Fonts & High Contrast',
      'Schema.org Markup & Sitemap',
      'Lazy Loading & Caching'
    ],
    results: [
      'Skalierbare Content-Struktur',
      'Senior-freundliche UX',
      'SEO-freundliche Architektur',
      'Core Web Vitals "Good"'
    ],
    relevantServices: ['webdesign', 'webentwicklung', 'ux-design', 'online-marketing'],
    client: {
      type: 'Content-Plattform',
      industry: 'Publishing / Lifestyle'
    }
  },
  {
    id: 'paintatlas',
    slug: 'paintatlas',
    title: 'PaintAtlas.com',
    category: 'Produkt-Verzeichnis & Datenbank-Plattform',
    shortDescription: 'Umfassendes Farb-Verzeichnis mit über 15.000 Farben, Advanced Filtering, Performance-optimiert und Cross-Platform.',
    fullDescription: `
PaintAtlas ist ein umfangreiches Verzeichnis für Hobby-Maler und Künstler mit über 15.000 Farben. Die Plattform ermöglicht das Suchen, Vergleichen und Finden der perfekten Farben für verschiedene Projekte.

**Herausforderungen:**
- Große Datenbank mit 15.000+ Produkten muss schnell durchsuchbar sein
- Komplexe Filter- und Sortierfunktionen
- Performance-Optimierung bei vielen Datensätzen
- Cross-Platform Kompatibilität

**Lösungen:**
- Optimierte Datenbank-Abfragen und Indizierung
- Advanced Filtering mit facettierter Suche
- Client-Side Caching und Debouncing
- Responsive Design für alle Geräte
- Optimistische UI Updates für bessere UX

**Ergebnisse:**
- Schnelle Suchergebnisse trotz großer Datenbank
- Intuitive Filter- und Vergleichsfunktionen
- Perfektes Mobile Experience
- Hohe User Engagement & Conversion
    `,
    image: '/images/paintatlas.png',
    url: 'https://paintatlas.com',

    projectType: 'Datenbank-Plattform mit Filter-System',
    duration: '8-10 Wochen',
    role: 'Webentwicklung & Performance-Optimierung',

    technologies: [
      'React',
      'Datenbank-Design',
      'Performance Optimization',
      'Advanced Filtering',
      'API-Entwicklung',
      'Cross-Platform Development'
    ],
    features: [
      '15.000+ Farben in der Datenbank',
      'Advanced Filtering & Search',
      'Farbvergleich & Favoriten',
      'Responsive Mobile Interface',
      'Schnelle Ladezeiten',
      'Cross-Platform Support'
    ],
    challenges: [
      '15.000+ Produkte performant durchsuchen',
      'Komplexe Filter-Logik',
      'Datenbank-Optimierung',
      'Mobile Performance'
    ],
    solutions: [
      'Datenbank-Indizierung',
      'Faceted Search Algorithm',
      'Server-Side Pagination',
      'Progressive Loading'
    ],
    results: [
      'Schnelle Suchergebnisse (< 500ms)',
      'Intuitive Filter-UX',
      'Mobile-First Performance',
      'Hohe User Satisfaction'
    ],
    relevantServices: ['webdesign', 'webentwicklung', 'automatisierung', 'ux-design', 'online-marketing', 'ki-loesungen'],
    client: {
      type: 'Product Directory',
      industry: 'Art & Craft / E-Commerce'
    }
  }
];

/**
 * Helper function to get projects by service slug
 */
export function getProjectsByService(serviceSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(project =>
    project.relevantServices.includes(serviceSlug)
  );
}

/**
 * Helper function to get project by slug
 */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

/**
 * Helper function to get all project slugs
 */
export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map(project => project.slug);
}
