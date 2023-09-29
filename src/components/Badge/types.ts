import { IconPropTypes } from '../Icon/types'

export interface TBadgeProps extends IFormCompProps {
  text?: string | number
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  className?: string
}
