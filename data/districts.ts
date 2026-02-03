export interface DistrictData {
  slug: string;
  name: string;
  fullName: string; // z.B. "Heidelberger Altstadt"
  preposition: string; // "in der", "im", "in"
  prepositionWithLocation: string; // "in der Heidelberger", "in Heidelberg-"
  locationName: string; // "Heidelberg-Bergheim", "Heidelberger Altstadt"
  description: string;
  keywords: string[];
  characteristics: string[];
}

export const heidelbergDistricts: DistrictData[] = [
  {
    slug: 'altstadt',
    name: 'Altstadt',
    fullName: 'Heidelberger Altstadt',
    preposition: 'in der',
    prepositionWithLocation: 'in der Heidelberger',
    locationName: 'Heidelberger Altstadt',
    description: 'Die historische Altstadt von Heidelberg mit dem berühmten Schloss, der Hauptstraße und zahlreichen gastronomischen Betrieben. Das Herzstück der Stadt mit hoher touristischer Attraktivität.',
    keywords: ['Heidelberger Altstadt', 'Altstadt Heidelberg', 'Altstadt Webdesign', 'historisches Heidelberg', 'Heidelberg Zentrum'],
    characteristics: ['Historisches Zentrum', 'Touristisch geprägt', 'Kleine Unternehmen', 'Gastronomie', 'Kulturstadt']
  },
  {
    slug: 'bergheim',
    name: 'Bergheim',
    fullName: 'Heidelberg-Bergheim',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Bergheim',
    description: 'Bergheim liegt westlich der Altstadt und ist einer der ältesten Stadtteile Heidelbergs. Geprägt von gemischter Bebauung und guter Anbindung an die Innenstadt.',
    keywords: ['Heidelberg-Bergheim', 'Bergheim Heidelberg', 'Webdesign Bergheim', 'Heidelberg Bergheim'],
    characteristics: ['Wohngebiet', 'Historischer Kern', 'Naherholung', 'Gute Anbindung']
  },
  {
    slug: 'weststadt',
    name: 'Weststadt',
    fullName: 'Heidelberg-Weststadt',
    preposition: 'in der',
    prepositionWithLocation: 'in der Heidelberger',
    locationName: 'Heidelberg-Weststadt',
    description: 'Die Weststadt ist ein beliebtes Wohnviertel mit vielen Gründerzeithäusern, Nähe zur Bismarckplatz und einer lebendigen gastronomischen Szene.',
    keywords: ['Heidelberg-Weststadt', 'Weststadt Heidelberg', 'Webdesign Weststadt', 'Heidelberg Weststadt'],
    characteristics: ['Wohnviertel', 'Gründerzeitarchitektur', 'Gastronomie', 'Nähe Zentrum']
  },
  {
    slug: 'suedstadt',
    name: 'Südstadt',
    fullName: 'Heidelberg-Südstadt',
    preposition: 'in der',
    prepositionWithLocation: 'in der Heidelberger',
    locationName: 'Heidelberg-Südstadt',
    description: 'Die Südstadt zeichnet sich durch ihre Nähe zum Neckar und die alte Brücke aus. Ein attraktiver Wohnort mit guter Infrastruktur und vielen Einkaufsmöglichkeiten.',
    keywords: ['Heidelberg-Südstadt', 'Südstadt Heidelberg', 'Webdesign Südstadt', 'Heidelberg Südstadt'],
    characteristics: ['Neckarnähe', 'Alte Brücke', 'Wohngebiet', 'Einkaufsmöglichkeiten']
  },
  {
    slug: 'wieblingen',
    name: 'Wieblingen',
    fullName: 'Heidelberg-Wieblingen',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Wieblingen',
    description: 'Wieblingen im Westen Heidelbergs ist ein traditionsreicher Stadtteil mit ländlichem Charme, guter Anbindung und vielen lokalen Unternehmen.',
    keywords: ['Heidelberg-Wieblingen', 'Wieblingen Heidelberg', 'Webdesign Wieblingen', 'Heidelberg Wieblingen'],
    characteristics: ['Traditionsviertel', 'Ländlicher Charme', 'Gewerbegebiet', 'Bahnanschluss']
  },
  {
    slug: 'kirchheim',
    name: 'Kirchheim',
    fullName: 'Heidelberg-Kirchheim',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Kirchheim',
    description: 'Kirchheim im Süden Heidelbergs ist ein familiärer Stadtteil mit vielen Grünflächen, guten Schulen und einer starken Gemeinschaft.',
    keywords: ['Heidelberg-Kirchheim', 'Kirchheim Heidelberg', 'Webdesign Kirchheim', 'Heidelberg Kirchheim'],
    characteristics: ['Familienfreundlich', 'Grünflächen', 'Schulen', 'Wohnen']
  },
  {
    slug: 'pfaffengrund',
    name: 'Pfaffengrund',
    fullName: 'Heidelberg-Pfaffengrund',
    preposition: 'im',
    prepositionWithLocation: 'im',
    locationName: 'Heidelberg-Pfaffengrund',
    description: 'Der Pfaffengrund ist ein modernes Wohngebiet im Süden Heidelbergs mit vielen Grünflächen und guter Infrastruktur für Familien.',
    keywords: ['Heidelberg-Pfaffengrund', 'Pfaffengrund Heidelberg', 'Webdesign Pfaffengrund', 'Heidelberg Pfaffengrund'],
    characteristics: ['Neubaugebiet', 'Familienfreundlich', 'Grünflächen', 'Moderne Architektur']
  },
  {
    slug: 'handschuhsheim',
    name: 'Handschuhsheim',
    fullName: 'Heidelberg-Handschuhsheim',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Handschuhsheim',
    description: 'Handschuhsheim im Norden Heidelbergs ist einer der ältesten Stadtteile mit historischem Marktplatz, vielen lokalen Geschäften und einer starken Gemeinschaft.',
    keywords: ['Heidelberg-Handschuhsheim', 'Handschuhsheim Heidelberg', 'Webdesign Handschuhsheim', 'Heidelberg Handschuhsheim'],
    characteristics: ['Historischer Marktplatz', 'Handwerk', 'Lokale Geschäfte', 'Tradition']
  },
  {
    slug: 'neuenheim',
    name: 'Neuenheim',
    fullName: 'Heidelberg-Neuenheim',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Neuenheim',
    description: 'Neuenheim ist ein studentisch geprägter Stadtteil mit Nähe zur Universität, vielen Cafés und einer jungen, dynamischen Atmosphäre.',
    keywords: ['Heidelberg-Neuenheim', 'Neuenheim Heidelberg', 'Webdesign Neuenheim', 'Heidelberg Neuenheim'],
    characteristics: ['Studentisches Viertel', 'Universitätsnähe', 'Cafés', 'Junge Atmosphäre']
  },
  {
    slug: 'rohrbach',
    name: 'Rohrbach',
    fullName: 'Heidelberg-Rohrbach',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Rohrbach',
    description: 'Rohrbach im Süden Heidelberks ist ein beliebter Wohnort mit vielen Einfamilienhäusern, guten Einkaufsmöglichkeiten und einer ruhigen Atmosphäre.',
    keywords: ['Heidelberg-Rohrbach', 'Rohrbach Heidelberg', 'Webdesign Rohrbach', 'Heidelberg Rohrbach'],
    characteristics: ['Wohngebiet', 'Einfamilienhäuser', 'Ruhig', 'Einkaufsmöglichkeiten']
  },
  {
    slug: 'schlierbach',
    name: 'Schlierbach',
    fullName: 'Heidelberg-Schlierbach',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Schlierbach',
    description: 'Schlierbach ist ein exklusiver Wohnort im Süden Heidelberks mit vielen Villen, herrlichem Neckarblick und gehobener Wohnqualität.',
    keywords: ['Heidelberg-Schlierbach', 'Schlierbach Heidelberg', 'Webdesign Schlierbach', 'Heidelberg Schlierbach'],
    characteristics: ['Exklusiv', 'Villen', 'Neckarblick', 'Gehobene Wohnqualität']
  },
  {
    slug: 'emmertsgrund',
    name: 'Emmertsgrund',
    fullName: 'Heidelberg-Emmertsgrund',
    preposition: 'im',
    prepositionWithLocation: 'im',
    locationName: 'Heidelberg-Emmertsgrund',
    description: 'Der Emmertsgrund ist ein modernes Wohngebiet im Süden Heidelberks mit vielen jungen Familien, guten Kindergärten und einer aktiven Nachbarschaft.',
    keywords: ['Heidelberg-Emmertsgrund', 'Emmertsgrund Heidelberg', 'Webdesign Emmertsgrund', 'Heidelberg Emmertsgrund'],
    characteristics: ['Junge Familien', 'Neubaugebiet', 'Kindergärten', 'Nachbarschaft']
  },
  {
    slug: 'boxberg',
    name: 'Boxberg',
    fullName: 'Heidelberg-Boxberg',
    preposition: 'auf dem',
    prepositionWithLocation: 'auf dem',
    locationName: 'Heidelberg-Boxberg',
    description: 'Der Boxberg ist ein naturnaher Stadtteil im Osten Heidelberks mit vielen Wanderwegen, Waldnähe und einer ruhigen Wohnlage.',
    keywords: ['Heidelberg-Boxberg', 'Boxberg Heidelberg', 'Webdesign Boxberg', 'Heidelberg Boxberg'],
    characteristics: ['Naturnah', 'Waldnähe', 'Wanderwege', 'Ruhige Wohnlage']
  },
  {
    slug: 'ziegelhausen',
    name: 'Ziegelhausen',
    fullName: 'Heidelberg-Ziegelhausen',
    preposition: 'in',
    prepositionWithLocation: 'in',
    locationName: 'Heidelberg-Ziegelhausen',
    description: 'Ziegelhausen im Osten Heidelberks ist ein malerischer Stadtteil am Neckar mit vielen historischen Gebäuden und einer aktiven Gemeinde.',
    keywords: ['Heidelberg-Ziegelhausen', 'Ziegelhausen Heidelberg', 'Webdesign Ziegelhausen', 'Heidelberg Ziegelhausen'],
    characteristics: ['Neckarlage', 'Historisch', 'Gemeinschaft', 'Malerisch']
  }
];
