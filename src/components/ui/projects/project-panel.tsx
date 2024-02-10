'use client'

import { type FC } from 'react'
// * Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Autoplay
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'

// * Own code
import { Project } from '@/components'
import { type TProject } from '@/types'

type Props = {
  projects: TProject[]
}

export const ProjectPanel: FC<Props> = ({ projects }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay]}
      spaceBetween={22}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      loop
      navigation
      pagination={{ clickable: true }}
      grid = {{
        rows: 2,
        fill: 'row'
      }}
    >
      {
        projects.map((project, i) => (
          <SwiperSlide key={`project-${project.title}-${i}`}>
            <Project {...project}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
