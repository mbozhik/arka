import {AlignJustify} from 'lucide-react'

import {DATA} from '@/lib/data'
import {WEBSITE_BOX} from '~/Global/Container'

import {HEADER_PATHS, getPathLink} from '@/utils/getPathLink'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'
import {H5} from '~/UI/Typography'

export default function Header() {
  return (
    <header className={cn('fixed z-[99] w-full pt-12 xl:pt-8 sm:pt-3')}>
      <div className={cn(WEBSITE_BOX.header, 'py-7.5 xl:py-6 px-20 xl:px-16 sm:px-3 sm:pr-1.5 sm:py-1', 'flex items-center justify-between mx-auto', 'bg-white text-black ring ring-gray rounded-2xl sm:rounded-xl')}>
        <div>
          <Image className="w-32 xl:w-28 sm:w-24 sm:py-2" src={DATA.logo.light} alt="Arka" />
        </div>

        <div className="flex gap-14 sm:hidden">
          {HEADER_PATHS.map((path) => (
            <Link href={getPathLink(path, 'anchor')} className="hover:text-gray-dark duration-300" key={path}>
              <H5>{path}</H5>
            </Link>
          ))}
        </div>

        {/* finalize mobile menu*/}
        <div className={cn('hidden sm:flex h-full', 'p-2 bg-green text-white rounded-lg')}>
          <AlignJustify />
        </div>
      </div>
    </header>
  )
}
