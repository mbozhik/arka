import {cn} from '@/lib/utils'

import {H1, H2} from '~/UI/Typography'
import Button from '~/UI/Button'

export default function Hero() {
  return (
    <section data-section="hero-index" className="fixed w-full pt-48">
      <div className={cn('w-[83%] mx-auto')}>
        <H1>Where strategy meets capital.</H1>

        <div className="w-full mx-2 flex justify-between items-center">
          <H2>Across BRICS, MENA, and Eurasia</H2>

          <Button to="#request" text="Request a confidential consultation" />
        </div>
      </div>
    </section>
  )
}
