import { RefObject } from 'react'
import {
  IFormCompProps,
  TChangeEventType,
  TClickHandler,
  TClickEventType
} from '../../types/globals'

export interface InputCustomProps extends IFormCompProps {
  mask?: string
  className?: string
  size?: 'large' | 'small'
  currentValue?: string
  error?: string | JSX.Element
  label?: string | JSX.Element
  leftIcon?: boolean
  rightIcon?: boolean
  disabled?: boolean
  required?: boolean
  iconProps?: {
    name: string
    size?: string
    className?: string
    onClick?: TClickHandler
  }
  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number' | 'time' | 'password' | 'email' | 'file' | 'tel' | 'date'
  changeHandler?: (event: TChangeEventType) => void
  placeholder?: string
  helperText?: string
  successMessage?: string
  maxCount?: number
  onFocus?: (event: TClickEventType) => void
}
