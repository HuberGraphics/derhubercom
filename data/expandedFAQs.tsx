/**
 * Expanded FAQ Data
 *
 * Service-specific frequently asked questions based on industry best practices.
 * Organized by categories for better user experience.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'process';
  relatedServices?: string[];  // Slugs of related services for cross-linking
}

export interface ServiceFAQs {
  serviceSlug: string;
  faqs: FAQItem[];
}

export const serviceFAQs: ServiceFAQs[] = [
  {
    serviceSlug: 'webdesign',
    faqs: [
      // General FAQs
      {
        id: 'wd-1',
        question: 'Was kostet professionelles Webdesign in Heidelberg?',
        answer: 'Die Kosten für professionelles Webdesign variieren je nach Projektumfang. Eine einfache Firmen-Website beginnt ab 1.500€, während umfassende Webdesign-Projekte mit Branding und mehreren Seiten zwischen 3.000€ und 8.000€ liegen können. Jedes Projekt ist einzigartig – ich biete Ihnen ein kostenloses Erstgespräch, um Ihre Anforderungen zu besprechen und ein maßgeschneidertes Angebot zu erstellen.',
        category: 'pricing'
      },
      {
        id: 'wd-2',
        question: 'Wie lange dauert die Erstellung einer Website?',
        answer: 'Die Dauer hängt vom Projektumfang ab: Eine einfache One-Pager-Website kann in 2-3 Wochen erstellt werden. Umfassende Websites mit mehreren Seiten und Branding benötigen typischerweise 4-8 Wochen. E-Commerce-Designs oder komplexe Webanwendungen können 8-12 Wochen oder mehr dauern. In meinem Prozess-Content finden Sie eine detaillierte Zeitschätzung für jede Phase.',
        category: 'process'
      },
      {
        id: 'wd-3',
        question: 'Warum ist Mobile-First Design so wichtig?',
        answer: 'Über 70% aller Website-Besuche erfolgen über mobile Geräte. Mobile-First Design bedeutet, dass wir zuerst für kleine Bildschirme designen und dann auf größere Displays skalieren. Dieser Ansatz garantiert optimale UX auf allen Geräten, verbessert die Google-Rankings (Mobile-First Indexing) und erhöht die Konversionsraten.',
        category: 'general'
      },
      {
        id: 'wd-4',
        question: 'Was ist der Unterschied zwischen Webdesign und Webentwicklung?',
        answer: 'Webdesign konzentriert sich auf die visuelle Gestaltung und User Experience (UX) – Farben, Typografie, Layout, Benutzerführung. Webentwicklung ist die technische Implementierung: Programmierung der Website, Datenbanken, APIs, Server-Konfiguration. Ich biete beides an oder arbeite mit Entwicklern zusammen, um Ihr Design zur Leben zu erwecken.',
        category: 'general',
        relatedServices: ['webentwicklung']
      },
      {
        id: 'wd-5',
        question: 'Erstellen Sie auch responsive Designs?',
        answer: 'Ja, responsive Design ist Standard in allen meinen Projekten. Responsive bedeutet, dass sich das Layout automatisch an verschiedene Bildschirmgrößen anpasst – vom Smartphone über Tablet bis Desktop. Dies ist nicht nur User-freundlich, sondern auch ein Google-Ranking-Faktor.',
        category: 'technical'
      },
      {
        id: 'wd-6',
        question: 'Was ist Barrierefreiheit und warum ist es wichtig?',
        answer: 'Barrierefreiheit (Accessibility) bedeutet, dass Websites für alle Menschen nutzbar sind – unabhängig von körperlichen Einschränkungen. Das umfasst große Schrift, hoher Kontrast, Screenreader-Unterstützung, Keyboard-Navigation und mehr. Barrierefreies Design erweitert Ihre Zielgruppe, ist gesetzlich erforderlich für öffentliche Stellen (BITV 2.0) und verbessert die UX für alle Nutzer.',
        category: 'general'
      },
      {
        id: 'wd-7',
        question: 'Können Sie mein bestehendes Corporate Identity und Branding nutzen?',
        answer: 'Absolut. Wenn Sie bereits ein Logo, Farben und Brand-Richtlinien haben, integriere ich diese konsistent in das Webdesign. Falls noch kein Branding existiert, kann ich auch ein komplettes Corporate Identity erstellen – von Logo über Farbpalette bis Typografie.',
        category: 'process'
      },
      {
        id: 'wd-8',
        question: 'Beinhalten Ihre Preise auch Bilder und Stock-Fotos?',
        answer: 'Grundlegende Bilder und Icons sind im Preis inklusive. Für professionelle Stock-Fotos, Custom-Illustrationen oder Fotografie-Budgets gibt es Zusatzkosten. Ich bespreche dies transparent im Vorfeld und schlage kostengünstige Bildquellen vor, falls Sie ein begrenztes Budget haben.',
        category: 'pricing'
      },
      {
        id: 'wd-9',
        question: 'Wie sieht der Webdesign-Prozess aus?',
        answer: 'Mein Webdesign-Prozess hat 5 Phasen: 1) Discovery & Analyse (Zielgruppe, Ziele), 2) Konzeption & Wireframing (Struktur, User Flows), 3) UI-Design (Visuelles Design, Responsive Screens), 4) Testing & Optimierung (Usability-Tests, Feedback), 5) Development Handover (Übergabe an Entwickler). Jede Phase dauert 1-3 Wochen – die Gesamtdauer beträgt 4-8 Wochen.',
        category: 'process'
      },
      {
        id: 'wd-10',
        question: 'Erhalte ich die Quelldateien (Figma, Photoshop)?',
        answer: 'Ja, nach Abschluss des Projekts und vollständiger Bezahlung erhalten Sie alle Design-Assets inklusive Figma- oder Quelldateien. Das garantiert, dass Sie volle Kontrolle über Ihr Design haben und später Änderungen vornehmen oder andere Designer beauftragen können.',
        category: 'technical'
      },
      {
        id: 'wd-11',
        question: 'Optimieren Sie das Design auch für SEO?',
        answer: 'Webdesign und SEO sind eng verbunden. Ich optimiere das Design für SEO-freundliche Struktur, schnelle Ladezeiten, mobile Optimierung, semantisches HTML und crawl-freundliche Navigation. Für detailliertes SEO (Keywords, Content, Backlinks) arbeite ich mit SEO-Spezialisten zusammen oder kann Ihnen auch Online-Marketing-Dienstleistungen anbieten.',
        category: 'technical',
        relatedServices: ['online-marketing']
      },
      {
        id: 'wd-12',
        question: 'Was passiert, wenn ich Änderungen am Design wünsche?',
        answer: 'Änderungswünsche sind normal. In meinem Design-Prozess gibt es zwei offizielle Feedback-Runden nach Wireframing und nach High-Fidelity Design. Innerhalb dieser Runden sind Änderungen inklusive. Zusätzliche Änderungsrunden oder Major-Pivots nach Design-Freigabe können gegen Aufpreis hinzugefügt werden. Transparenz ist mir wichtig – alle Kosten werden im Vorfeld kommuniziert.',
        category: 'process'
      }
    ]
  },
  {
    serviceSlug: 'webentwicklung',
    faqs: [
      // General FAQs
      {
        id: 'we-1',
        question: 'Was kostet Webentwicklung in Heidelberg?',
        answer: 'Webentwicklung-Kosten variieren stark je nach Technologie und Komplexität. Eine einfache Website mit CMS beginnt ab 2.000€. Custom Webanwendungen mit React/Next.js liegen typischerweise zwischen 5.000€ und 20.000€. Enterprise-Lösungen mit E-Commerce, API-Integrationen oder komplexen Datenbanken können 20.000€+ kosten. Kontaktieren Sie mich für ein kostenloses technisches Briefing und Angebot.',
        category: 'pricing'
      },
      {
        id: 'we-2',
        question: 'Wie lange dauert die Entwicklung einer Webanwendung?',
        answer: 'Die Entwicklungszeit hängt vom Projekt ab: Eine einfache Website kann in 4-6 Wochen entwickelt werden. Mittlere Webanwendungen mit CMS und Integrationen benötigen 6-10 Wochen. Komplexe SaaS-Plattformen oder E-Commerce-Lösungen können 3-6 Monate oder länger dauern. In meinem Prozess-Content finden Sie eine detaillierte Timeline pro Phase.',
        category: 'process'
      },
      {
        id: 'we-3',
        question: 'Welche Technologien verwenden Sie?',
        answer: 'Mein Fokus liegt auf modernen JavaScript-Technologien: React 18+, Next.js 14+, TypeScript, Tailwind CSS. Für Backend nutze ich Node.js, Express, und RESTful/GraphQL APIs. Bei CMS arbeite ich mit WordPress (Headless), Sanity.io, Strapi oder Contentful. Für Datenbanken: PostgreSQL, MongoDB, Supabase. Diese Technologien sind zukunftssicher, performant und haben große Developer-Communities.',
        category: 'technical'
      },
      {
        id: 'we-4',
        question: 'Was ist der Unterschied zwischen statischen und dynamischen Websites?',
        answer: 'Statische Websites bestehen aus festen HTML/CSS/JS-Dateien, die nicht serverseitig generiert werden. Sie sind extrem schnell, sicher und günstig zu hosten (z.B. mit Next.js Static Export). Dynamische Websites generieren Content serverseitig (SSR) oder auf Anfrage (CSR). Sie ermöglichen User-Login, Datenbanken, E-Commerce, aber sind komplexer und teurer im Hosting. Ich helfe Ihnen, die richtige Architektur zu wählen.',
        category: 'technical'
      },
      {
        id: 'we-5',
        question: 'Erstellen Sie auch E-Commerce-Websites?',
        answer: 'Ja, ich entwickle E-Commerce-Lösungen – von einfachen Shopify-Setups bis custom Shop-Entwicklungen. Technologien: Shopify, WooCommerce, oder Custom Headless Commerce mit Next.js. Ich implementiere: Produkt-Katalog, Warenkorb, Checkout, Payment-Integration (Stripe, PayPal), Inventar-Management, Order-Tracking und mehr.',
        category: 'general'
      },
      {
        id: 'we-6',
        question: 'Optimieren Sie auch Website-Performance?',
        answer: 'Performance-Optimierung ist einer meiner Schwerpunkte. Ich implementiere: Code-Splitting, Lazy Loading, Bildoptimierung (WebP, AVIF), SSR/SSG für schnelles First Contentful Paint, CDN-Integration, Caching-Strategien und Bundle-Size-Reduktion. Ziel: Google Core Web Vitals im "Good"-Bereich (LCP < 2.5s, FID < 100ms, CLS < 0.1).',
        category: 'technical'
      },
      {
        id: 'we-7',
        question: 'Können Sie bestehende Websites optimieren oder reparieren?',
        answer: 'Ja, ich biete Website-Relaunches, Performance-Optimierungen, Bug-Fixes, Legacy-Code-Refactoring und Migrationen (z.B. von alten CMS zu modernen Tech Stacks). Zuerst analysiere ich den Ist-Zustand mit einem Audit, dann schlage ich Optimierungsoptionen vor. Manchmal ist ein vollständiger Relaunch kostengünstiger als schrittweise Reparaturen.',
        category: 'process'
      },
      {
        id: 'we-8',
        question: 'Hosten und warten Sie auch die Website nach der Entwicklung?',
        answer: 'Die Entwicklung schließt mit dem Deployment ab. Für Hosting und Wartung empfehle ich Partner-Provider oder helfe beim Setup. Für langfristige Wartung (Updates, Security-Patches, Bug-Fixes, Monitoring) biete ich Wartungsverträge an. Alternativ können Sie mit Ihrem eigenen Team oder anderen Entwicklern weiterarbeiten – der Code ist sauber dokumentiert.',
        category: 'process'
      },
      {
        id: 'we-9',
        question: 'Integrieren Sie auch Drittsysteme und APIs?',
        answer: 'Absolut. Ich integriere CRM-Systeme (HubSpot, Pipedrive), Payment-Provider (Stripe, PayPal), Shipping-Dienste, Newsletter-Tools, Analytics, Social Media, Calendar-Tools und mehr. Ich arbeite mit RESTful APIs, GraphQL, Webhooks und OAuth-Authentifizierung. Im Vorfeld kläre ich technische Anforderungen und teste Integrationen gründlich.',
        category: 'technical'
      },
      {
        id: 'we-10',
        question: 'Ist mein Code sicher und zukunftssicher?',
        answer: 'Sicherheit hat oberste Priorität. Ich implementiere: HTTPS, CORS-Policies, Input-Validierung, SQL-Injection-Prävention, XSS-Schutz, Authentifizierung/Authorisierung und regelmäßige Security-Audits. Für Zukunftssicherheit nutze ich bewährte Technologien mit großen Communities (React, Next.js, TypeScript), schreibe clean code mit Tests und dokumentiere alles. Das garantiert Wartbarkeit auch Jahre später.',
        category: 'technical'
      },
      {
        id: 'we-11',
        question: 'Arbeiten Sie mit Designern zusammen oder übernehmen Sie auch das Design?',
        answer: 'Beides ist möglich. Wenn Sie bereits Designer haben oder das Design selbst erstellen, implementiere ich es pixelgenau. Wenn Sie Design und Entwicklung aus einer Quelle möchten, arbeite ich mit Designer-Partnern zusammen oder biete Webdesign-Dienstleistungen an. Die Kombination aus Design und Development aus einer Hand hat den Vorteil, dass technische Möglichkeiten und Design-Entscheidungen Hand in Hand gehen.',
        category: 'process',
        relatedServices: ['webdesign']
      },
      {
        id: 'we-12',
        question: 'Wie sieht der Webentwicklungs-Prozess aus?',
        answer: 'Mein Prozess hat 5 Phasen: 1) Tech-Architektur & Setup (Technologie-Wahl, Repo-Setup), 2) Core Development (Frontend/Backend Code, Datenbank), 3) Integration & CMS (CMS-Setup, APIs, Formulare), 4) Performance & Security (Optimierung, Audits), 5) Testing & Deployment (QA, Live-Schaltung, Monitoring). Die Gesamtdauer beträgt 6-12 Wochen je nach Projektumfang.',
        category: 'process'
      },
      {
        id: 'we-13',
        question: 'Erhalte ich den Source Code und die Rechte daran?',
        answer: 'Nach vollständiger Bezahlung erhalten Sie alle Rechte am Source Code und der gesamten Arbeit. Der Code wird in ein Git-Repository übergeben (GitHub/GitLab/Bitbucket – Sie wählen). Sie erhalten volle Dokumentation, Setup-Anleitungen und Deployment-Konfiguration. Sie können jederzeit mit anderen Entwicklern weiterarbeiten.',
        category: 'pricing'
      }
    ]
  },
  {
    serviceSlug: 'ux-design',
    faqs: [
      // General FAQs
      {
        id: 'ux-1',
        question: 'Was ist der Unterschied zwischen UX-Design und UI-Design?',
        answer: 'UX-Design (User Experience) fokussiert sich auf die Gesamterfahrung des Nutzers: Benutzerführung, Usability, Informationsarchitektur, User Flows. UI-Design (User Interface) konzentriert sich auf die visuelle Gestaltung: Farben, Typografie, Icons, Layout. Gutes UX-Design führt Nutzer intuitiv zum Ziel, während UI-Design die ästhetische Hülle schafft. Beide ergänzen sich – idealerweise werden sie gemeinsam entwickelt.',
        category: 'general'
      },
      {
        id: 'ux-2',
        question: 'Welche UX-Design Methoden verwenden Sie?',
        answer: 'Ich nutze bewährte UX-Methoden wie User Research (Interviews, Surveys), Persona-Entwicklung, Customer Journey Mapping, Wireframing, Prototyping und Usability Testing. Mein Prozess ist iterativ: Ich teste früh und häufig, sammle Feedback und optimiere kontinuierlich. Tools wie Figma ermöglichen interaktive Prototypen, die ich mit echten Nutzern teste, bevor die Entwicklung startet.',
        category: 'general'
      },
      {
        id: 'ux-3',
        question: 'Warum ist UX-Design wichtig für mein Unternehmen?',
        answer: 'Gutes UX-Design führt zu messbaren Ergebnissen: höhere Conversion-Raten, weniger Bounce-Rate, bessere Kundenbindung, reduzierte Support-Kosten. Studien zeigen: Jeder investierte Euro in UX bringt durchschnittlich 100€ ROI. Zudem verbessert intuitive Benutzerführung Ihre Markenwahrnehmung und reduziert Frustration bei Nutzern.',
        category: 'general'
      },
      // Pricing FAQs
      {
        id: 'ux-4',
        question: 'Was kostet UX-Design in Heidelberg?',
        answer: 'UX-Design-Projekte werden meist projektbasiert oder auf Stundenbasis abgerechnet. Ein einfaches UX-Audit kostet ab 800€. Komplette UX-Redesigns für Websites liegen zwischen 3.000€ und 10.000€, je nach Komplexität. E-Commerce oder komplexe Webanwendungen können 10.000€+ kosten. Ich biete ein kostenloses Erstgespräch, um den Umfang zu klären.',
        category: 'pricing'
      },
      {
        id: 'ux-5',
        question: 'Was sind typische Stundensätze für UX-Design?',
        answer: 'Meine Stundensätze für UX-Design liegen zwischen 80€ und 120€, abhängig vom Projektumfang und der Dauer. Bei größeren Projekten biete ich Paketpreise, die günstiger sind. Ich kommuniziere alle Kosten transparent im Vorfeld und erstelle detaillierte Angebote mit festem Preis.',
        category: 'pricing'
      },
      {
        id: 'ux-6',
        question: 'Gibt es unterschiedliche Preise für KMU vs. Startups?',
        answer: 'Ich passe meine Preise an das Budget und die Bedürfnisse meiner Kunden an. Für Startups und kleine Unternehmen biete ich schlanke UX-Pakete an, die sich auf die wichtigsten Optimierungen konzentrieren. Größere Unternehmen erhalten umfassendere UX-Audits und Redesigns. Sprechen Sie mich an – gemeinsam finden wir eine passende Lösung.',
        category: 'pricing'
      },
      // Technical FAQs
      {
        id: 'ux-7',
        question: 'Mit welchen Tools arbeiten Sie beim UX-Design?',
        answer: 'Ich nutze hauptsächlich Figma für Wireframing, Prototyping und UI-Design. Zusätzlich verwende ich Tools wie Miro für Customer Journey Mapping, Hotjar oder Google Analytics für Verhaltensanalyse, und Lookback oder UserTesting.com für Remote Usability Testing. Alle Prototypen sind interaktiv und können direkt mit Stakeholdern geteilt werden.',
        category: 'technical'
      },
      {
        id: 'ux-8',
        question: 'Was ist ein Prototyp und warum brauche ich einen?',
        answer: 'Ein Prototyp ist eine interaktive Vorschau Ihrer Website oder App – klickbar, aber noch nicht entwickelt. Prototypen helfen dabei, Design-Entscheidungen zu testen, bevor teure Entwicklungszeit investiert wird. Ich erstelle Prototypen in Figma, die alle wichtigen User Flows abdecken. Sie können diese mit echten Nutzern testen, Feedback sammeln und frühzeitig Probleme identifizieren.',
        category: 'technical'
      },
      {
        id: 'ux-9',
        question: 'Was ist Usability Testing?',
        answer: 'Usability Testing bedeutet, dass echte Nutzer Ihre Website oder App testen, während wir beobachten. Ich identifiziere dabei Probleme wie Verwirrung, Fehlerklicks oder unklare Navigation. Tests können moderiert (ich leite durch) oder unmoderiert (Nutzer testen selbstständig) durchgeführt werden. Basierend auf den Ergebnissen optimiere ich das Design iterativ.',
        category: 'technical'
      },
      // Process FAQs
      {
        id: 'ux-10',
        question: 'Wie sieht Ihr UX-Design Prozess aus?',
        answer: 'Mein UX-Prozess hat 4 Hauptphasen: 1) Recherche (User Research, Zielgruppenanalyse, Wettbewerbsanalyse), 2) Konzept (User Flows, Wireframes, Informationsarchitektur), 3) Prototyp (Interaktive Prototypen in Figma, Testing), 4) Optimierung (Iteration basierend auf Feedback, Finalisierung). Jede Phase dauert 1-2 Wochen – die Gesamtdauer beträgt 4-8 Wochen.',
        category: 'process'
      },
      {
        id: 'ux-11',
        question: 'Wie lange dauert ein UX-Design Projekt?',
        answer: 'Die Dauer hängt vom Umfang ab: Ein UX-Audit dauert 1-2 Wochen. Komplette UX-Redesigns benötigen 4-8 Wochen. Komplexe E-Commerce oder App-Projekte können 8-12 Wochen oder länger dauern. In einem ersten Gespräch klären wir den Umfang und erstelle eine detaillierte Timeline.',
        category: 'process'
      },
      {
        id: 'ux-12',
        question: 'Können Sie auch bestehende Websites UX-optimieren?',
        answer: 'Ja, ich biete UX-Audits für bestehende Websites an. Dabei analysiere ich User Flows, Navigation, Conversion-Bottlenecks und Usability-Probleme. Ich erstelle einen detaillierten Report mit konkreten Optimierungsvorschlägen, priorisierten Handlungsempfehlungen und Mockups für Verbesserungen. Darauf aufbauend können wir Schritt für Schritt optimieren oder ein komplettes Redesign planen.',
        category: 'process'
      }
    ]
  },
  {
    serviceSlug: 'online-marketing',
    faqs: [
      // General FAQs
      {
        id: 'om-1',
        question: 'Was ist Local SEO und warum ist es wichtig für Heidelberg?',
        answer: 'Local SEO (Local Search Engine Optimization) optimiert Ihre Online-Präsenz für lokale Suchen wie "Webdesign Heidelberg" oder "Restaurant in der Nähe". Es umfasst Google My Business Optimierung, lokale Citations, Bewertungen und lokale Keywords. Für regionale Unternehmen ist Local SEO entscheidend, um von potenziellen Kunden in Heidelberg und Umgebung gefunden zu werden.',
        category: 'general'
      },
      {
        id: 'om-2',
        question: 'Wie funktioniert Social Media Marketing für Unternehmen?',
        answer: 'Social Media Marketing hilft Ihnen, Ihre Zielgruppe auf Plattformen wie LinkedIn, Instagram oder Facebook zu erreichen. Ich entwickle eine Content-Strategie, erstelle Posts, plane Kampagnen und optimiere für Engagement. Ziele können sein: Brand Awareness, Lead-Generierung, Kundenbindung oder Verkaufsförderung. Der Fokus liegt auf authentischen Inhalten, die Ihre Zielgruppe ansprechen.',
        category: 'general'
      },
      {
        id: 'om-3',
        question: 'Was ist Content Marketing?',
        answer: 'Content Marketing bedeutet, wertvolle, relevante Inhalte zu erstellen (Blog-Artikel, Videos, Infografiken), die Ihre Zielgruppe ansprechen und Probleme lösen. Guter Content positioniert Sie als Experte, verbessert SEO, generiert Leads und baut Vertrauen auf. Ich erstelle Content-Strategien, schreibe Artikel oder produziere Content, der Ihre Zielgruppe erreicht und konvertiert.',
        category: 'general'
      },
      // Pricing FAQs
      {
        id: 'om-4',
        question: 'Was kostet Online-Marketing in Heidelberg?',
        answer: 'Online-Marketing-Kosten variieren stark: SEO beginnt ab 500€/Monat für lokale Optimierung. Google Ads Budgets starten bei 300€/Monat (zusätzlich zu den Werbeausgaben). Social Media Management liegt bei 800€-2.000€/Monat. Content Marketing kostet ab 100€ pro Artikel. Ich erstelle maßgeschneiderte Pakete basierend auf Ihrem Budget und Zielen.',
        category: 'pricing'
      },
      {
        id: 'om-5',
        question: 'Wie viel Budget sollte ich für Google Ads einplanen?',
        answer: 'Das Budget hängt von Zielen und Branche ab. Für lokale Unternehmen in Heidelberg empfehle ich ein monatliches Budget von 500€-1.500€ für Google Ads. Dies ermöglicht sinnvolle Test-Phasen und skalierbare Kampagnen. Wichtig: Neben den Werbeausgaben fallen auch Management-Kosten an (typischerweise 15-20% des Werbebudgets oder Festpreis).',
        category: 'pricing'
      },
      {
        id: 'om-6',
        question: 'Welche ROI kann ich von Online-Marketing erwarten?',
        answer: 'ROI variiert stark je nach Branche und Strategie. Google Ads kann ROI von 200-400% liefern (für jeden investierten Euro 2-4€ Umsatz). SEO liefert langfristig nachhaltigen Traffic ohne laufende Werbeausgaben. Social Media Marketing baut Brand Awareness auf. Ich tracke alle KPIs und erstelle monatliche Reports, die ROI und Performance transparent darstellen.',
        category: 'pricing'
      },
      // Technical FAQs
      {
        id: 'om-7',
        question: 'Wie funktioniert Google Analytics und was kann ich damit messen?',
        answer: 'Google Analytics trackt Besucher-Verhalten auf Ihrer Website: Besucherzahlen, Seitenaufrufe, Conversion-Raten, Traffic-Quellen, Zielgruppen-Demografie und mehr. Ich richte Google Analytics korrekt ein, erstelle Custom Reports und helfe Ihnen, die Daten zu interpretieren. So verstehen Sie, welche Marketing-Maßnahmen funktionieren und wo Optimierungsbedarf besteht.',
        category: 'technical'
      },
      {
        id: 'om-8',
        question: 'Wie richte ich Google Ads Kampagnen richtig ein?',
        answer: 'Google Ads Setup umfasst: Keyword-Recherche, Anzeigentexte, Landing Pages, Conversion-Tracking, Gebotsstrategien und Targeting. Fehlerhafte Einrichtung verschwendet Budget. Ich erstelle kampagnen, optimiere kontinuierlich, testet Anzeigenvarianten und skaliere erfolgreiche Kampagnen. Wichtig ist auch die Verbindung mit Google Analytics für vollständige Performance-Transparenz.',
        category: 'technical'
      },
      {
        id: 'om-9',
        question: 'Was sind Keywords und wie finde ich die richtigen?',
        answer: 'Keywords sind Suchbegriffe, die Nutzer bei Google eingeben (z.B. "Webdesign Heidelberg"). Ich führe Keyword-Recherche durch, um relevante, suchstarke und nicht zu umkämpfte Keywords zu finden. Tools wie Google Keyword Planner, Ahrefs oder SEMrush helfen dabei. Die richtigen Keywords bilden die Grundlage für SEO und Google Ads.',
        category: 'technical'
      },
      // Process FAQs
      {
        id: 'om-10',
        question: 'Wie läuft der Online-Marketing Prozess ab?',
        answer: 'Mein Prozess hat 4 Phasen: 1) Audit (Ist-Zustand analysieren, Wettbewerber checken, Ziele definieren), 2) Strategie (Marketing-Plan erstellen, Kanäle auswählen, Budget planen), 3) Umsetzung (Kampagnen starten, Content erstellen, SEO optimieren), 4) Reporting (monatliche Reports, Optimierungen, Skalierung). Ich kommuniziere regelmäßig und passe die Strategie basierend auf Daten an.',
        category: 'process'
      },
      {
        id: 'om-11',
        question: 'Wie lange dauert es, bis SEO Ergebnisse sichtbar sind?',
        answer: 'SEO ist ein langfristiger Prozess. Erste Ergebnisse sind nach 3-6 Monaten sichtbar, signifikante Verbesserungen benötigen 6-12 Monate. Das liegt daran, dass Google Zeit braucht, um Änderungen zu indexieren und zu bewerten. Deshalb ist kontinuierliche Arbeit wichtig. Parallel dazu können Google Ads sofort Traffic generieren, während SEO langfristig aufgebaut wird.',
        category: 'process'
      },
      {
        id: 'om-12',
        question: 'Was beinhaltet eine Keyword-Recherche?',
        answer: 'Keyword-Recherche umfasst: Identifikation relevanter Suchbegriffe für Ihr Unternehmen, Analyse von Suchvolumen und Wettbewerb, Finden verwandter Keywords (Long-Tail), Priorisierung basierend auf Relevanz und Potenzial. Ich erstelle eine Keyword-Liste, die als Grundlage für Content-Strategie, SEO-Optimierung und Google Ads dient. Die Recherche dauert 1-2 Wochen.',
        category: 'process'
      }
    ]
  },
  {
    serviceSlug: 'automatisierung',
    faqs: [
      // General FAQs
      {
        id: 'auto-1',
        question: 'Was kann ich mit Automatisierung alles automatisieren?',
        answer: 'Typische Automatisierungen umfassen: E-Mail-Workflows (Willkommens-E-Mails, Follow-ups), CRM-Datensynchronisation, Lead-Qualifizierung, Terminbuchung, Bestellbestätigungen, Rechnungsstellung, Social Media Posting, Datenmigration zwischen Systemen, Report-Generierung und vieles mehr. Ich analysiere Ihre Prozesse und identifiziere Automatisierungspotenzial, das Zeit spart und Fehler reduziert.',
        category: 'general'
      },
      {
        id: 'auto-2',
        question: 'Was ist der Unterschied zwischen Zapier und Make (Integromat)?',
        answer: 'Zapier und Make sind beide No-Code-Automations-Plattformen. Zapier ist einfacher zu bedienen, ideal für Standard-Workflows. Make (früher Integromat) bietet mehr Flexibilität, komplexere Logik und bessere Preis-Leistung bei höheren Volumen. Die Wahl hängt von Ihren Anforderungen ab: Einfache Automatisierungen → Zapier, Komplexe Workflows → Make. Ich helfe bei der Auswahl und Implementierung.',
        category: 'general'
      },
      {
        id: 'auto-3',
        question: 'Wie viel Zeit kann ich durch Automatisierung sparen?',
        answer: 'Das hängt von den automatisierten Prozessen ab. Typischerweise sparen Kunden 5-20 Stunden pro Woche durch Automatisierung wiederkehrender Aufgaben. Ein Beispiel: Automatische Lead-Qualifizierung und E-Mail-Follow-ups sparen täglich 1-2 Stunden. CRM-Synchronisation eliminiert manuelle Dateneingabe. Ich analysiere Ihre Prozesse und schätze Zeitersparnis realistisch ein.',
        category: 'general'
      },
      // Pricing FAQs
      {
        id: 'auto-4',
        question: 'Was kostet die Einrichtung von Automatisierungen?',
        answer: 'Setup-Kosten variieren je nach Komplexität: Einfache Workflows (z.B. E-Mail-Automatisierung) kosten ab 500€. Mittlere Automatisierungen (CRM-Integration, Multi-Step-Workflows) liegen bei 1.500€-3.000€. Komplexe System-Integrationen können 3.000€-8.000€ kosten. Zusätzlich fallen monatliche Kosten für Tools an (Zapier ab 20€/Monat, Make ab 9€/Monat). Ich erstelle transparente Angebote.',
        category: 'pricing'
      },
      {
        id: 'auto-5',
        question: 'Gibt es laufende Kosten für Automatisierungen?',
        answer: 'Ja, Automations-Plattformen wie Zapier oder Make haben monatliche Abo-Kosten, die von der Anzahl der "Zaps" (Workflows) und Ausführungen abhängen. Zapier beginnt bei 20€/Monat, Make bei 9€/Monat. Für größere Unternehmen mit vielen Automatisierungen können Kosten bei 50€-200€/Monat liegen. Zusätzlich biete ich Wartungsverträge für Updates und Optimierungen an (optional).',
        category: 'pricing'
      },
      {
        id: 'auto-6',
        question: 'Lohnt sich Automatisierung finanziell?',
        answer: 'Automatisierung lohnt sich fast immer, wenn wiederkehrende Aufgaben vorhanden sind. ROI-Berechnung: (Zeitersparnis in Stunden × Stundensatz) - Tool-Kosten. Beispiel: 10 Stunden/Monat gespart × 50€/Stunde = 500€ Wert, abzüglich 50€ Tool-Kosten = 450€ monatliche Einsparung. Zusätzlich reduzieren sich Fehler und die Servicequalität steigt. Ich erstelle eine ROI-Analyse vor Projektstart.',
        category: 'pricing'
      },
      // Technical FAQs
      {
        id: 'auto-7',
        question: 'Was sind API-Integrationen und warum brauche ich sie?',
        answer: 'API (Application Programming Interface) ermöglicht, dass verschiedene Software-Systeme miteinander kommunizieren. Beispiel: Ihre Website sendet Kontaktformular-Daten via API an Ihr CRM, das wiederum automatisch E-Mails versendet. API-Integrationen verbinden Systeme, die normalerweise nicht zusammenarbeiten. Ich implementiere API-Verbindungen zwischen Websites, CRMs, E-Mail-Tools, Payment-Systemen und mehr.',
        category: 'technical'
      },
      {
        id: 'auto-8',
        question: 'Welche Tools verwenden Sie für Automatisierungen?',
        answer: 'Meine Haupttools sind Zapier und Make (Integromat) für No-Code-Automatisierungen. Zusätzlich nutze ich native API-Integrationen für komplexere Anforderungen. Für E-Mail-Automation: Mailchimp, Sendinblue. Für CRM: HubSpot, Pipedrive, Salesforce. Für Terminbuchung: Calendly, Acuity. Ich wähle die passenden Tools basierend auf Ihren Anforderungen und Budget.',
        category: 'technical'
      },
      {
        id: 'auto-9',
        question: 'Was sind Webhooks und wofür werden sie verwendet?',
        answer: 'Webhooks sind automatische Benachrichtigungen zwischen Systemen. Wenn in System A etwas passiert (z.B. neue Bestellung), sendet es einen Webhook an System B (z.B. CRM), das daraufhin automatisch eine Aktion auslöst. Webhooks ermöglichen Echtzeit-Automatisierungen ohne Polling. Ich implementiere Webhooks für Bestellungen, Leads, Formulare, Zahlungen und mehr.',
        category: 'technical'
      },
      // Process FAQs
      {
        id: 'auto-10',
        question: 'Wie läuft der Automatisierungs-Prozess ab?',
        answer: 'Mein Prozess hat 4 Phasen: 1) Prozess-Analyse (Identifikation von wiederkehrenden Aufgaben, Zeitfressern, Automatisierungspotenzial), 2) Tool-Auswahl (Auswahl passender Plattformen und Integrationen), 3) Implementierung (Einrichtung der Workflows, Testing, Optimierung), 4) Schulung (Einweisung Ihres Teams, Dokumentation, Wartungsplan). Die Dauer beträgt 2-6 Wochen je nach Komplexität.',
        category: 'process'
      },
      {
        id: 'auto-11',
        question: 'Wie lange dauert die Implementierung einer Automatisierung?',
        answer: 'Einfache Automatisierungen (z.B. E-Mail-Workflow) dauern 1-2 Tage. Mittlere Projekte (CRM-Integration, Multi-Step-Workflows) benötigen 1-2 Wochen. Komplexe System-Integrationen mit Custom-APIs können 3-6 Wochen dauern. Nach Implementierung teste ich gründlich und optimiere basierend auf Feedback. Ich kommuniziere realistische Timelines im Vorfeld.',
        category: 'process'
      },
      {
        id: 'auto-12',
        question: 'Was passiert bei Problemen oder Fehlern in der Automatisierung?',
        answer: 'Automatisierungen können fehlschlagen (z.B. API-Ausfälle, Datenänderungen). Ich implementiere Error-Handling und Monitoring, damit Sie Fehler schnell erkennen. Optional biete ich Wartungsverträge an: Ich überwache Automatisierungen, behebe Probleme schnell und optimiere kontinuierlich. Zusätzlich erhalten Sie Dokumentation, damit Ihr Team bei einfachen Problemen selbst helfen kann.',
        category: 'process'
      }
    ]
  },
  {
    serviceSlug: 'ki-loesungen',
    faqs: [
      // General FAQs
      {
        id: 'ki-1',
        question: 'Wie kann KI meinem KMU helfen?',
        answer: 'KI kann KMU auf vielfältige Weise unterstützen: 24/7-Kundenservice durch Chatbots, automatisierte E-Mail-Antworten, Content-Erstellung (Blogs, Social Media), Datenanalyse und Reporting, Lead-Qualifizierung, Terminbuchung, Dokumentenklassifizierung und mehr. Ich analysiere Ihr Unternehmen und identifiziere konkrete KI-Use-Cases, die sofort Mehrwert liefern.',
        category: 'general'
      },
      {
        id: 'ki-2',
        question: 'Was sind praktische KI-Use-Cases für Unternehmen?',
        answer: 'Typische Use-Cases: KI-Chatbots auf Websites für Kundenanfragen, automatische Lead-Qualifizierung basierend auf E-Mail-Inhalten, Content-Generierung für Marketing, Übersetzung von Dokumenten, Analyse von Kundendaten für Insights, Automatisierung von Dokumentenverarbeitung, personalisierte E-Mail-Kampagnen, Voice-Assistenten für Terminbuchung. Ich helfe, die passenden Use-Cases für Ihr Unternehmen zu finden.',
        category: 'general'
      },
      {
        id: 'ki-3',
        question: 'Brauche ich technisches Know-how, um KI zu nutzen?',
        answer: 'Nein. Viele moderne KI-Tools sind No-Code oder Low-Code und können ohne Programmierkenntnisse genutzt werden. Ich implementiere KI-Lösungen so, dass Ihr Team sie einfach bedienen kann. Zusätzlich biete ich Schulungen an, damit Ihre Mitarbeiter selbstständig mit KI-Tools arbeiten können (z.B. ChatGPT, KI-Chatbots verwalten).',
        category: 'general'
      },
      // Pricing FAQs
      {
        id: 'ki-4',
        question: 'Was kostet die Implementierung von KI-Lösungen?',
        answer: 'KI-Projektkosten variieren stark: Einfache Chatbot-Integrationen beginnen bei 1.500€. Content-Generierungs-Setups kosten 2.000€-5.000€. Custom KI-Integrationen mit Training können 5.000€-15.000€ kosten. Zusätzlich fallen monatliche Kosten für KI-APIs an (z.B. OpenAI ab 20€/Monat). Ich erstelle maßgeschneiderte Angebote basierend auf Ihren Anforderungen.',
        category: 'pricing'
      },
      {
        id: 'ki-5',
        question: 'Gibt es laufende Kosten für KI-Lösungen?',
        answer: 'Ja, KI-APIs haben Nutzungsbasierte oder monatliche Kosten. OpenAI ChatGPT API wird nach Token-Verbrauch abgerechnet (typischerweise 20€-200€/Monat je nach Nutzung). Chatbot-Plattformen haben monatliche Abos (z.B. Chatfuel ab 15€/Monat). Custom KI-Modelle können Hosting-Kosten verursachen. Ich kläre alle Kosten transparent im Vorfeld und optimiere für kosteneffiziente Lösungen.',
        category: 'pricing'
      },
      {
        id: 'ki-6',
        question: 'Ist KI für kleine Unternehmen überhaupt erschwinglich?',
        answer: 'Ja, KI wird immer zugänglicher. Viele KI-Tools haben günstige Einstiegspreise (ChatGPT ab 20€/Monat, Chatbots ab 15€/Monat). Ich helfe kleinen Unternehmen, mit kostengünstigen Lösungen zu starten und schrittweise zu skalieren. Oft reichen bereits einfache KI-Chatbots oder Content-Tools, um sofortigen Mehrwert zu liefern. ROI ist meist positiv, da KI Zeit spart und Effizienz steigert.',
        category: 'pricing'
      },
      // Technical FAQs
      {
        id: 'ki-7',
        question: 'Was ist Prompt Engineering?',
        answer: 'Prompt Engineering ist die Kunst, KI-Modelle wie ChatGPT durch präzise Anweisungen (Prompts) zu steuern. Gute Prompts liefern bessere, relevantere Ergebnisse. Ich biete Prompt Engineering Workshops, in denen Ihr Team lernt, wie man effektive Prompts schreibt, KI für Content, E-Mails, Analysen und mehr nutzt. Das ermöglicht Ihrem Team, KI selbstständig produktiv einzusetzen.',
        category: 'technical'
      },
      {
        id: 'ki-8',
        question: 'Wie funktioniert die Integration von ChatGPT auf meiner Website?',
        answer: 'ChatGPT kann auf verschiedene Weise integriert werden: Als Chatbot-Widget über API, als E-Mail-Automatisierung, als Content-Generator im Backend. Ich implementiere ChatGPT-Integrationen, die nahtlos in Ihre Website oder Systeme eingebunden sind. Der Chatbot kann auf Ihre FAQs, Produktinformationen oder Dokumente zugreifen und Kundenanfragen intelligent beantworten.',
        category: 'technical'
      },
      {
        id: 'ki-9',
        question: 'Kann ich Custom-KI-Modelle für mein Unternehmen entwickeln lassen?',
        answer: 'Ja, für spezifische Anforderungen können Custom-KI-Modelle entwickelt werden. Das ist jedoch komplexer und teurer als Standard-Lösungen. Oft reichen bereits fine-tuned Standard-Modelle (z.B. GPT-4 mit Custom-Training) aus. Ich analysiere Ihre Anforderungen und empfehle: Standard-Lösungen für die meisten Use-Cases, Custom-Modelle nur bei spezifischen, nicht-abgedeckten Anforderungen.',
        category: 'technical'
      },
      // Process FAQs
      {
        id: 'ki-10',
        question: 'Wie sieht Ihr KI-Implementierungsprozess aus?',
        answer: 'Mein Prozess hat 4 Phasen: 1) Consulting (Potenzialanalyse, Use-Case-Identifikation, Strategie-Entwicklung), 2) Konzept (Technologie-Auswahl, Architektur-Planung, Daten-Anforderungen), 3) Integration (Technische Implementierung, Training der KI, Testing), 4) Training (Schulung Ihres Teams, Dokumentation, Optimierung). Die Dauer beträgt 4-12 Wochen je nach Komplexität.',
        category: 'process'
      },
      {
        id: 'ki-11',
        question: 'Wie lange dauert die Implementierung einer KI-Lösung?',
        answer: 'Einfache KI-Chatbots können in 1-2 Wochen implementiert werden. Content-Generierungs-Setups benötigen 2-4 Wochen. Custom KI-Integrationen mit Training können 4-12 Wochen dauern. Die Dauer hängt von Komplexität, Datenverfügbarkeit und Custom-Anforderungen ab. Ich erstelle realistische Timelines im Vorfeld und kommuniziere Fortschritt regelmäßig.',
        category: 'process'
      },
      {
        id: 'ki-12',
        question: 'Welche Daten braucht KI und wie sicher sind meine Daten?',
        answer: 'KI benötigt Daten zum Training oder für Kontext (z.B. FAQs für Chatbots, Produktinfos). Ich arbeite ausschließlich mit datenschutzkonformen Lösungen: Daten werden verschlüsselt übertragen, auf sicheren Servern gespeichert und DSGVO-konform verarbeitet. OpenAI bietet Data-Processing-Add-ons für Enterprise-Kunden. Ich kläre Datenschutz-Anforderungen im Vorfeld und wähle passende, sichere Lösungen.',
        category: 'process'
      }
    ]
  }
];

/**
 * Helper function to get FAQs for a specific service
 */
export function getFAQsByService(serviceSlug: string): FAQItem[] {
  const serviceFAQ = serviceFAQs.find(faq => faq.serviceSlug === serviceSlug);
  return serviceFAQ?.faqs || [];
}

/**
 * Helper function to get FAQs by category
 */
export function getFAQsByCategory(serviceSlug: string, category: FAQItem['category']): FAQItem[] {
  const faqs = getFAQsByService(serviceSlug);
  return faqs.filter(faq => faq.category === category);
}

/**
 * Helper function to get all categories for a service
 */
export function getFAQCategories(serviceSlug: string): FAQItem['category'][] {
  const faqs = getFAQsByService(serviceSlug);
  const categories = new Set(faqs.map(faq => faq.category));
  return Array.from(categories);
}
