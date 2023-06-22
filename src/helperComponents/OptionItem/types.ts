export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  onClick: (itemValue: TItemValue) => void
  labelLeftIconProps?: TSelectIconProps
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
}
