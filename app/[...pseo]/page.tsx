import Header from '@/components/Header'
import CityLevelPSEO from '@/components/CityLevelPSEO'
import DistrictLevelPSEO from '@/components/DistrictLevelPSEO'
import Footer from '@/components/Footer'
import { servicesData } from '@/data/services'
import { heidelbergDistricts } from '@/data/districts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Generate all PSEO paths
export function generateStaticParams() {
  const params = []

  // City-level paths: webdesign-in-heidelberg
  for (const service of servicesData) {
    params.push({
      pseo: [`${service.slug}-in-heidelberg`]
    })
  }

  // District-level paths: webdesign-in-heidelberg/altstadt
  for (const service of servicesData) {
    for (const district of heidelbergDistricts) {
      params.push({
        pseo: [`${service.slug}-in-heidelberg`, district.slug]
      })
    }
  }

  return params
}

export async function generateMetadata({ params }: { params: Promise<{ pseo: string[] }> }): Promise<Metadata> {
  const { pseo } = await params

  const service = servicesData.find(s => pseo[0]?.startsWith(`${s.slug}-in-heidelberg`))

  if (!service) {
    return {
      title: 'Seite nicht gefunden',
    }
  }

  // City-level
  if (pseo.length === 1) {
    return {
      title: `${service.title} in Heidelberg | Der Huber`,
      description: `Professionelles ${service.title} in Heidelberg und dem Rhein-Neckar-Kreis. ${service.shortDesc}`,
      openGraph: {
        title: `${service.title} in Heidelberg | Der Huber`,
        description: `Professionelles ${service.title} in Heidelberg. ${service.shortDesc}`,
        url: `https://derhuber.com/${pseo[0]}`,
        siteName: 'Der Huber',
        locale: 'de_DE',
        type: 'website',
        images: [
          {
            url: '/images/og-image.png',
            width: 1200,
            height: 630,
            alt: `${service.title} in Heidelberg - Der Huber`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${service.title} in Heidelberg | Der Huber`,
        description: `Professionelles ${service.title} in Heidelberg. ${service.shortDesc}`,
        images: ['/images/og-image.png'],
      },
      alternates: {
        canonical: `https://derhuber.com/${pseo[0]}`,
      },
    }
  }

  // District-level
  const district = heidelbergDistricts.find(d => d.slug === pseo[1])
  if (district) {
    return {
      title: `${service.title} in ${district.name} Heidelberg | Der Huber`,
      description: `${service.title} in ${district.name}, Heidelberg. ${district.description} ${service.shortDesc}`,
      openGraph: {
        title: `${service.title} in ${district.name} Heidelberg | Der Huber`,
        description: `${service.title} in ${district.name}, Heidelberg. ${service.shortDesc}`,
        url: `https://derhuber.com/${pseo.join('/')}`,
        siteName: 'Der Huber',
        locale: 'de_DE',
        type: 'website',
        images: [
          {
            url: '/images/og-image.png',
            width: 1200,
            height: 630,
            alt: `${service.title} in ${district.name} Heidelberg - Der Huber`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${service.title} in ${district.name} Heidelberg | Der Huber`,
        description: `${service.title} in ${district.name}, Heidelberg. ${service.shortDesc}`,
        images: ['/images/og-image.png'],
      },
      alternates: {
        canonical: `https://derhuber.com/${pseo.join('/')}`,
      },
    }
  }

  return {
    title: 'Seite nicht gefunden',
  }
}

export default async function PSEOPage({ params }: { params: Promise<{ pseo: string[] }> }) {
  const { pseo } = await params

  const service = servicesData.find(s => pseo[0]?.startsWith(`${s.slug}-in-heidelberg`))

  if (!service) {
    notFound()
  }

  // City-level
  if (pseo.length === 1) {
    return (
      <>
        <Header />
        <CityLevelPSEO serviceSlug={service.slug} />
        <Footer />
      </>
    )
  }

  // District-level
  const district = heidelbergDistricts.find(d => d.slug === pseo[1])
  if (district) {
    return (
      <>
        <Header />
        <DistrictLevelPSEO serviceSlug={service.slug} districtSlug={district.slug} />
        <Footer />
      </>
    )
  }

  notFound()
}
