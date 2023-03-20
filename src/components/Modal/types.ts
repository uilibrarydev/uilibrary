import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export interface TModalPropTypes {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
  title?: string
  size?: 'small' | 'medium' | 'large'
  withFooter?: boolean
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  closeIcon?: boolean
  children?: string | JSX.Element | JSX.Element[] | ReactNode
  className?: string
}
