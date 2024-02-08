import React from 'react'
import { Timeline } from '..'
import { timeline } from '@/constants'

export const ExperienceSection = () => {
  return (
    <section className='border-[2px] border-c3-1 border-l-0 border-r-0 w-full py-10 bg-c1'>
      <div className='m-auto w-full max-w-[1000px]'>
        <h3 className='text-start mb-10 text-3xl font-bold'>Experiencia</h3>
        <Timeline timeline={timeline}/>
      </div>
    </section>
  )
}
