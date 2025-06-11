import {P} from '~/UI/Typography'
import {cn} from '@/lib/utils'

import Link from 'next/link'

const buttonStyles = {
  base: cn('px-3.5 sm:px-16 py-3 xl:py-2.5 sm:py-3', 'border border-white-dirty rounded-md', 'active:scale-95 duration-300'),
  animation: 'group/button relative overflow-hidden bg-green',
} as const

export default function Button({to, text, className, onClick}: {text: string; to?: string; className?: string; onClick?: () => void}) {
  const buttonClasses = cn([buttonStyles.base, buttonStyles.animation], className)

  const content = (
    <>
      <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-white to-white transition-all duration-500 group-hover/button:h-full" />
      <P className="relative z-10 transition-all duration-500 group-hover/button:text-black font-[350] uppercase">{text}</P>
    </>
  )

  if (to) {
    return (
      <Link href={to} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  )
}
