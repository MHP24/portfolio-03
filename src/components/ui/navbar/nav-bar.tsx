import Link from 'next/link'
import { NavItem } from './nav-item'
import { webSections } from '@/constants'

export const Navbar = () => {
  return (
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
            webSections.slice(1, webSections.length).map((option, key) => (
              <NavItem key={`nav-item-${option.label}-${key}`} {...option}/>
            ))
          }
        </li>
      </ul>
    </nav>
  )
}
