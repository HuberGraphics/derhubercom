import { Metadata } from 'next'
import Header from '@/components/Header'
import ServiceDetail from '@/components/ServiceDetail'
import Footer from '@/components/Footer'
import { servicesData } from '@/data/services'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

const metadataOverrides: Record<string, { title: string; description: string; ogTitle: string }> = {
  webdesign: {
    title: 'Webdesign Heidelberg | Moderne Websites fuer KMU',
    description:
      'Webdesign in Heidelberg mit klarem Prozess, transparenten Preisen und persoenlicher Betreuung. Jetzt unverbindliches Erstgespraech anfragen.',
    ogTitle: 'Webdesign Heidelberg | Der Huber',
  },
  webentwicklung: {
    title: 'Webentwicklung Heidelberg | React & Next.js fuer Unternehmen',
    description:
      'Webentwicklung in Heidelberg: schnelle, wartbare Websites mit React und Next.js. Direkter Ansprechpartner und klare Umsetzung in 4-8 Wochen.',
    ogTitle: 'Webentwicklung Heidelberg | Der Huber',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: 'Leistung nicht gefunden',
    }
  }

  const override = metadataOverrides[slug]
  const title = override?.title ?? `${service.title} Heidelberg | Der Huber`
  const description = override?.description ?? service.shortDesc
  const ogTitle = override?.ogTitle ?? `${service.title} Heidelberg | Der Huber`

  return {
    title,
    description,
    alternates: {
      canonical: `https://derhuber.com/leistungen/${slug}`,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: `https://derhuber.com/leistungen/${slug}`,
      type: 'website',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Der Huber Heidelberg`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/images/og-image.png'],
    },
  }
}

function generateJsonLd(slug: string) {
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return null

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://derhuber.com/leistungen/${slug}#service`,
        name: service.title,
        description: service.shortDesc,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://derhuber.com/#localbusiness',
          name: 'Der Huber - Webdesign & Webentwicklung',
        },
        areaServed: {
          '@type': 'City',
          name: 'Heidelberg',
        },
        serviceType: service.title,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://derhuber.com/leistungen/${slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: 'https://derhuber.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leistungen',
            item: 'https://derhuber.com/#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://derhuber.com/leistungen/${slug}`,
          },
        ],
      },
    ],
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const jsonLd = generateJsonLd(slug)

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header />
      <ServiceDetail slug={slug} />
      <Footer />
    </>
  )
}
