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
  services: {
    items: [
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
    target: 'We operate at the intersection of global strategy, legal foresight, and capital intelligence. In an era defined by regulatory disruption and geopolitical fragmentation, we empower transnational clients to act decisively, structure resiliently, and navigate uncertainty with clarity.',
  },
  offices: [
    {
      phone: '+7 800 567-25-35',
      address: '24541 Clinton Mills, New York',
    },
    {
      phone: '+7 450 787-44-36',
      address: '31 Eleonor Passage, New York',
    },
    {
      phone: '+7 629 349-55-27',
      address: '206 Howell Rapids, Chicago',
    },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/arka-global',
    twitter: 'https://twitter.com/ArkaGlobal',
    instagram: 'https://www.instagram.com/arkaglobal',
  },
}
