import { TClickEventType } from '../../types/globals'

export interface TextPropTypes {
  children?: string | JSX.Element
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'inverse'
    | 'selected'
    | 'brand'
    | 'danger'
    | 'warning'
    | 'success'
    | 'information'
    | 'discovery'
  size?: 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
  weight?: 'regular' | 'semibold' | 'bold' | 'bolder'
  lineHeight?: 'xsmall' | 'small' | 'medium' | 'large'
  className?: string
  onClick?: (event: TClickEventType) => void
}
