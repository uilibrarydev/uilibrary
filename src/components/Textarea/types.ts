import { IFormCompProps } from '../../types/globals'

export interface TTextAreaTypeProps extends Omit<IFormCompProps, 'value'> {
  className?: string
  name?: string
  cols?: number
  row?: number
  valid?: boolean
  label?: string | JSX.Element
  error?: string
  currentValue?: string
  placeHolder?: string
  required?: boolean
  disabled?: boolean
  changeHandler?: (event: TTextAreaEventType) => void
  helperText?: string
  successMessage?: string
  counter?: boolean
}
