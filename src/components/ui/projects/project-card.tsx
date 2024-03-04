'use client'

import { useState, type FC } from 'react'
import Image from 'next/image'
import { type TProject } from '@/types'
import { cn } from '@/utils'
import { CardSkeleton } from '@/components'

type Props = {
  width?: number
  height?: number
} & TProject

export const ProjectCard: FC<Props> = ({ asset, title, width = 350, height = 200 }) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  return (
    <>
      {
        !loaded && (
          <CardSkeleton key={`loading-skeleton-${asset}-${title}`}/>
        )
      }

      <Image
        priority={false}
        className={
          cn('rounded-xl border-c3-1 border-2 mx-auto aspect-video',
            !loaded ? 'opacity-0 absolute' : 'fade-in')
        }
        src={`/img/projects/${asset}`}
        onLoad={() => { setLoaded(true) }}
        alt={`Proyecto ${title}`}
        width={width}
        height={height}
      />
    </>
  )
}
