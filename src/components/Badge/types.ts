import { IFormCompProps } from '../../types/globals'

export interface TBadgeProps extends IFormCompProps {
  text?: string | JSX.Element
  type?: 'primary' | 'secondary'
  size?: 'large' | 'small'
  className?: string
}
