export interface TRadioProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  disabled?: boolean
  isSelected?: boolean
  onClick?: (isChecked: boolean) => void
}

export type TRadioOptionItem = {
  value: number | string
  label: string
  dataId?: string
}

export interface TRadioGroupProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  isHorizontal?: boolean
  options: TRadioOptionItem[]
  handleChange?: (selected: number | string) => void
  required?: boolean
}
