import {cn} from '@/lib/utils'

import {H5} from '~/UI/Typography'

export default function Marker({heading}: {heading: string}) {
  return (
    <div data-block="marker" className={cn('flex items-center gap-2.5 pb-1 sm:pb-1.5', 'border-b border-gray-dark')}>
      <div className="size-2.5 bg-gray-dark rounded-full"></div>

      <H5 className="text-gray-dark">{heading}</H5>
    </div>
  )
}
