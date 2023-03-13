import { IFormCompProps } from '../../types/globals'

export interface TTextAreaTypeProps extends IFormCompProps {
  className?: string
  name?: string
  cols?: number
  row?: number
  valid?: boolean
  label?: string | JSX.Element
  currentValue?: string
  placeHolder?: string
  required?: boolean
  disabled?: boolean
  maxCount?: number
  changeHandler?: (event: TTextAreaEventType) => void
  helperText?: string
  successMessage?: string
  withCounter?: boolean
}
