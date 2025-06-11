import {WEBSITE_BOX} from '~/Global/Container'
import {cn} from '@/lib/utils'

import {H1, H2} from '~/UI/Typography'
import Button from '~/UI/Button'

export default function Hero() {
  return (
    <section data-section="hero-index" className="fixed w-full pt-48 xl:pt-36 sm:pt-28">
      <div className={cn(WEBSITE_BOX.mini, 'mx-auto xl:space-y-1 sm:space-y-4')}>
        <H1>Where strategy meets capital.</H1>

        <div className="w-full mx-2 xl:mx-1 flex sm:flex-col justify-between items-center sm:items-start sm:gap-4">
          <H2 className="sm:max-w-[20ch]">Across BRICS, MENA, and Eurasia</H2>

          <Button className="sm:hidden" to="#request" text="Request a confidential consultation" />
          <Button className="hidden sm:block" to="#request" text="Contact" />
        </div>
      </div>
    </section>
  )
}
