import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Der Huber | Webdesign & Webentwicklung Heidelberg',
  description: 'Webdesign und Webentwicklung für kleine Unternehmen in Heidelberg und Umgebung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-080CGD5Q3V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-080CGD5Q3V');
          `}
        </Script>
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-brand-200">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
