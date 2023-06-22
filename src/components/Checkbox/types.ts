export interface TCheckboxProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  disabled?: boolean
  required?: boolean
  selectedValue?: boolean
  IconProps?: {
    name: string
  }
  onClick?: (isChecked: boolean) => void
}
