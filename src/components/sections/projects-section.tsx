import { ProjectPanel, SectionTitle } from '@/components'
import { projects } from '@/constants'

export const ProjectsSection = () => {
  return (
    <section className='h-screen w-full
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center
      px-4 overflow-hidden relative'
    >
      <div className='px-6 h-full'>
        <SectionTitle title='proyectos'/>
        <div className='h-[70%] z-10'>
          <ProjectPanel projects={projects}/>
        </div>
      </div>

      <div className='absolute right-0 top-0 h-full w-[30%] flex'>
        <div className='hidden lg:grid items-center bg-c3-1 h-[70%] w-full m-auto
         z-0 opacity-70 lg:opacity-100'>
        </div>
      </div>

    </section>
  )
}
