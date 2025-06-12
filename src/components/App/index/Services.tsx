import {DATA} from '@/lib/data'

import {getPathLink} from '@/utils/getPathLink'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Marker from '~/UI/Marker'
import Card from '~/UI/Card'
import {H4} from '~/UI/Typography'

export type View = 'desktop' | 'mobile'

function TargetServices({view}: {view: View}) {
  const isDesktop = view === 'desktop'
  const viewStyles = cn(isDesktop ? 'sm:hidden' : 'hidden sm:block', isDesktop && 'col-span-2 self-end justify-self-end text-right')
  return <div className={cn(viewStyles, 'max-w-[60ch]', 'text-2xl xl:text-xl sm:text-lg text-green font-light font-sans')}>{DATA.services.target}</div>
}

export default function Services({block = 'Services'}: {block?: string}) {
  return (
    <section data-section="services-index" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 xl:gap-6 sm:gap-4">
        <TargetServices view="mobile" />

        {DATA.services.items.map((service, index) => (
          <Card className="gap-2 xl:gap-4 sm:gap-3" key={index}>
            <Image quality={100} className="self-end size-24 xl:size-20 sm:size-20" src={service.icon} alt={service.title} />

            <H4 className="text-green text-balance">{service.title}</H4>
          </Card>
        ))}

        <TargetServices view="desktop" />
      </div>
    </section>
  )
}
