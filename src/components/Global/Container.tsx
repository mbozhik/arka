import {cn} from '@/lib/utils'

export const WEBSITE_BOX = {
  mini: 'w-[85%]',
  header: 'w-[88%]',
  container: 'w-[90%]',
}

export default function Container({children, offset, className}: {children: React.ReactNode; offset: boolean; className?: string}) {
  return <main className={cn(WEBSITE_BOX.container, 'mx-auto', offset && 'pt-[32rem]', className)}>{children}</main>
}
