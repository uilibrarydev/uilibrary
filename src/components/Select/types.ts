import { IFormCompProps, TClickHandler, TItemValue, TSelectOptions } from '../../types/globals'

export interface TSelectPropTypes extends IFormCompProps {
  withSearch?: boolean
  withFooter?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  onSelect?: (value: TItemValue) => void
  selectedValue?: TItemValue
  required?: boolean
  multiSelect?: boolean
  leftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  rightIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  itemOptions?: {
    iconName: string
    onClick: TClickHandler
  }
  avatar?: string
}
