import logoImage from '$/logo.svg'

import {cn} from '@/lib/utils'
import {HEADER_PATHS, getHeaderPath} from '@/utils/getHeaderPath'

import Image from 'next/image'
import Link from 'next/link'

const HEADER_BOX = 'w-[88%]'

export default function Header() {
  return (
    <header className={cn('fixed w-full py-12')}>
      <div className={cn(HEADER_BOX, 'py-7.5 px-20', 'flex items-center justify-between mx-auto', 'bg-white text-black rounded-2xl')}>
        <div>
          <Image className="w-32" src={logoImage} alt="Arka" />
        </div>

        <div className="flex gap-14">
          {HEADER_PATHS.map((path) => (
            <Link href={getHeaderPath(path, 'link')} className={cn('text-xl font-serif font-semibold uppercase', 'hover:text-gray-dark duration-300')} key={path}>
              {path}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
