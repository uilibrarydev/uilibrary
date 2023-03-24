import { TClickHandler, TItemValue, TSelectOption } from '../../../types/globals'

export type TSelectItemProps = {
  isSelected: boolean
  data: TSelectOption
  onClick: (itemValue: TItemValue) => void
  labelRightIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  optionRightIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
}
