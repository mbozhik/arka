import {cn} from '@/lib/utils'

export const WEBSITE_BOX = {
  mini: 'w-[85%] sm:w-auto sm:mx-2.5',
  header: 'w-[88%] xl:w-[90%] sm:w-auto sm:mx-1.5',
  container: 'w-[90%] xl:w-[93%] sm:w-auto sm:mx-2.5',
}

export default function Container({children, offset, className}: {children: React.ReactNode; offset: boolean; className?: string}) {
  return <main className={cn(WEBSITE_BOX.container, 'mx-auto', offset && 'pt-[32rem] xl:pt-[25.5rem]', 'pb-16 sm:pb-10', className)}>{children}</main>
}
