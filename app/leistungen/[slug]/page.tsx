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

export async function generateMetadata({
  params
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

  return {
    title: `${service.title} Heidelberg`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://derhuber.com/leistungen/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Der Huber`,
      description: service.shortDesc,
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
      title: `${service.title} | Der Huber`,
      description: service.shortDesc,
      images: ['/images/og-image.png'],
    },
  }
}

// Generate JSON-LD for Service and Breadcrumb
function generateJsonLd(slug: string) {
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return null

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Service Schema
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
      // BreadcrumbList Schema
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
  params
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
