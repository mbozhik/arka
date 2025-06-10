import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import MissionFounders from '~~/index/MissionFounders'

export default function IndexPage() {
  return (
    <>
      <Hero />

      <Container offset={true}>
        <div className={cn('relative z-20', 'p-10', 'bg-white text-black rounded-[20px]')}>
          <MissionFounders />
        </div>
      </Container>
    </>
  )
}
