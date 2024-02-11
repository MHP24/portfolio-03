'use client'

import { useState, type FC } from 'react'
import Image from 'next/image'
import { type Technology as TTechnology } from '@/types'

type Props = TTechnology

export const Technology: FC<Props> = ({ asset, name }) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <li
      className='flex relative'
      onMouseEnter={() => { setIsHover(true) }}
      onMouseLeave={() => { setIsHover(false) }}
    >
      <Image
        className='z-0'
        alt={name}
        src={`/svgs/technologies/${asset}.svg`}
        width={30}
        height={30}
      />
      {
        isHover && (
          <label
            className='absolute translate-x-9 capitalize text-sm
              bg-c6 px-2 py-1 rounded-md border-[1px] border-c3-1 z-10 whitespace-nowrap'
          >
            {name}
          </label>
        )
      }
    </li>
  )
}
