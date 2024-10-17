import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'
import { TSVGIconType } from '../SVGIcons/types'

export interface TModalPropTypes {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  titleIconProps?: {
    type: TSVGIconType
    Component?: TSVGIconComponent
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

export interface TModalConfirmationPropTypes {
  dataIdPrefix?: string
  closeOnOutsideClick?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large'
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  iconProps?: {
    type: TSVGIconType
    Component: TSVGIconComponent
    size: string
  }
  className?: string
}
