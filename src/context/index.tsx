import { createContext } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

declare type TFormContextProps = {
  register?: UseFormRegister<FieldValues>
  errors?: FieldErrors
}
export const FormContext = createContext<TFormContextProps>({})
