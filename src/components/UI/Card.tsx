import {cn} from '@/lib/utils'

export default function Card({children, className}: {children: React.ReactNode; className?: string}) {
  return (
    <div data-block="card" className={cn('flex flex-col', 'p-6 xl:p-5 sm:p-2.5', 'gap-4 xl:gap-3 sm:gap-2.5', 'bg-gray-light border border-gray-border rounded-xl', className)}>
      {children}
    </div>
  )
}
