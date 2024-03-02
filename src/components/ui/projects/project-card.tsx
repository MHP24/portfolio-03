import { type FC } from 'react'
import Image from 'next/image'
import { type TProject } from '@/types'

type Props = {
  width?: number
  height?: number
} & TProject

export const ProjectCard: FC<Props> = ({ asset, title, width = 350, height = 200 }) => {
  return (

    < >
      <Image
        priority={false}
        className='rounded-xl border-c3-1 border-2 mx-auto aspect-video'
        src={`/img/projects/${asset}`}
        alt={`proyecto ${title}`}
        width={width}
        height={height}
      />
    </>
  )
}
