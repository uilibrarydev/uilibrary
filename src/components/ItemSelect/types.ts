import { ReactNode } from 'react'
import { IconPropTypes } from '../Icon/types'

export interface TItemSelectProps extends IFormCompProps {
  id?: number | string
  label: string
  image?: string
  rightIconProps?: ReactNode
  leftIconProps?: ReactNode
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
