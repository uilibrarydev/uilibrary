export type TSelectedValue = string | number

export type TSelectOption = {
  value: TSelectedValue
  label: TSelectedValue
}

export type TSelectOptions = TSelectOption[]

export type TSelectPropTypes = {
  options: TSelectOptions
  placeHolder: string
  selectedValue: TSelectOption | null
  onSelect: (value: TSelectOption) => void
}
