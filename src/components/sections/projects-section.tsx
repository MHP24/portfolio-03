import { ProjectPanel } from '@/components'
import { projects } from '@/constants'

export const ProjectsSection = () => {
  return (
    <section
      id='proyectos'
      className='w-full
      py-14 overflow-hidden relative bg-c4
      border-b-[1px] border-c3-1 border-l-0 border-r-0 px-10 xl:px-0'
    >
      <div className='h-full m-auto w-full max-w-[62rem]'>

        <h3 className='text-start text-3xl md:text-4xl font-bold mb-6'>
          <span className='bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent'>
            {' Portafolio'}
          </span>

          <span className='bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent'>
            {' de'}
          </span>

          <span className='bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent'>
            {' proyectos'}
          </span>
        </h3>
        <h4 className='text-start text-lg md:text-xl opacity-70'>
            Desarrollos y soluciones orientadas a distintos rubros y comunidades
        </h4>
        <hr className='mt-5 mb-8 border-[1px] border-c3-1'/>
        <ProjectPanel projects={projects}/>
      </div>

    </section>
  )
}
