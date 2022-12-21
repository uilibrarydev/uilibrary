export type TSelectedValue = string | number

export interface TSelectOption {
  value: TSelectedValue
  label: TSelectedValue
}

export type TSelectOptions = TSelectOption[]

export interface TSelectPropTypes {
  options: TSelectOptions
  placeHolder: string
  selectedValue: TSelectOption | null
  onSelect: (value: TSelectOption) => void
}
