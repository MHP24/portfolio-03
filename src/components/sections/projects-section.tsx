import { ProjectPanel } from '@/components'
import { projects } from '@/constants'

export const ProjectsSection = () => {
  return (
    <section
      id='proyectos'
      className='w-full
      py-14 overflow-hidden relative bg-c4
      border-b-[1px] border-c3-1 border-l-0 border-r-0 px-10 md:px-0'
    >
      <div className='h-full m-auto w-full max-w-[1000px]'>

        <h3 className='text-start text-4xl font-bold mb-16'>
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
        <hr className='mt-5 border-[1px] border-c3-1'/>
        <ul className='flex gap-5 mt-4 mb-10'>
          <li className='text-xl'>Full-stack</li>
          <li className='text-xl'>Frontend</li>
          <li className='text-xl'>Backend</li>
        </ul>
        <ProjectPanel projects={projects}/>
      </div>

    </section>
  )
}
