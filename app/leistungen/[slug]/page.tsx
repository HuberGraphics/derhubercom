import Header from '@/components/Header'
import ServiceDetail from '@/components/ServiceDetail'
import Footer from '@/components/Footer'
import { servicesData } from '@/data/services'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  return (
    <>
      <Header />
      <ServiceDetail slug={slug} />
      <Footer />
    </>
  )
}
