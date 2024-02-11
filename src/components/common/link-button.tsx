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
    >
      {children}
    </Link>
  )
}
