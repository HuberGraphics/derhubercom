import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://derhuber.com'),
  title: {
    default: 'Der Huber | Webdesign & Webentwicklung Heidelberg',
    template: '%s | Der Huber',
  },
  description: 'Webdesign und Webentwicklung für kleine Unternehmen in Heidelberg und Umgebung',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Der Huber',
  },
}

// LocalBusiness JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://derhuber.com/#localbusiness',
  name: 'Der Huber - Webdesign & Webentwicklung',
  description: 'Professionelles Webdesign und Webentwicklung für kleine Unternehmen in Heidelberg und dem Rhein-Neckar-Kreis.',
  url: 'https://derhuber.com',
  logo: 'https://derhuber.com/images/logo.png',
  telephone: '+49-XXX-XXXXXXX',
  email: 'info@derhuber.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Heidelberg',
    addressRegion: 'Baden-Württemberg',
    postalCode: '69XXX',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.3988,
    longitude: 8.6724,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Heidelberg',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Rhein-Neckar-Kreis',
    },
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.linkedin.com/in/derhuber',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Webdesign & Webentwicklung Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Webdesign',
          description: 'Professionelles Webdesign für moderne, responsive Websites',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Webentwicklung',
          description: 'Technisch ausgereifte Websites mit React und Next.js',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UX-Design',
          description: 'Nutzerfreundliche Websites die Besucher zu Kunden machen',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-080CGD5Q3V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-080CGD5Q3V');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-brand-200">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
