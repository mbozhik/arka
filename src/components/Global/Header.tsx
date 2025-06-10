import logoImage from '$/logo.svg'

import {WEBSITE_BOX} from '~/Global/Container'
import {HEADER_PATHS, getHeaderPath} from '@/utils/getHeaderPath'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'
import {H5} from '~/UI/Typography'

export default function Header() {
  return (
    <header className={cn('fixed z-[99] w-full pt-12')}>
      <div className={cn(WEBSITE_BOX.header, 'py-7.5 px-20', 'flex items-center justify-between mx-auto', 'bg-white text-black ring ring-gray rounded-2xl')}>
        <div>
          <Image className="w-32" src={logoImage} alt="Arka" />
        </div>

        <div className="flex gap-14">
          {HEADER_PATHS.map((path) => (
            <Link href={getHeaderPath(path, 'link')} className="hover:text-gray-dark duration-300" key={path}>
              <H5>{path}</H5>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
