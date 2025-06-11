import logoImage from '$/logo.svg'
import logoWhiteImage from '$/logo-white.svg'

import machadoImage from '$/founders/machado.jpg'
import kukuevImage from '$/founders/kukuev.jpg'

import ConsultingIcon from '$/services/consulting.svg'
import WealthIcon from '$/services/wealth.svg'
import RiskIcon from '$/services/risk.svg'
import ConflictIcon from '$/services/conflict.svg'
import CapitalIcon from '$/services/capital.svg'
import SanctionsIcon from '$/services/sanctions.svg'
import GovernmentIcon from '$/services/government.svg'

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
  services: [
    {
      title: 'Strategic Consulting in Frontier Markets',
      icon: ConsultingIcon,
    },
    {
      title: 'Cross-Border Wealth Structuring',
      icon: WealthIcon,
    },
    {
      title: 'Legal-Informed Risk & Compliance',
      icon: RiskIcon,
    },
    {
      title: 'High-Stakes Arbitration & Conflict Resolution',
      icon: ConflictIcon,
    },
    {
      title: 'Capital Advisory for BRICS/UHNWI Clients',
      icon: CapitalIcon,
    },
    {
      title: 'Sanctions-Resilient Asset Relocation',
      icon: SanctionsIcon,
    },
    {
      title: 'White-Label Government Consulting',
      icon: GovernmentIcon,
    },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/arka-global',
    twitter: 'https://twitter.com/ArkaGlobal',
    instagram: 'https://www.instagram.com/arkaglobal',
  },
}
