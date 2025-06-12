'use client'

import {DATA} from '@/lib/data'

import {getPathLink} from '@/utils/getPathLink'
import {useMediaQuery} from '@/utils/use-media-query'
import {cn} from '@/lib/utils'

import Marker from '~/UI/Marker'
import Card from '~/UI/Card'
import OfficesMap from '~~/index/OfficesMap'
import {P, SPAN} from '~/UI/Typography'

export default function Offices({block = 'Offices'}: {block?: string}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section data-section="offices-index" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <div className={cn(isDesktop ? 'relative' : 'flex flex-col gap-1', !isDesktop && 'p-2 border border-gray-border rounded-xl')}>
        <OfficesMap view={isDesktop ? 'desktop' : 'mobile'} className={cn('w-full h-full rounded-xl', isDesktop && 'border border-gray-border')} />

        <div className={cn('absolute sm:relative top-0 right-0', 'p-6 xl:p-4 sm:p-2 h-full')}>
          <Card className={cn('h-full', 'pr-16 xl:pr-10', 'flex flex-col justify-center gap-10 sm:gap-4', 'border-none sm:bg-transparent')}>
            {DATA.offices.map((office, index) => (
              <div className="space-y-1.5 xl:space-y-1 text-green" key={index}>
                <SPAN className="inline-block text-gray font-light">Office {index + 1}</SPAN>

                <P>{office.phone}</P>
                <P>{office.address}</P>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}
