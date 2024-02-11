'use client'

import { type FC } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { LinkButton, TechnologiesGrid, ProjectCard } from '@/components'
import { projects } from '@/constants'

type Props = {
  id: string
  onClose: () => void
}

export const ProjectModal: FC<Props> = ({ id, onClose }) => {
  const project = projects.find(({ id: _id }) => _id === id)!

  return (
    <>
      {
        typeof window !== 'undefined'
          ? createPortal(
            <div className='
              z-20 fixed top-0 left-0 bottom-0 right-0
            grid place-items-center px-6'
            >
              <div
                className='bg-c1-1 w-full h-full absolute left-0 top-0 right-0 bottom-0'
                onClick={onClose}
              >

              </div>
              <article className='
                relative bg-c1 p-10 w-full max-w-[62rem]
                rounded-lg border-[1px] border-c3-1 scaleIn'
              >
                <button
                  className='absolute top-5 right-5 cursor-pointer font-bold text-xl'
                  onClick={onClose}
                >
                  X
                </button>

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
                  <div className='flex flex-col gap-6 justify-between text-start h-full'>
                    {
                      project.description.map((paragraph, i) => (
                        <p key={`paragraph-${i}-project-${project.id}`}>{paragraph}</p>
                      ))
                    }

                    <p>
                      Puedes acceder a los siguientes enlaces para mayor informaci&oacute;n
                      y tener un mejor acercamiento con este proyecto.
                    </p>

                    {/*  Links  */}
                    <div className='flex flex-wrap justify-center mb-4 md:mb-0 md:justify-normal gap-4 w-full'>
                      {
                        project.links.production &&
                        <LinkButton href={project.links.production}>
                          <Image
                            src={'svgs/medias/google.svg'}
                            alt='google'
                            width={20}
                            height={20}
                          />
                          <span>Visitar producci&oacute;n</span>
                        </LinkButton>
                      }

                      <LinkButton href={project.links.repository}>
                        <Image
                          src={'svgs/medias/github.svg'}
                          alt='github'
                          width={20}
                          height={20}
                        />
                        <span>Repositorio GitHub</span>
                      </LinkButton>
                    </div>
                  </div>

                </div>

                {/* Techs */}
                <div className='mt-4 text-start'>
                  <h4 className='text-xl mb-2'>Tecnolog&iacute;as utilizadas</h4>
                  <TechnologiesGrid technologies={project.technologies}/>
                </div>

              </article>
            </div>,
            document.getElementById('modal')!
          )
          : null
      }
    </>
  )
}
