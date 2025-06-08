import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import Hero from '~~/index/Hero'

export default function IndexPage() {
  return (
    <>
      <Hero />

      <Container offset={true}>
        <div className={cn('relative z-20', 'p-8', 'bg-white text-black rounded-3xl')}>
          <div className="text-2xl">Some content</div>
        </div>
      </Container>
    </>
  )
}
