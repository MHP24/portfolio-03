import { type FC } from 'react'
import { TimelineCard } from './timeline-card'

type Props = {
  timeline: Array<{
    title: string
    date: string
    description: string
  }>
}

export const Timeline: FC<Props> = ({ timeline }) => {
  return (
    <ol className='relative border-s-2 border-c3-1'>
      {
        timeline.map((item, i) => (
          <TimelineCard
            key={`timeline-item-${i}-${item.title}`}
            {...{ ...item, latest: i === 0 }}
          />
        ))
      }
    </ol>
  )
}
