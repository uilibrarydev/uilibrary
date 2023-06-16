import { TClickHandler, TItemValue, TSelectOption } from '../../types/globals'

export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  onClick: (itemValue: TItemValue) => void
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
}
