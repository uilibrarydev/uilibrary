import { TClickEventType } from '../../types/globals'

export interface TButtonPropTypes {
  disabled?: boolean
  buttonActionType?: 'submit'
  buttonText?: string | JSX.Element
  className?: string
  type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
  iconProps?: {
    name: string
    alignment?: string
  }
  onClick?: (event: TClickEventType) => void
}
