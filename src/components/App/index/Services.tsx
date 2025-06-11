import {DATA} from '@/lib/data'

import {getPathLink} from '@/utils/getPathLink'

import Image from 'next/image'
import Marker from '~/UI/Marker'
import Card from '~/UI/Card'
import {H4} from '~/UI/Typography'

export default function Services({block = 'Services'}: {block?: string}) {
  return (
    <section data-section="index-services" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 xl:gap-6 sm:gap-4">
        {DATA.services.map((service, index) => (
          <Card className="gap-2 xl:gap-4 sm:gap-3" key={index}>
            <Image quality={100} className="self-end size-24 xl:size-20 sm:size-20" src={service.icon} alt={service.title} />

            <H4 className="text-green text-balance">{service.title}</H4>
          </Card>
        ))}
      </div>
    </section>
  )
}
