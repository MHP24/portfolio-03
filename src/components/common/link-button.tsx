import Link from 'next/link'
import { type FC, type PropsWithChildren } from 'react'

type Props = {
  href: string
}

export const LinkButton: FC<PropsWithChildren<Props>> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='flex gap-3 items-center justify-center min-w-full sm:min-w-fit
        border-2 border-c3 hover:bg-c3-1 py-2 rounded-full px-2 sm:px-6 transition-all duration-200'
    >
      {children}
    </Link>
  )
}
