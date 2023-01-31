import { IFormCompProps } from '../../types/globals'

export interface TCheckboxProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  justIcon: boolean
  disabled: boolean
  required: boolean
  selectedValue?: boolean
  onClick?: (isChecked: boolean) => void
}
