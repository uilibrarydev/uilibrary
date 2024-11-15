export interface TFramedIconPropTypes {
  className?: string
  size?: 'small' | 'medium' | 'large'
  type?: 'secondary' | 'danger' | 'warning' | 'success' | 'brand' | 'information'
  iconProps: {
    Component: TSVGIconComponent
  }
}
