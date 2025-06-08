export {metadata} from '@/lib/layout-config'
import {openSans, sourceSerif} from '@/lib/layout-config'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${sourceSerif.variable} antialiased`}>{children}</body>
    </html>
  )
}
