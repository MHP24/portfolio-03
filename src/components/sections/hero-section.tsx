import { secondaryFont } from '@/fonts'

export const HeroSection = () => {
  return (
    <section
      id='inicio'
      className='h-screen w-full bg-fixed bg-cover bg-no-repeat bg-center
      px-4 relative'
    >

      <div className='h-full flex flex-col items-start w-full px-20 justify-center z-1'
      >
        <h1 className='text-8xl font-bold fade'>{'Miguel Henríquez Pacheco'}</h1>

        <h2 className={`${secondaryFont.className} 
          text-3xl md:text-5xl mt-10 
          bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent fade`}
        >
          Desarrollador full stack
        </h2>

        <div className='bg-c3-1 w-[40%] h-full absolute top-0 right-0 border-l-2 border-c3-1 rightToLeft'></div>
      </div>

    </section>

  )
}
