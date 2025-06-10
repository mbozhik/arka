import {DATA} from '@/lib/data'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Marker from '~/UI/Marker'
import {H3} from '~/UI/Typography'

export default function MissionFounders() {
  return (
    <section data-section="index-mission-founders" id="mission-founders" className="space-y-10">
      <Marker />

      <H3 className="max-w-[50ch] text-green">{DATA.missionfounders.mission}</H3>

      <div className="grid grid-cols-2 gap-8">
        {DATA.missionfounders.founders.map((founder, index) => (
          <div className={cn('p-6 space-y-4', 'border border-gray rounded-xl')} key={index}>
            <Image quality={100} className="rounded-lg" src={founder.image} alt={founder.name} />

            <div className="">
              <H3>{founder.name}</H3>
              <span className="text-sm uppercase font-sans text-green">{founder.role}</span>
            </div>

            <span className="text-xl font-sans text-green">{founder.position}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
