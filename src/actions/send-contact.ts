'use server'

import { type ContactFormData } from '@/types'
import { regex } from '@/utils'
import emailjs from '@emailjs/nodejs'

export const notify = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      process.env.EMAIL_SERVICE!,
      process.env.EMAIL_TEMPLATE!, data,
      {
        publicKey: process.env.EMAIL_PUBLIC_KEY!,
        privateKey: process.env.EMAIL_PRIVATE_KEY
      }
    )

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const sendContactMessage = async (
  data: ContactFormData
): Promise<{ sent: boolean }> => {
  // * Basic validation from server
  const { email, subject, message } = data
  if (!email.match(regex.email) || !subject || !message) {
    return { sent: false }
  }

  // * Mailing service using EmailJS
  const sent = await notify(data)
  return { sent }
}
