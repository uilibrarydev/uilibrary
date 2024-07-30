import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export type TSideSheet = 'small' | 'large'

export type TCheckboxInfo = {
  label: string
  isChecked: boolean
}

export interface TSideSheetPropTypes {
  closeOnOutsideClick?: boolean
  shouldRemoveCallback?: boolean
  size?: TSideSheet
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit?: (isCheckboxSelected: boolean) => void
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
    close?: TButtonPropTypes
    pin?: TButtonPropTypes
    back?: TButtonPropTypes
  }
  scrollToTopOptions?: {
    onPixel: number
  }
  checkboxInfo?: TCheckboxInfo
}
