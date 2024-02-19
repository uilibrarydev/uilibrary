export interface TextPropTypes {
  required?: boolean
  disabled?: boolean
  invalid?: boolean
  text?: string | JSX.Element
  size?: 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
  className?: string
  labelAddons?: JSX.Element
  dataId?: string
}
