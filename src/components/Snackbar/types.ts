import { TButtonPropTypes } from '../Button/types'

export type TSnackbarTypes = 'success' | 'error' | 'warning' | 'information'

export interface TSnackbarProps extends IFormCompProps {
  isVisible?: boolean
  text?: string | JSX.Element
  type?: TSnackbarTypes
  timer?: number
  className?: string
  closeSnackbar: () => void
  actionProps?: TButtonPropTypes
}

export type Timer = ReturnType<typeof setTimeout>
