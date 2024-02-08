import { ContactForm } from '@/components'

export const ContactSection = () => {
  return (
    <section className='border-[2px] border-c3-1 border-l-0 border-r-0 w-full py-10 bg-c1'>
      <div className='m-auto w-full max-w-[1000px]'>
        <h3 className='text-center mb-10 text-4xl font-bold'>Trabajemos juntos</h3>
        <div className='max-w-[600px] mx-auto my-10'>
          <h4 className='text-center text-xl opacity-70 mb-10'>Lleva tus ideas y soluciones a la realidad, todo es posible.
            Y si algo no existe, lo creo por ti</h4>
          <ContactForm/>
        </div>
      </div>

    </section>
  )
}
