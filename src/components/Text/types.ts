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
  size?: 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
  weight?: 'regular' | 'semibold' | 'bold' | 'bolder'
  lineHeight?: 'xsmall' | 'small' | 'medium' | 'large'
  className?: string
  dataId?: string
  onClick?: (event: TClickEventType) => void
}
