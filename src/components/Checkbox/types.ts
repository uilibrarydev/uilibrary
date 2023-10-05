export interface TCheckboxProps extends IFormCompProps {
  label?: string | JSX.Element
  beforeLink?: string | JSX.Element
  afterLink?: string | JSX.Element
  className?: string
  disabled?: boolean
  required?: boolean
  link?: string
  selectedValue?: boolean
  IconProps?: {
    name: string
  }
  onClick?: (isChecked: boolean) => void
}
