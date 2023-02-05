import { IFormCompProps } from '../../types/globals'

export interface TBadgeProps extends IFormCompProps {
  text?: string | JSX.Element
  type?: string
  size?: string
  className?: string
}
