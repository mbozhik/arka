import logoImage from '$/logo.svg'
import logoWhiteImage from '$/logo-white.svg'

import machadoImage from '$/founders/machado.jpg'
import kukuevImage from '$/founders/kukuev.jpg'

export const DATA = {
  logo: {
    light: logoImage,
    dark: logoWhiteImage,
  },
  missionfounders: {
    mission: 'Empowering transnational clients to navigate regulatory and geopolitical volatility with confidence and clarity.',
    founders: [
      {
        name: 'Arthur Machado',
        role: 'Founder',
        position: 'Global Investor & Diplomacy Strategist',
        image: machadoImage,
      },
      {
        name: 'Alexaxnder Kukuev',
        role: 'Managing Partner',
        position: 'Legal Strategist & Business Builder',
        image: kukuevImage,
      },
    ],
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/arka-global',
    twitter: 'https://twitter.com/ArkaGlobal',
    instagram: 'https://www.instagram.com/arkaglobal',
  },
}
