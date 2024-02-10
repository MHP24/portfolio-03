import { type FC } from 'react'
import Image from 'next/image'
import { type TProject } from '@/types'

export const Project: FC<TProject> = ({ asset, title }) => {
  return (

    < >
      <Image
        priority={true}
        className='rounded-xl border-c3-1 border-2'
        src={`/img/projects/${asset}`}
        alt={`proyecto ${title}`}
        width={350}
        height={200}
      />
    </>
  )
}
