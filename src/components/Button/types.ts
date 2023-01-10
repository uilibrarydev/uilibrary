import { TClickEventType } from '../../types/globals'

export interface TButtonPropTypes {
  disabled?: boolean
  buttonActionType?: 'submit'
  buttonText: string
  className?: string
  type: 'primary' | 'secondary' | 'disabled' | 'passiveTextButton' | 'activeTextButton'
  iconProps?: {
    name: string
    size?: TIconSize
    color?: TColor
  }
  onClick: (event: TClickEventType) => void
}
