import { IFormCompProps } from '../../types/globals'

export interface TSwitcherProps extends IFormCompProps {
  onClick?: (isChecked: boolean) => void
  isChecked?: boolean
  disabled?: boolean
  size?: string
  id?: string
  backgroundColor?: TColor
}
