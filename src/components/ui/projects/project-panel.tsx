'use client'

import { useState, type FC } from 'react'
// * Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'

// * Own code
import { ProjectCard, ProjectModal } from '@/components'
import { type TProject } from '@/types'
import { swiperConfig } from '@/config'

type Props = {
  projects: TProject[]
}

export const ProjectPanel: FC<Props> = ({ projects }) => {
  const [projectSelected, setProjectSelected] = useState<string | null>(null)

  const handleProjectSelected = (id: string) => {
    setProjectSelected(id)
  }

  const closeModal = () => { setProjectSelected(null) }

  return (
    <>
      <Swiper
        {...swiperConfig}
      >
        {
          projects.map((project) => (
            <SwiperSlide
              key={project.id}
              onClick={() => { handleProjectSelected(project.id) }}
              className='cursor-pointer hover:opacity-60 duration-75 transition-opacity'
            >
              <ProjectCard {...project}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      
      {/* Project modal on click */}
      {
        projectSelected !== null
          ? <ProjectModal id={projectSelected} onClose={closeModal}/>
          : null
      }
    </>
  )
}
