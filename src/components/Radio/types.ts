import { IFormCompProps } from '../../types/globals'

export interface TRadioProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  disabled: boolean
  selectedValue?: boolean
  onClick?: (isChecked: boolean) => void
}
