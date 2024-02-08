'use client'

import Link from 'next/link'
import Image from 'next/image'
import { type FC, useState } from 'react'

type Props = {
  path: string
  label: string
  asset: string
}

export const NavItem: FC<Props> = ({ path, label, asset }) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <div className='relative flex items-center'>
      <Link href={path}
        className='grid place-items-center m-auto select-none'
        onMouseEnter={() => { setIsHover(true) }}
        onMouseLeave={() => { setIsHover(false) }}
      >
        <Image
          className='bg-c6 transition-all delay-75 hover:opacity-80 p-3 rounded-full border-[1px] border-c3-1'
          src={`/svgs/${asset}.svg`} alt={label} width={54} height={54}
        />
      </Link>

      {
        isHover && (
          <label
            className='absolute translate-x-16 capitalize text-sm bg-c6 px-2 py-1 rounded-md border-[1px] border-c3-1'>
            {label}
          </label>
        )
      }
    </div>
  )
}
