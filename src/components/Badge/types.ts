import { IFormCompProps } from '../../types/globals'

export interface TBadgeProps extends IFormCompProps {
  text?: string | JSX.Element
  color?: string
  type?: string
  size?: string
  className?: string
}
