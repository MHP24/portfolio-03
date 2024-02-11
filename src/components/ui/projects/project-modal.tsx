'use client'

import { type FC } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { LinkButton, TechnologiesGrid, ProjectCard } from '@/components'
import { projects } from '@/constants'

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
            <article className='z-20 fixed top-0 left-0 bottom-0 right-0 bg-c1-1 text-center grid place-items-center px-6'>

              <div className='
                bg-c1 p-10 w-full max-w-[62rem]
                rounded-lg border-[1px] border-c3-1'
              >

                {/* Title */}
                <h3 className='text-3xl text-start font-bold
                    bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500'
                >
                  {project.title}
                </h3>

                <hr className='border-[1px] border-c3-1 mb-8 mt-4'/>

                {/* Content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
                  <ProjectCard
                    {...project}
                    width={500}
                  />

                  {/* Information */}
                  <div className='flex flex-col justify-between text-start h-full'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure libero
                        quibusdam explicabo fugiat hic deleniti molestias. Odio enim error, dolore, molestiae nostrum modi unde accusamus beatae ullam doloremque quas.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure libero
                        quibusdam explicabo fugiat hic deleniti molestias. Odio enim
                    </p>

                    {/*  Links  */}
                    <div className='flex gap-4 w-full'>
                      {
                        project.links.production &&
                        <LinkButton href={project.links.production}>
                          <div
                            className='flex gap-3 items-center w-full
                          border-2 border-c3 hover:bg-c3-1 py-2 rounded-full px-6 transition-all duration-200'
                          >
                            <Image
                              src={'svgs/medias/google.svg'}
                              alt='google'
                              width={20}
                              height={20}
                            />
                            <span>Visitar producci&oacute;n</span>
                          </div>
                        </LinkButton>
                      }

                      <LinkButton href={project.links.repository}>
                        <div
                          className='flex gap-3 items-center w-full
                          border-2 border-c3 hover:bg-c3-1 py-2 rounded-full px-6 transition-all duration-200'
                        >
                          <Image
                            src={'svgs/medias/github.svg'}
                            alt='github'
                            width={20}
                            height={20}
                          />
                          <span>Repositorio GitHub</span>
                        </div>
                      </LinkButton>
                    </div>
                  </div>

                </div>

                {/* Techs */}
                <div className='mt-4 text-start'>
                  <h4 className='text-xl mb-2'>Tecnolog&iacute;as utilizadas</h4>
                  <TechnologiesGrid technologies={project.technologies}/>
                </div>

              </div>
            </article>,
            document.getElementById('modal')!
          )
          : null
      }
    </>
  )
}
