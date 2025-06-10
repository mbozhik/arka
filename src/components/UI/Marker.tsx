import {cn} from '@/lib/utils'

import {H5} from '~/UI/Typography'

export default function Marker() {
  return (
    <div data-block="marker" className={cn('flex items-center gap-2.5 pb-1', 'border-b border-gray-dark')}>
      <div className="size-2.5 bg-gray-dark rounded-full"></div>

      <H5 className="text-gray-dark">Marker Title</H5>
    </div>
  )
}
