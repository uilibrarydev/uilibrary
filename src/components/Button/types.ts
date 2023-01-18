import { TClickEventType } from '../../types/globals'

export interface TButtonPropTypes {
  disabled?: boolean
  buttonActionType?: 'submit'
  buttonText: string
  className?: string
  type: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'icon'
  size: 'large' | 'medium' | 'small'
  iconAlignment: 'left' | 'right' | 'center'
  iconProps?: {
    name: string
    size?: TIconSize
    color?: TColor
  }
  onClick: (event: TClickEventType) => void
}
