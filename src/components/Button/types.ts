import { TClickEventType } from '../../types/globals'

export interface TButtonPropTypes {
  disabled?: boolean
  buttonActionType?: 'submit'
  buttonText: string
  className?: string
  type: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'
  size?: 'large' | 'medium' | 'small'
  justIcon?: boolean
  isLoading?: boolean
  iconProps?: {
    name: string
    size?: TIconSize
    color?: TColor
    alignment?: 'left' | 'right'
  }
  onClick: (event: TClickEventType) => void
}
