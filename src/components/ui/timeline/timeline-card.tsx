import React, { type FC } from 'react'

type Props = {
  latest: boolean
  title: string
  date: string
  description: string
}

export const TimelineCard: FC<Props> = ({ title, date, description, latest }) => {
  return (
    <li className='mb-10 ms-6 flex'>
      <span className='absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-c3-1 bg-c7'>
        <svg className='w-2.5 h-2.5 text-c3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
        </svg>
      </span>
      <div className='ml-5'>
        <h3 className='flex items-center mb-1 text-md md:text-lg font-semibold text-c3'>
          { title }

          {/* First timeline item */}
          {
            latest &&
          <span className='bg-c3 text-c2 font-bold text-sm md:text-md me-2 px-2.5 py-0.5 rounded ms-3'>Ahora</span>
          }
        </h3>
        <time className='block mb-2 text-lg leading-none text-c3 opacity-90'>
          {date}
        </time>
        <p className='mb-4 text-base text-c3 opacity-70'>
          {description}
        </p>
      </div>
    </li>
  )
}
