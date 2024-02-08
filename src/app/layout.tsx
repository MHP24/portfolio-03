// * Metadata

// * Styles
import { mainFont } from '@/fonts'
import './globals.css'

// * Components
// import { Navbar } from '@/components'
import { metadata } from '@/constants'
import { Footer } from '@/components'

export const pageMetadata = metadata

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-c1 bg-mainBg bg-center bg-fixed bg-cover'>
      <body className={`${mainFont.className} text-c3 border-2 border-c3-1 w-[80%] mx-auto`}>
        {/* <Navbar/> */}
        <main className='min-h-screen z-10'>
          { children }
        </main>

        <Footer/>
      </body>
    </html>
  )
}
