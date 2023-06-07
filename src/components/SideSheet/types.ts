import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export interface TSideSheetPropTypes {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
  position?: 'right' | 'left'
  title?: string
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  children?: string | JSX.Element | JSX.Element[] | ReactNode
  className?: string
}
