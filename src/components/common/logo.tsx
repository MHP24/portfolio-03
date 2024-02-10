import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className='aspect-square p-3 bg-black grid items-center place-items-center text-center select-none h-fit w-fit'>
      <h2 className='text-5xl font-bold'>M</h2>
    </Link>
  )
}
