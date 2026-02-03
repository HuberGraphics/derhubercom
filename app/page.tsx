import { Metadata } from 'next'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Webdesigner Heidelberg | Der Huber - Webdesign & Webentwicklung',
  description: 'Ihr Webdesigner aus Heidelberg. Ich entwickle moderne Websites für kleine Unternehmen im Rhein-Neckar-Kreis – persönlich, transparent, ab 599€.',
  alternates: {
    canonical: 'https://derhuber.com',
  },
  openGraph: {
    title: 'Webdesigner Heidelberg | Der Huber - Webdesign & Webentwicklung',
    description: 'Ihr Webdesigner aus Heidelberg. Ich entwickle moderne Websites für kleine Unternehmen im Rhein-Neckar-Kreis – persönlich, transparent, ab 599€.',
    url: 'https://derhuber.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
