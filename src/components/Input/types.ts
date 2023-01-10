import { RefObject } from 'react'
import { IFormCompProps, TChangeEventType } from '../../types/globals'

export interface InputCustomProps extends IFormCompProps {
  mask?: string
  className?: string
  value?: string
  error?: string
  showError?: boolean
  label?: string | JSX.Element
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  changeHandler?: (event: TChangeEventType) => void
}
