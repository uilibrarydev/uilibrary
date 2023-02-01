import { RefObject } from 'react'
import { IFormCompProps, TChangeEventType } from '../../types/globals'

export interface InputCustomProps extends Omit<IFormCompProps, 'value'> {
  mask?: string
  className?: string
  currentValue?: string
  error?: string
  showError?: boolean
  label?: string | JSX.Element
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number'
  changeHandler?: (event: TChangeEventType) => void
  placeholder?: string
}
