export interface IconPropTypes {
  name?: string
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
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  onClick?: () => void
  className?: string
  refHandler?: CallbackFnType
  withWrapper?: boolean
}
