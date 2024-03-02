'use client'

import { useEffect, useState } from 'react'
import { techSlides } from '@/constants'
import { TechSlide } from './tech-slide'

export const TechSlider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(
        slideIndex + 1 > techSlides.length - 1
          ? 0
          : slideIndex + 1
      )
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [slideIndex])

  return (
    <TechSlide
      key={`tech-${slideIndex}`}
      tech={techSlides[slideIndex]}
    />
  )
}
