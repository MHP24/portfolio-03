import { type FC, forwardRef } from 'react'

type Props = {
  name: string
  label?: string
  placeholder: string
  isValid: boolean
}

export const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  ({ name, label, placeholder, isValid, ...rest }, ref) => {
    return (
      <div className='flex flex-col gap-2 w-full'>
        {
          label && (
            <label
              htmlFor={name}
              className={`text-md md:text-lg ${isValid ? 'text-white' : 'text-red-500'}`}
            >
              {label}
            </label>
          )
        }
        <textarea
          {...rest}
          ref={ref}
          name={name}
          placeholder={placeholder}
          className={`w-full outline-none py-2 px-4 text-lg rounded-lg
            bg-c6 border-2 ${isValid ? 'border-c3-1' : 'border-[#ff000030]'}`}
        >
        </textarea>
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
