import { Metadata } from 'next'
import Header from '@/components/Header'
import Datenschutz from '@/components/Datenschutz'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Der Huber - Webdesign & Webentwicklung Heidelberg.',
  alternates: {
    canonical: 'https://derhuber.com/datenschutz',
  },
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <Datenschutz />
      <Footer />
    </>
  )
}
