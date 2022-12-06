import { createContext } from 'react'
import { noop } from '../utils'

declare type TFormContextProps = {
  register: TRegister | CallbackFnType
  errors?: FieldErrors
  setValue: TSetValue
}
export const FormContext = createContext<TFormContextProps>({ setValue: noop, register: noop })
