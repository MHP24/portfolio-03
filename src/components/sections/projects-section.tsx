import { ProjectPanel } from '@/components'
import { projects } from '@/constants'

export const ProjectsSection = () => {
  return (
    <section
      id='proyectos'
      className='w-full
      py-14 overflow-hidden relative bg-c4
      border-[2px] border-c3-1 border-l-0 border-r-0'
    >
      <div className='h-full m-auto w-full max-w-[1000px]'>
        <h3 className='text-start text-3xl font-bold mb-16'>Portafolio de proyectos</h3>
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
