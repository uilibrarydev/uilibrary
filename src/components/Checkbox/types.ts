import { IFormCompProps } from '../../types/globals'

export interface TCheckboxProps extends IFormCompProps {
  label?: string | JSX.Element
  selectedValue?: boolean
  onClick?: (isChecked: boolean) => void
}
