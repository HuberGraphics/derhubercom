import { Metadata } from 'next'
import Header from '@/components/Header'
import LandingKiRezeptionist from '@/components/LandingKiRezeptionist'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'KI-Rezeptionist | Der Huber',
  description: 'Intelligenter KI-Rezeptionist für Ihr Unternehmen. 24/7 Kundenservice automatisiert.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LandingKiRezeptionistPage() {
  return (
    <>
      <Header />
      <LandingKiRezeptionist />
      <Footer />
    </>
  )
}
