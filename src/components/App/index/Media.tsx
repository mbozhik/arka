import {getPathLink} from '@/utils/getPathLink'

import {cn} from '@/lib/utils'

import Marker from '~/UI/Marker'

export default function Media({block = 'Media'}: {block?: string}) {
  return (
    <section data-section="offices-index" id={getPathLink(block, 'id')} className="space-y-10 xl:space-y-8 sm:space-y-4">
      <Marker heading={block} />

      <div className={cn('grid grid-cols-3 sm:grid-cols-1', 'sm:flex sm:flex-col', 'gap-8 xl:gap-6 sm:gap-5')}>data</div>
    </section>
  )
}
