import {DATA} from '@/lib/data'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import Marker from '~/UI/Marker'
import {H3, P, SPAN} from '~/UI/Typography'

export default function MissionFounders() {
  return (
    <section data-section="index-mission-founders" id="mission-founders" className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading="Mission & Founders" />

      <H3 className="max-w-[50ch] text-green">{DATA.missionfounders.mission}</H3>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 xl:gap-6 sm:gap-4">
        {DATA.missionfounders.founders.map((founder, index) => (
          <div className={cn('p-6 xl:p-5 sm:p-2.5 space-y-4 xl:space-y-3 sm:space-y-2.5', 'border border-gray rounded-xl')} key={index}>
            <Image quality={100} className="rounded-lg" src={founder.image} alt={founder.name} />

            <div>
              <H3>{founder.name}</H3>
              <SPAN className="text-green">{founder.role}</SPAN>
            </div>

            <P className="text-green max-w-[25ch]">{founder.position}</P>
          </div>
        ))}
      </div>
    </section>
  )
}
