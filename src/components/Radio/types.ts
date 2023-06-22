export interface TRadioProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  disabled?: boolean
  isSelected?: boolean
  onClick?: (isChecked: boolean) => void
}

export type TRadioOptionItem = {
  value: number
  label: string
}

export interface TRadioGroupProps extends IFormCompProps {
  label?: string | JSX.Element
  className?: string
  isHorizontal?: boolean
  options: TRadioOptionItem[]
}
