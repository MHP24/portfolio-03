import { type FC } from 'react'
import Image from 'next/image'
import { type TProject } from '@/types'

export const Project: FC<TProject> = ({ asset, title }) => {
  return (
    <div className='aspect-video relative bg-c6 rounded-lg'
    >
      <div className='z-10'>
        <Image
          priority={true}
          className='rounded-xl border-c3-1 border-2'
          src={`/img/projects/${asset}`}
          alt={`proyecto ${title}`}
          width={350}
          height={200}
        />
      </div>
    </div>
  )
}
