import { ReactElement } from 'react'
export interface TItemSelectProps extends IFormCompProps {
  id?: number | string
  image?: string
  rightIconProps?: ReactElement
  label: string
  leftIconProps?: ReactElement
  className?: string
  disabled?: boolean
  handleCardSelectValue?: (isChecked: boolean) => void
  value?: number | string
  handleChange?: (selected: number | string) => void
  isSelected?: boolean
  itemValue?: number | string
}
export interface TItemSelectGroupProps extends IFormCompProps {
  isHorizontal?: boolean
  className?: string
  items: TItemSelectProps[]
  handleChange?: (selected: number | string) => void
  value: number | string
}
