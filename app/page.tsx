import { Metadata } from 'next'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Webdesign Heidelberg | Webentwicklung Heidelberg | Kostenlose Erstberatung',
  description: 'Webdesign und Webentwicklung in Heidelberg fuer KMU: schnelle Websites, klare Preise ab 599 EUR und persoenliche Betreuung. Jetzt kostenloses Erstgespraech anfragen.',
  alternates: {
    canonical: 'https://derhuber.com',
  },
  openGraph: {
    title: 'Webdesign Heidelberg & Webentwicklung Heidelberg | Der Huber',
    description: 'Moderne Website fuer Ihr Unternehmen: schnell umgesetzt, transparent bepreist und lokal in Heidelberg betreut. Kostenloses Erstgespraech.',
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
