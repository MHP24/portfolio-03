import { type FC } from 'react'
import { Project } from '@/components'
import { type TProject } from '@/types'

type Props = {
  projects: TProject[]
}

export const ProjectPanel: FC<Props> = ({ projects }) => {
  return (
    <ul className='h-full grid grid-cols-3 gap-6'>
      {
        projects.map((project, i) => (
          <Project key={`project-${project.title}-${i}`} {...project}/>
        ))
      }
    </ul>
  )
}
