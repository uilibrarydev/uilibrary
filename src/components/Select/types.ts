export type TSelectedValue = string | number

export type TSelectOption = {
  value: TSelectedValue
  label: TSelectedValue
}

export type TSelectOptions = TSelectOption[]

export type TSelectPropTypes = {
  options: TSelectOptions
  selectedValue: TSelectOption
  onSelect: (value: TSelectOption) => void
}
