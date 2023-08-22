import { createContext } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
  UseFormWatch,
  UseFormReset,
  UseFormClearErrors,
  UseFormSetError
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
  clearErrors?: UseFormClearErrors<TFormData>
  setError?: UseFormSetError<TFormData>
  isSubmitted: boolean
  isSubmitting: boolean
}
export const FormContext = createContext<TFormContextProps>({
  setValue: noop,
  isSubmitted: false,
  isSubmitting: false
})
