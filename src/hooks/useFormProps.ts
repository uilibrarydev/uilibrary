import { useContext } from 'react'
import { FormContext, TFormContextProps } from '../context'

export const useFormProps = (): TFormContextProps => {
  return useContext(FormContext)
}
