import type { ReactNode } from 'react'
import type { TButtonPropTypes } from '../Button/types'

export interface TModalPropTypes {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  withFooter?: boolean
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  closeIcon?: boolean
  children?: ReactNode
  className?: string
  confirmBtnTooltipText?: string
}

export interface TModalConfirmationPropTypes {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'large'
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  iconProps?: {
    Component: TSVGIconComponent
  }
  className?: string
}
