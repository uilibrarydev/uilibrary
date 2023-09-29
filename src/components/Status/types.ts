import { IconPropTypes } from '../Icon/types'

export type TStatusTypes =
  | 'primary'
  | 'disabled'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'
export interface TStatusProps extends IFormCompProps {
  text?: string | number
  leftIconProps?: IconPropTypes
  rightIconProps?: IconPropTypes
  type?: TStatusTypes
  size?: 'large' | 'medium' | 'small'
  className?: string
  noIcon?: boolean
}
