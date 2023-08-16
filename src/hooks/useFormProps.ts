import { useContext } from 'react'
import { FormContext } from '../context/index'

export const useFormProps = () => {
  return useContext(FormContext)
}
