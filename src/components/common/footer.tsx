import { Logo } from '@/components'
import { webSections } from '@/constants'
import Link from 'next/link'

export const Footer = () => {
  return (

    <footer className='sm:ml-20 shadow bg-c6 flex justify-center'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='flex flex-col lg:flex-row items-center md:justify-between gap-5'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <Logo/>
            <h2 className='text-lg md:text-xl font-bold'>Miguel Henríquez Pacheco</h2>
          </div>
          <ul className='flex gap-6 flex-wrap justify-center items-center mb-6 text-md my-auto'>
            {
              webSections.map(({ path, label }) => (
                <li key={`footer-link-${path}-${label}`}>
                  <Link href={path} className='hover:underline capitalize'>{label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <hr className='my-6 sm:mx-auto border-gray-500 lg:my-8' />
        <span className='block text-sm text-gray-500 text-center'>
          © {new Date().getFullYear()}
          {' Miguel Henríquez Pacheco. Todos los derechos reservados.'}</span>
      </div>
    </footer>

  )
}
