import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'

export interface TModalPropTypes {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
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
