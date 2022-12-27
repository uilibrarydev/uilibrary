import { createContext } from 'react'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
// import { TRegister } from '../types/globals'
import { noop } from '../utils'

declare type TFormContextProps = {
  register?: UseFormRegister<TFormData> //TRegister | CallbackFnType
  errors?: FieldErrors
  setValue: TSetValue
  control?: Control<FieldValues, unknown>
}
export const FormContext = createContext<TFormContextProps>({ setValue: noop })
