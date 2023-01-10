import { IFormCompProps } from '../../types/globals'

export interface TSwitcherProps extends IFormCompProps {
  onClick?: (isChecked: boolean) => void
  isChecked?: boolean
  id?: string
  backgroundColor?: TColor
}
