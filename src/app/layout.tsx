export {metadata} from '@/lib/layout-config'
import {openSans, sourceSerif} from '@/lib/layout-config'
import '@/app/globals.css'

import {cn} from '@/lib/utils'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn([openSans.variable, sourceSerif.variable, 'text-antialiased', 'bg-green text-white-dirty'])}>{children}</body>
    </html>
  )
}
