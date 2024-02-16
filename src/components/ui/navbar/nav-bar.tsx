import Link from 'next/link'
import { NavItem } from './nav-item'
import { webSections } from '@/constants'

export const Navbar = () => {
  return (
    <>
      {/* Desktop navbar */}
      <nav className='border-r-2 border-c3-1 md:border-none hidden sm:block fixed left-0 top-0 w-20 h-screen bg-c8'>

        <ul className='flex flex-col gap-8 h-full'>
          <li>
            <Link
              href={'#inicio'}
              className='w-full aspect-square p-3 bg-black grid items-center text-center select-none'>
              <h2 className='text-5xl font-bold'>M</h2>
            </Link>
          </li>

          <li className='flex flex-col items-center gap-6'>
            {
              webSections.slice(1).map((option, key) => (
                <NavItem key={`nav-item-${option.label}-desktop-${key}`} {...option}/>
              ))
            }
          </li>
        </ul>
      </nav>

      {/* Mobile navbar */}
      <nav className='fixed sm:hidden top-0 left-0 w-full border-b-[1px] border-c3-1 bg-c8 z-10'>
        <ul className='flex gap-4 items-center'>
          <li>
            <Link
              href={'#inicio'}
              className='w-14 aspect-square bg-black grid items-center text-center select-none'>
              <h2 className='text-2xl font-bold'>M</h2>
            </Link>
          </li>
          {
            webSections.slice(1).map((option, key) => (
              <li key={`mobile-nav-item-${key}`}>
                <Link
                  href={option.path}
                  className='capitalize hover:underline text-md '
                >
                  {option.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
