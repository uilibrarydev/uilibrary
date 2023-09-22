import { IconPropTypes } from '../Icon/types'

export interface TBadgeProps extends IFormCompProps {
  text?: string | number
  leftIconProps?: IconPropTypes
  rightIconProps?: IconPropTypes
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  className?: string
  onClick?: (e: TClickEventType) => void
}
