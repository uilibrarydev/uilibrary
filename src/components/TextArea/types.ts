import { IFormCompProps } from '../../types/globals'

export interface TTextAreaTypeProps extends Omit<IFormCompProps, 'value'> {
  className?: string
  name?: string
  cols?: number
  row?: number
  label?: string | JSX.Element
  error?: string
  showError?: string
  currentValue?: string
  placeHolder?: string
  changeHandler?: (event: TTextAreaEventType) => void
}
