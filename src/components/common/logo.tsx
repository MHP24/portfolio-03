import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className='aspect-square grid place-items-center bg-black text-center w-[5rem]'>
      <h2 className='text-5xl font-bold'>M</h2>
    </Link>
  )
}
