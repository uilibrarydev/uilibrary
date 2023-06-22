import { RefObject } from 'react'

export interface InputCustomProps extends IFormCompProps {
  mask?: string
  className?: string
  size?: 'large' | 'small'
  currentValue?: string
  error?: string | JSX.Element
  label?: string | JSX.Element
  leftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  rightIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  disabled?: boolean
  required?: boolean

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
