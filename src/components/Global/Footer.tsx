'use client'

import {DATA} from '@/lib/data'
import {WEBSITE_BOX} from '~/Global/Container'

import {FOOTER_PATHS, getPathLink} from '@/utils/getPathLink'
import {cn} from '@/lib/utils'

import {usePathname} from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import {SPAN} from '~/UI/Typography'

export default function Footer() {
  if (usePathname().includes('/studio')) return null

  return (
    <footer className={cn('py-20 xl:py-12 sm:py-8', 'bg-green')}>
      <div className={cn(WEBSITE_BOX.container, 'mx-auto sm:mx-6', 'grid grid-cols-9 sm:flex sm:flex-col-reverse sm:gap-10')}>
        <div className="col-span-2">
          <Image className="w-60 xl:w-52 sm:w-[96%]" src={DATA.logo.dark} alt="Arka" />
        </div>

        <div className={cn('col-span-6', 'sm:hidden w-fit grid grid-cols-2 grid-rows-2 gap-y-1.5')}>
          {FOOTER_PATHS.map((path) => (
            <Link href={getPathLink(path, 'page')} className="hover:text-gray-light duration-300" key={path}>
              <SPAN className="font-light xl:text-xs sm:text-lg">{path}</SPAN>
            </Link>
          ))}
        </div>

        <div className={cn('col-span-1', 'flex flex-col gap-1.5 sm:gap-3')}>
          {Object.entries(DATA.socials).map(([name, url]) => (
            <Link href={url} className="hover:text-gray-light duration-300" key={name}>
              <SPAN className="font-light xl:text-xs sm:text-lg">{name}</SPAN>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
