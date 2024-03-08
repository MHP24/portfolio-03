import { LinkButton } from '@/components'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='grid place-items-center h-screen w-full bg-c1'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-3xl md:text-4xl text-center'>404 | P&aacute;gina no encontrada</h1>
        <LinkButton
          href='/'
          className='bg-c8 border-c3-1 font-semibold'
          target='_self'
        >
        Volver al inicio
        </LinkButton>
      </div>
    </section>
  )
}

export default NotFoundPage
