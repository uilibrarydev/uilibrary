import { ReactElement } from 'react'
export interface TItemSelectProps extends IFormCompProps {
  id?: number | string
  image?: string
  label: string
  leftIconProps?: ReactElement
  className?: string
  disabled?: boolean
  handleItemSelectValue?: (isChecked: boolean) => void
  value?: number | string
  handleChange?: (selected: number | string) => void
  isSelected?: boolean
  itemValue?: number | string
  icon?: TSelectIconProps
}
export interface TItemSelectGroupProps extends IFormCompProps {
  isHorizontal?: boolean
  className?: string
  items: TItemSelectProps[]
  iconGroup?: TSelectIconProps
  handleChange?: (selected: number | string) => void
  value: number | string
}
