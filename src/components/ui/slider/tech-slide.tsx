import Image from 'next/image'
import { type FC } from 'react'

type Props = {
  tech: string
}

export const TechSlide: FC<Props> = ({ tech }) => {
  return (
    <div className='fade-in relative w-full h-full grid place-items-center'>
      <Image src={`/img/3d/${tech}.png`}
        priority={true}
        width={350}
        height={350}
        alt={tech}
        className='absolute drop-shadow-lg floating'
      />
    </div>
  )
}
