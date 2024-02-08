import { type FC, type PropsWithChildren } from 'react'
import Image from 'next/image'
import { type TProject } from '@/types'

export const Project: FC<PropsWithChildren<TProject>> = ({ children, asset, title }) => {
  return (
    <li className='aspect-video relative bg-c6 rounded-lg'
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
    </li>
  )
}
