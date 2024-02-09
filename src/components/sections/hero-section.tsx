import { secondaryFont } from '@/fonts'

export const HeroSection = () => {
  return (
    <section
      id='inicio'
      className='h-screen w-full bg-heroBg bg-fixed bg-cover bg-no-repeat bg-center
      px-4 flex relative overflow-hidden'
    >

      <div className='h-full flex flex-col justify-center items-center w-full gap-40 px-6 z-10'>
        <h1 className='text-5xl md:text-7xl text-center font-semibold'>
          {'Miguel Henríquez Pacheco'}
        </h1>

        <h2 className={`${secondaryFont.className} text-3xl sm:text-4xl`}>Desarrollador full stack</h2>
      </div>

      <div className='grid items-center bg-c3-1 h-[80%] w-8/12 m-auto md:w-auto
        md:aspect-6/7 absolute right-0 md:right-16 bottom-0 z-0 opacity-70 lg:opacity-100'>
      </div>
    </section>

  )
}
