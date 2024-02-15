import { type Technology as TTechnology } from '@/types'
import { type FC } from 'react'
import { Technology } from '@/components'

type Props = {
  technologies: TTechnology[]
}

export const TechnologiesGrid: FC<Props> = ({ technologies }) => {
  return (
    <ul className='flex gap-4'>
      {
        technologies.map((technology, i) => (
          <Technology
            key={`technology-${i}-${technology.asset}`}
            {...technology}
          />
        ))
      }
    </ul>
  )
}
