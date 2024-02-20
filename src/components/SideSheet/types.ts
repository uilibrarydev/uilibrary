import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export type TSideSheet = 'small' | 'large'

export interface TSideSheetPropTypes {
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
  children?: string | JSX.Element | JSX.Element[] | ReactNode
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
