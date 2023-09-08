import { ReactNode } from 'react'
import { TButtonPropTypes } from '../Button/types'
import { TIconTypes } from '../Icon/types'

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
  iconProps?: {
    name: string
    type: TIconTypes
  }
  closeIcon?: boolean
  children?: string | JSX.Element | JSX.Element[] | ReactNode
  className?: string
}
