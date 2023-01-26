import { IFormCompProps } from '../../types/globals'

export type TSelectedValue = string | number

export interface TSelectOption {
  value: TSelectedValue
  label: TSelectedValue
}

export type TSelectOptions = TSelectOption[]

export interface TSelectPropTypes extends IFormCompProps {
  label?: string
  options: TSelectOptions
  placeHolder?: string
  onSelect?: (value: TSelectOption) => void
  selectedValue?: TSelectOption | null
  required?: boolean
}
