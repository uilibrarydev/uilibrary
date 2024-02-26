import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'
import { TIconTypes } from '../Icon/types'

export interface TModalPropTypes {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  titleIconProps?: {
    name: string
    type: TIconTypes
  }
  size?: 'small' | 'medium' | 'large'
  withFooter?: boolean
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  closeIcon?: boolean
  children?: ReactNode
  className?: string
}
