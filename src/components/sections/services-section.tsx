import { services } from '@/constants'
import { SectionTitle, ServicesContainer } from '..'

export const ServicesSection = () => {
  return (
    <section className='grid lg:grid-cols-2 items-center min-h-screen lg:h-screen w-full
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center
      px-4 overflow-hidden relative animate__animated animate__fadeIn page__fadeIn'
    >
      <div className='h-full px-6 z-10'>
        <div className='h-full'>
          <SectionTitle title='servicios'/>
          <ServicesContainer services={services}/>
        </div>
      </div>

      <div className='hidden lg:grid items-center bg-c3-1 h-[80%] m-auto md:w-auto
            md:aspect-6/7 absolute right-0 md:right-0 bottom-16 z-0 opacity-0 lg:opacity-100'>
      </div>
    </section>
  )
}
