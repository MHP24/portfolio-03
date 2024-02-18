'use server'

import { type Metadata } from 'next'

export const obtainPageMetadata = (): Metadata => {
  const metadata: Metadata = {
    title: 'Miguel HP',
    description: 'Portafolio de Miguel Henríquez Pacheco - Desarrollador full stack',
    openGraph: {
      title: 'Miguel HP',
      description: 'Portafolio de Miguel Henríquez Pacheco - Desarrollador full stack',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/msc/logo.jpg`,
          alt: 'Miguel HP'
        }
      ]
    },
    other: {
      'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICAITON ?? ''
    }
  }
  return metadata
}
