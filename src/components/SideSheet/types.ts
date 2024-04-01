import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export type TSideSheet = 'small' | 'large'

export interface TSideSheetPropTypes {
  hideOnOutsideClick?: boolean
  shouldRemoveCallback?: boolean
  size?: TSideSheet
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  position?: 'right' | 'left'
  title?: string
  footerButtons?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
    extraButton?: TButtonPropTypes
  }
  children?: ReactNode
  className?: string
  headerButtons?: {
    close: TButtonPropTypes
    pin?: TButtonPropTypes
    back?: TButtonPropTypes
  }
  scrollToTopOptions?: {
    onPixel: number
  }
}
