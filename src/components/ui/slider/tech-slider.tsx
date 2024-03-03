'use client'

import { useEffect, useState } from 'react'
import { techSlides } from '@/constants'
import { TechSlide } from './tech-slide'

export const TechSlider = () => {
  const [slide, setSlide] = useState<{ i: number, slides: string[] }>({
    i: 0,
    slides: techSlides
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const index = slide.i + 1 > techSlides.length - 1
        ? 0
        : slide.i + 1
      console.log({ index })
      setSlide(prev => ({
        ...prev,
        i: index,
        slides: techSlides
      }))
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [slide])

  return (
    <ul className='h-full w-full grid place-items-center'>
      {
        techSlides.map((tech, i) => (
          <TechSlide
            key={`tech-${tech}`}
            tech={tech}
            className={i === slide.i ? 'grid' : 'hidden'}
          />
        ))
      }
    </ul>
  )
}
