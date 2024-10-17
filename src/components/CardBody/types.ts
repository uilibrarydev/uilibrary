import { TButtonPropTypes } from '../Button/types'

export interface TCardBodyProps {
  className?: string
  title?: string
  description?: string
  buttonProps?: {
    primary?: TButtonPropTypes
    secondary: TButtonPropTypes
  }
  illustration?: string
}
