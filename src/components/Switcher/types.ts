export interface TSwitcherProps extends IFormCompProps {
  onClick?: (isChecked: boolean) => void
  className?: string
  disabled?: boolean
  selectedValue?: boolean
  size?: 'large' | 'small'
  id?: string
  label?: string
  labelAddons?: JSX.Element
}
