import { TClickHandler, TItemValue, TSelectOption } from '../../../types/globals'

export type TSelectItemProps = {
  isSelected: boolean
  data: TSelectOption
  onClick: (itemValue: TItemValue) => void
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
  avatar?: string
  disabled?: boolean
}
