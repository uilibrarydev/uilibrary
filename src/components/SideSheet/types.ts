import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export interface TSideSheetPropTypes {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
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
}
