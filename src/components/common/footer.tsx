import { Logo } from '@/components'
import { webSections } from '@/constants'
import Link from 'next/link'

export const Footer = () => {
  return (

    <footer className='ml-20 shadow bg-c6 flex justify-center'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex gap-4 items-center'>
            <Logo/>
            <h2 className='text-xl font-bold'>Miguel Henríquez Pacheco</h2>
          </div>
          <ul className='flex flex-wrap items-center mb-6 text-md font-semibold'>
            {
              webSections.map(({ path, label }) => (
                <li key={`footer-link-${path}-${label}`}>
                  <Link href={path} className='hover:underline me-4 md:me-6 capitalize'>{label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <hr className='my-6 sm:mx-auto border-gray-500 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center'>
          © {new Date().getFullYear()}
          {' Miguel Henríquez Pacheco. Todos los derechos reservados.'}</span>
      </div>
    </footer>

  )
}
