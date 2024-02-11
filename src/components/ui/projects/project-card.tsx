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
        priority={true}
        className='rounded-xl border-c3-1 border-2 mx-auto'
        src={`/img/projects/${asset}`}
        alt={`proyecto ${title}`}
        width={width}
        height={height}
      />
    </>
  )
}
