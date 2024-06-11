import { InputHTMLAttributes, RefObject } from 'react'
import { IconPropTypes } from '../Icon/types'
export interface InputCustomProps
  extends IFormCompProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'size' | 'onFocus' | 'value' | 'onChange' | 'autoComplete'
    > {
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
  type?: 'text' | 'number' | 'time' | 'password' | 'email' | 'file' | 'tel' | 'date' | 'numeric'
  handleChange?: (event: TChangeEventType, value: string) => void
  placeholder?: string
  datePlaceHolderText?: string
  helperText?: string
  successMessage?: string
  maxCount?: number
  onFocus?: (event: TClickEventType) => void
  hideCounter?: boolean
  allowNegative?: boolean
  currencySymbol?: string
  separatorSymbol?: string
  allowLeadingZeros?: boolean
  thousandSeparator?: string
  labelAddons?: JSX.Element
  autoComplete?: string
  witUpperCase?: boolean
  isAllowed?: (values: {
    formattedValue: string
    value: string
    floatValue: number | undefined
  }) => boolean
}
