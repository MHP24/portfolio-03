// * Metadata

// * Styles
import { mainFont } from '@/fonts'
import './globals.css'

// * Components
import { Navbar } from '@/components'
import { metadata } from '@/constants'

export const pageMetadata = metadata

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-c1'>
      <body className={`${mainFont.className} text-c3`}>
        <Navbar/>
        <main className='min-h-screen md:ml-28 z-10 border-l-[1px] border-c3'>
          { children }
        </main>
      </body>
    </html>
  )
}
