import { cn } from '@/utils'
import Link from 'next/link'
import { type HTMLProps, type FC, type PropsWithChildren, type Ref } from 'react'

type Props = HTMLProps<HTMLAnchorElement> & {
  href: string
  ref?: Ref<HTMLAnchorElement> | undefined
}
export const LinkButton: FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  const base = 'flex gap-2 items-center justify-center min-w-full sm:min-w-fit border-2 border-c3 hover:bg-c3-1 py-2 rounded-full'
  const responsive = 'px-2 sm:px-6'
  const transition = 'transition-all duration-200'

  return (
    <Link
      {...rest}
      target='_blank'
      className={cn(base, responsive, transition, className)}
    >
      {children}
    </Link>
  )
}
