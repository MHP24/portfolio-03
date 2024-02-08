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
    <html lang='en' className='bg-c1 bg-mainBg bg-center bg-fixed bg-no-repeat'>
      <body className={`${mainFont.className} text-c3`}>
        <Navbar/>
        <main className='flex flex-col gap-20 md:gap-40 min-h-screen md:ml-28 z-10 border-l-[1px] border-c3'>
          { children }
        </main>
      </body>
    </html>
  )
}
