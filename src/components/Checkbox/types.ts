import { TPopoverProps } from '../Popover/types'

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
  helperText?: string
  onClick?: (isChecked: boolean) => void
  popoverAddons?: TPopoverProps
  isInvalid?: boolean
}
