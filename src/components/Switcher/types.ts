import { IFormCompProps } from '../../types/globals'

export interface TSwitcherProps extends IFormCompProps {
  onClick?: (isChecked: boolean) => void
  className?: string
  disabled: boolean
  selectedValue?: boolean
  size?: string
  id?: string
  backgroundColor?: TColor
}
