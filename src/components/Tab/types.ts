import {IFormCompProps, TClickEventType} from '../../types/globals'

export interface TTabProps extends IFormCompProps {
  label?: string | JSX.Element
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name: string
    alignment?: string
  }
  badgeProps?: {
    text: string
  }
  disabled?: boolean
  selectedValue?: boolean
}
