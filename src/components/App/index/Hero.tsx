import {cn} from '@/lib/utils'

export default function Hero() {
  return (
    <section data-section="hero-index" className="fixed w-full pt-48">
      <div className={cn('w-[83%] mx-auto')}>
        <h1 className="text-[130px] font-semibold font-serif">Where strategy meets capital.</h1>

        <div className="w-full mx-2 flex justify-between items-center">
          <h2 className="text-[52px] font-medium font-serif">Across BRICS, MENA, and Eurasia</h2>

          <button className={cn('px-3.5 py-3', 'border border-white-dirty rounded-md', 'text-xl uppercase font-light font-sans')}>Request a confidential consultation</button>
        </div>
      </div>
    </section>
  )
}
