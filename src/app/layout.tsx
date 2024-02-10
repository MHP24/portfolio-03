// * Metadata

// * Styles
import { mainFont } from '@/fonts'
import './globals.css'

// * Components
import { metadata } from '@/constants'
import { Footer, Navbar } from '@/components'

export const pageMetadata = metadata

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-c1 bg-mainBg bg-center bg-fixed bg-cover'>
      <body className={`${mainFont.className} text-c3  max-w-[120rem] mx-auto overflow-x-hidden`}>
        <Navbar/>
        <main className='min-h-screen sm:ml-20 z-10'>
          { children }
        </main>

        <Footer/>

        <script
          src='https://chat.mg-hp.com/files/scripts/chat/main.js'
          data-mhp-url='https://chat.mg-hp.com'
        />
      </body>

    </html>
  )
}
