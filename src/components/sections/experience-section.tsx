import React from 'react'
import { Timeline } from '..'
import { timeline } from '@/constants'

export const ExperienceSection = () => {
  return (
    <section
      id='experiencia'
      className='border-b-[2px] border-c3-1 w-full py-20 bg-c1
        px-10 lg:px-0'
    >
      <div className='flex flex-col items-center m-auto w-full max-w-[62rem]'>
        <h3 className='text-start mb-14 text-3xl md:text-4xl font-bold
          bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'
        >
          Trayectoria profesional
        </h3>

        <Timeline timeline={timeline}/>
      </div>
    </section>
  )
}
