import { cn } from '@/utils'
import { type FC } from 'react'

const shimmer =
'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent'

type Props = {
  className?: string
}

export const CardSkeleton: FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={cn(
        shimmer,
        'relative overflow-hidden rounded-xl bg-c2 p-2 shadow-sm aspect-video',
        className
      )}
    >
    </div>
  )
}
