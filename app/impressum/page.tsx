import { Metadata } from 'next'
import Header from '@/components/Header'
import Impressum from '@/components/Impressum'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Der Huber - Webdesign & Webentwicklung Heidelberg.',
  alternates: {
    canonical: 'https://derhuber.com/impressum',
  },
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <Impressum />
      <Footer />
    </>
  )
}
