// * Metadata

// * Styles
import { mainFont } from '@/fonts'
import './globals.css'

// * Components
import { Footer, Navbar } from '@/components'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? ''),
  title: 'Miguel HP',
  description: 'Portafolio de Miguel Henríquez Pacheco - Desarrollador full stack',
  openGraph: {
    title: 'Miguel HP',
    description: 'Portafolio de Miguel Henríquez Pacheco - Desarrollador full stack'
  },
  other: {
    'google-site-verification': 'ICbjXqY7xXx8fUXPxgS8L2rEY1YDA06hh0928e500t4'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='bg-c1 bg-mainBg bg-center bg-fixed bg-cover'>
      <body className={`${mainFont.className} text-c3 max-w-[120rem] mx-auto overflow-x-hidden`}>
        <Navbar/>
        <main className='min-h-screen sm:ml-20 z-10'>
          { children }
        </main>

        <Footer/>

        {/* Used as portal */}
        <div id='modal'></div>

        {/* Chatbot script */}
        <script
          src='https://chat.mg-hp.com/files/scripts/chat/main.js'
          data-mhp-url='https://chat.mg-hp.com'
        />
      </body>

    </html>
  )
}
