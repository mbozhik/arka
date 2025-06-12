import {ArrowRight} from 'lucide-react'

import {getMedia} from '@/sanity/lib/requests'

import {getPathLink} from '@/utils/getPathLink'
import {urlFor} from '@/sanity/lib/image'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import Marker from '~/UI/Marker'
import Card from '~/UI/Card'
import {H5, SPAN} from '~/UI/Typography'

export default async function Media({block = 'Media'}: {block?: string}) {
  const media = await getMedia()

  const sortedMedia = media.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section data-section="offices-index" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <div className={cn('grid grid-cols-3 sm:grid-cols-1', 'sm:flex sm:flex-col', 'gap-8 xl:gap-6 sm:gap-5')}>
        {sortedMedia.map((item, index) => (
          <Card className={cn(item.size === '2' ? 'col-span-2' : 'col-span-1')} key={index}>
            <div className="space-y-4">
              <div className="h-[120px] xl:h-[100px] sm:h-[80px] space-y-4 sm:space-y-2.5">
                <SPAN className="text-gray">{item.date}</SPAN>

                <H5 animated={false} className="text-green line-clamp-2">
                  {item.heading}
                </H5>
              </div>

              <div className="w-full h-[20rem] sm:h-[15rem]">
                <Image quality={100} className="size-full object-cover rounded-lg" src={urlFor(item.image).url()} alt={item.heading} width={1000} height={1000} />
              </div>

              <div className={cn('flex justify-between -mb-2.5 xl:-mb-1 sm:mb-0', 'text-green')}>
                <Link className={cn('inline-flex gap-1', 'group')} href={item.source.url}>
                  <SPAN className="font-semibold">Read article</SPAN>
                  <ArrowRight className={cn('size-5 sm:hidden', 'group-hover:translate-x-1 duration-200')} strokeWidth={1.5} />
                </Link>

                <SPAN>{item.source.name}</SPAN>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
