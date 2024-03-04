import Image from 'next/image'
import { LinkButton, TechSlider } from '..'

export const HeroSection = () => {
  return (
    <section
      id='inicio'
      className='h-screen w-full bg-fixed bg-cover bg-no-repeat bg-center
      px-4 grid place-items-center relative overflow-x-hidden'
    >

      <div className='flex flex-col items-center lg:flex-row w-[95%] gap-8 lg:-mt-4'>
        <article className='flex flex-col gap-6 m-auto w-full max-w-[43rem] lg:max-w-none lg:w-[70%]'>
          <h1 className='text-3xl md:text-5xl font-semibold'>
            ¡Hola!👋 Soy Miguel Henr&iacute;quez Pacheco
          </h1>

          <h2 className='text-lg md:text-2xl mt-2'>
            Experto en procesos del &aacute;rea TI,
            <span className='font-semibold'> desarrollador </span>
            con <span className='font-semibold'>+1 año de experiencia, </span>
            fan&aacute;tico del Cloud y DevOps.
          </h2>

          <ul className='flex flex-wrap gap-6 w-full'>
            <li className='w-36 md:w-48'>
              <LinkButton
                href='https://github.com/MHP24'
                className='bg-c8 border-c3-1 font-semibold'
              >
                <Image
                  src={'/svgs/medias/github.svg'}
                  width={30}
                  height={30}
                  alt='github'
                  priority={true}
                />
                Proyectos
              </LinkButton>
            </li>
            <li className='w-36 md:w-48'>
              <LinkButton
                href='https://linkedin.com/in/miguel-henríquez-pacheco-1831501b8'
                className='bg-c3 text-c4 bg-opacity-90
                  font-semibold hover:bg-c3 hover:bg-opacity-100 hover:text-c4'
              >
                <Image
                  src={'/svgs/medias/linkedin.svg'}
                  width={30}
                  height={30}
                  alt='linkedin'
                  priority={true}
                />
                Conectar
              </LinkButton>
            </li>
          </ul>

        </article>

        <div className='w-[40%] aspect-square hidden lg:block'>
          <TechSlider/>
        </div>
      </div>

      {/* Polygon */}
      <div className='absolute right-0 top-0 w-full sm:w-[75%] h-full -z-10
        clip-triangle bg-c3-1'>
      </div>
    </section>

  )
}
