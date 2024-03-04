import { cn } from '@/utils'
import Image from 'next/image'
import { type FC } from 'react'

type Props = {
  tech: string
  className?: string
}

export const TechSlide: FC<Props> = ({ tech, className = '' }) => {
  return (
    <li className={cn('fade-in relative w-full h-full place-items-center', className)}>
      <Image src={`/img/3d/${tech}.webp`}
        priority={true}
        width={350}
        height={350}
        alt={tech}
        className='absolute drop-shadow-lg floating'
      />
    </li>
  )
}
