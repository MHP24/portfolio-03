import React from 'react'
import { Timeline } from '..'
import { timeline } from '@/constants'

export const ExperienceSection = () => {
  return (
    <section className='border-[2px] border-c3-1 border-l-0 border-r-0 w-full flex justify-center py-20 mt-28'>
      <Timeline timeline={timeline}/>
    </section>
  )
}
