export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  className?: string
  onClick: (itemValue: TSelectedValue) => void
  labelLeftIconProps?: TSelectIconProps
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
}
