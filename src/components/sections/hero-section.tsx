import Image from 'next/image'
import { LinkButton } from '..'

export const HeroSection = () => {
  return (
    <section
      id='inicio'
      className='h-screen w-full bg-fixed bg-cover bg-no-repeat bg-center
      px-4 grid place-items-center'
    >

      <div className='grid grid-cols-2 w-[90%] z-10'>
        <article className='flex flex-col gap-6'>
          <h1 className='text-5xl font-semibold'>
            ¡Hola!👋 Soy Miguel Henr&iacute;quez Pacheco
          </h1>

          <h3 className='text-2xl mt-2'>
            Experto en procesos del &aacute;rea TI,
            <span className='font-semibold'> desarrollador </span>
            con <span className='font-semibold'>+1 año de experiencia, </span>
            fan&aacute;tico del Cloud y DevOps.
          </h3>

          <ul className='flex items-center gap-6 mt-6'>
            <li className='w-48'>
              <LinkButton
                href='https://github.com/MHP24'
                className='bg-c8  border-c3-1 font-semibold'
              >
                <Image src={'/svgs/medias/github.svg'} width={30} height={30} alt='github'/>
                Proyectos
              </LinkButton>
            </li>
            <li className='w-48'>
              <LinkButton
                href=''
                className='border-c3-1 bg-c3 text-c4 bg-opacity-90
                  font-semibold hover:bg-c3 hover:bg-opacity-100 hover:text-c4'
              >
                <Image src={'/svgs/medias/linkedin.svg'} width={30} height={30} alt='linkedin'/>
                Conectar
              </LinkButton>
            </li>
          </ul>

        </article>

        <div></div>
      </div>

      {/* Polygon */}
      <div className='absolute right-0 top-0 w-[70%] h-full z-0
        clip-triangle bg-c3-1'>
      </div>
    </section>

  )
}
