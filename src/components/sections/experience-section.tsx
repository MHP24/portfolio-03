import React from 'react'
import { Timeline } from '..'
import { timeline } from '@/constants'

export const ExperienceSection = () => {
  return (
    <section id='experiencia' className='border-[2px] border-c3-1 border-l-0 border-r-0 w-full py-20 bg-c1'>
      <div className='flex flex-col items-center m-auto w-full max-w-[1000px]'>
        <h3 className='text-start mb-16 text-3xl font-bold'>Experiencia</h3>
        <Timeline timeline={timeline}/>
      </div>
    </section>
  )
}
