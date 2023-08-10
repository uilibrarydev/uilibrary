import { RefObject } from 'react'
import { IconPropTypes } from '../Icon/types'

export interface InputCustomProps extends IFormCompProps {
  mask?: string
  className?: string
  size?: 'large' | 'small'
  currentValue?: string
  error?: string | JSX.Element
  label?: string | JSX.Element
  leftIconProps?: IconPropTypes
  rightIconProps?: IconPropTypes
  disabled?: boolean
  required?: boolean
  readonly?: boolean

  ref?: RefObject<HTMLInputElement>
  style?: Record<string, string>
  type?: 'text' | 'number' | 'time' | 'password' | 'email' | 'file' | 'tel' | 'date'
  handleChange?: (event: TChangeEventType) => void
  placeholder?: string
  helperText?: string
  successMessage?: string
  maxCount?: number
  onFocus?: (event: TClickEventType) => void
}
