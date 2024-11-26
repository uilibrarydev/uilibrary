import { useContext } from 'react'
import type { TFormContextProps } from '../context'
import { FormContext } from '../context'

export const useFormProps = (): TFormContextProps => {
  return useContext(FormContext)
}
