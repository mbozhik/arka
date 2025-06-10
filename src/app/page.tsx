import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import MissionFounders from '~~/index/MissionFounders'

export default function IndexPage() {
  return (
    <>
      <Hero />

      <Container offset={true}>
        <div className={cn('relative z-20', 'p-10 xl:p-9 sm:p-3.5', 'bg-white text-black rounded-[20px] sm:rounded-xl')}>
          <MissionFounders />
        </div>
      </Container>
    </>
  )
}
