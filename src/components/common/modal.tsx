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
              {children}
            </div>,
            document.getElementById('modal')!
          )
          : null
      }
    </>
  )
}
