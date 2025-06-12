export {metadata} from '@/lib/layout-config'
import {openSans, sourceSerif} from '@/lib/layout-config'
import '@/app/globals.css'

import {cn} from '@/lib/utils'

import Header from '~/Global/Header'
import Footer from '~/Global/Footer'
import YandexMetrika from '~/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn([openSans.variable, sourceSerif.variable, 'relative text-antialiased', 'bg-green text-white-dirty'])}>
        <Header />
        {children}
        <Footer />

        <section data-section="background-pattern" className="BACKGROUND"></section>

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}
