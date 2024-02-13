'use client'

import { type PropsWithChildren, type FC } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  onClose: () => void
}
export const Modal: FC<PropsWithChildren<Props>> = ({ children, onClose }) => {
  return (
    <>
      {
        typeof window !== 'undefined'
          ? createPortal(
            <div className='z-20 fixed top-0 left-0 bottom-0 right-0
              grid place-items-center px-6'
            >
              <div
                className='bg-c1-1 w-full h-full absolute left-0 top-0 right-0 bottom-0'
                onClick={onClose}
              >
              </div>
              <article className='relative bg-c1 p-4 sm:p-10 w-full h-[90vh] overflow-scroll
                lg:overflow-hidden lg:h-auto max-w-[62rem]
                rounded-lg border-[1px] border-c3-1 scaleIn'
              >
                <button
                  className='absolute top-5 right-5 cursor-pointer font-bold text-xl'
                  onClick={onClose}
                >
                  {'X'}
                </button>
                {children}
              </article>
            </div>,
            document.getElementById('modal')!
          )
          : null
      }
    </>
  )
}
