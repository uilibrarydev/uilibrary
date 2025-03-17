import type { JSX } from 'react'
import type { TButtonPropTypes } from '../Button/types'
import type { LinkPropTypes } from '../Link/types'

export type TAlertTypes = 'grey' | 'success' | 'error' | 'warning' | 'information' | 'discovery'
export type TAlertPosition = 'inline' | 'sticky'

export interface TAlertProps extends IFormCompProps {
  type?: TAlertTypes
  position?: TAlertPosition
  text: string | JSX.Element
  subtext?: string | JSX.Element
  closeIcon?: boolean
  onClose?: () => void
  buttonProps?: {
    confirm: TButtonPropTypes
    cancel?: TButtonPropTypes
  }
  className?: string
  linkAddons?: LinkPropTypes
}
