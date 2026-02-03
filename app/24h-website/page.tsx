import { Metadata } from 'next'
import Header from '@/components/Header'
import Landing24h from '@/components/Landing24h'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '24h Website | Der Huber',
  description: 'Ihre professionelle Website in 24 Stunden. Schnell, modern und effektiv.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Landing24hPage() {
  return (
    <>
      <Header />
      <Landing24h />
      <Footer />
    </>
  )
}
