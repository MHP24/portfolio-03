import { type TService } from '@/types'
import React, { type FC } from 'react'
import { ServiceCard } from './service-card'

type Props = {
  services: TService[]
}

export const ServicesContainer: FC<Props> = ({ services }) => {
  return (
    <ul className='flex flex-col gap-7 animate__animated animate__fadeInLeft left__fadeIn'>
      {
        services.map(service => (
          <ServiceCard key={`service-mh-${service.title}`} {...service}/>
        ))
      }
    </ul>
  )
}
