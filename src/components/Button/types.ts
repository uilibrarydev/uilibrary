import { TClickEventType } from '../../types/globals'

export interface TButtonPropTypes {
  disabled?: boolean
  buttonActionType?: 'submit'
  buttonText: string
  className?: string
  type: string
  size?: string
  justIcon?: boolean
  isLoading?: boolean
  iconProps?: {
    name: string
    size?: TIconSize
    color?: TColor
    alignment?: string
  }
  onClick: (event: TClickEventType) => void
}
