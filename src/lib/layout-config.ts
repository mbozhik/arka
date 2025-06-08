import type {Metadata} from 'next'

import {Open_Sans, Source_Serif_4} from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s — ARKA',
    default: 'ARKA',
  },
}

export const openSans = Open_Sans({
  variable: '--font-open-sans',
  preload: true,
  subsets: ['latin'],
})

export const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  preload: true,
  subsets: ['latin'],
})
