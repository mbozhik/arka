import {DATA} from '@/lib/data'

import {getPathLink} from '@/utils/getPathLink'

import Image from 'next/image'
import Marker from '~/UI/Marker'
import Card from '~/UI/Card'
import {H3, P, SPAN} from '~/UI/Typography'

export default function MissionFounders({block = 'Mission & Founders'}: {block?: string}) {
  return (
    <section data-section="index-mission-founders" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <H3 className="max-w-[50ch] text-green">{DATA.missionfounders.mission}</H3>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 xl:gap-6 sm:gap-6">
        {DATA.missionfounders.founders.map((founder, index) => (
          <Card key={index}>
            <Image quality={100} className="rounded-lg" src={founder.image} alt={founder.name} />

            <div>
              <H3>{founder.name}</H3>
              <SPAN className="text-green">{founder.role}</SPAN>
            </div>

            <P className="text-green max-w-[25ch]">{founder.position}</P>
          </Card>
        ))}
      </div>
    </section>
  )
}
