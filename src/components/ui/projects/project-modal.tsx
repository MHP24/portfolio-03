'use client'

import { projects } from '@/constants'
import { type FC } from 'react'
import { createPortal } from 'react-dom'
import { ProjectCard } from './project-card'

type Props = {
  id: string
}

export const ProjectModal: FC<Props> = ({ id }) => {
  const project = projects.find(({ id: _id }) => _id === id)!

  return (
    <>
      {
        typeof window !== 'undefined'
          ? createPortal(
            <section className='z-20 fixed top-0 left-0 bottom-0 right-0 bg-c1-1 text-center grid place-items-center px-6'>
              <div className='grid grid-cols-1 lg:grid-cols-2 items-center place-items-center bg-c1 p-10 w-62rem rounded-lg border-[1px] border-c3-1'>
                <div>
                  <h3 className='text-3xl text-start mb-4 font-bold
                    bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500'
                  >
                    {project.title}
                  </h3>

                  <hr className='border-[1px] border-c3-1 mb-4'/>
                  <ProjectCard
                    {...project}
                    width={500}
                  />
                </div>
              </div>
            </section>,
            document.getElementById('modal')!
          )
          : null
      }
    </>
  )
}
