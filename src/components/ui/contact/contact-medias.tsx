import { type FC } from 'react'
import { type TContactMedia } from '@/types'
import { Media } from '@/components'

type Props = {
  data: TContactMedia[]
}

export const ContactMedias: FC<Props> = ({ data }) => {
  return (
    <ul className='flex flex-col gap-10'>
      {
        data.map((media, i) => (
          <Media key={`contact-media-${i}`} {...media}/>
        ))
      }

    </ul>
  )
}
