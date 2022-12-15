import { createContext } from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { noop } from '../utils'

declare type TFormContextProps = {
  register: TRegister | CallbackFnType
  errors?: FieldErrors
  setValue: TSetValue
  control?: Control<FieldValues, unknown>
}
export const FormContext = createContext<TFormContextProps>({ setValue: noop, register: noop })
