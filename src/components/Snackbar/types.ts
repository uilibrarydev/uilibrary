import { TButtonPropTypes } from '../Button/types'

export type TSnackbarTypes = 'success' | 'error' | 'warning' | 'information'

export interface TSnackbarProps extends IFormCompProps {
  type?: TSnackbarTypes
  text: string | JSX.Element
  duration?: number
  closeSnackbar: () => void
  position:
    | 'top-center'
    | 'top-right'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'bottom-left'
  actionProps?: TButtonPropTypes
}
