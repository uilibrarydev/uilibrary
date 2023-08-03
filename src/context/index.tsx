import { createContext } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
  UseFormWatch,
  UseFormReset
} from 'react-hook-form'
import { noop } from '../utils'

export type TFormContextProps = {
  register?: UseFormRegister<TFormData>
  errors?: FieldErrors
  setValue: TSetValue
  control?: Control<FieldValues, unknown>
  getValues?: UseFormGetValues<TFormData>
  watch?: UseFormWatch<TFormData>
  reset?: UseFormReset<TFormData>
  isDirty?: boolean
  shouldUnregister?: boolean
  shouldFocusError?: boolean
}
export const FormContext = createContext<TFormContextProps>({ setValue: noop })
