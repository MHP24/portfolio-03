'use client'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { type ContactFormData } from '@/types'
import { Input, TextArea } from '@/components'
import { regex } from '@/utils'
import { sendContactMessage } from '@/actions'
import { useState } from 'react'

export const ContactForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false)

  const {
    register, handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true)
    const { sent } = await sendContactMessage(data)

    // * Emit toast
    toast(sent
      ? 'Mensaje enviado con éxito'
      : 'Ha ocurrido un problema al enviar el mensaje',
    {
      icon: sent ? '✅' : '❌',
      style: {
        borderRadius: '2rem',
        padding: '.5rem 1rem',
        background: '#1A1A1A',
        borderColor: '#FFFFFF18',
        borderWidth: '1px',
        color: '#fff'
      }
    }
    )
    // * Initial form state (by default)
    reset()
    setIsSending(false)
  }

  return (
    <>
      <form className='flex flex-col items-start gap-6 md:gap-8'
        onSubmit={handleSubmit(onSubmit)} noValidate>

        <Input
          {...register('email', { required: true, pattern: regex.email })}
          name='email'
          placeholder='tucorreo@mail.com'
          type='email'
          label='Correo electrónico'
          isValid={!errors.email}
        />

        <Input
          {...register('subject', { required: true })}
          name='subject'
          placeholder='¿Qué necesitas?'
          type='text'
          label='Asunto'
          isValid={!errors.subject}
        />

        <TextArea
          {...register('message', { required: true })}
          name='message'
          placeholder='Información adicional...'
          label='Mensaje'
          isValid={!errors.message}
        />

        <button
          disabled={isSending}
          className='transition-opacity hover:opacity-90 delay-75 border-2 md:mt-4 px-6 md:px-8 py-2
          text-lg lg:text-xl rounded-full bg-c3 text-c6 font-semibold disabled:opacity-60 min-w-[6.5rem] md:min-w-[8rem] min-h-[3rem]'
        >
          {
            isSending
              ? <div className='animate-spin h-6 w-6 border-2 border-l-c6 rounded-full m-auto'></div>
              : <span className='w-9'>Enviar</span>
          }
        </button>
      </form>
      <Toaster
        position='top-right'
        toastOptions={{
          className: ''
        }}
        reverseOrder={false}
      />
    </>
  )
}
