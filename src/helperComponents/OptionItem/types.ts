import { ReactElement } from 'react'

export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  className?: string
  onClick: (itemValue: TSelectedValue) => void
  labelLeftIconProps?: TSelectIconProps
  OptionRightIconComponent?: (value: TItemValue) => ReactElement
  LabelRightIconComponent?: (value: TItemValue) => ReactElement
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
}
