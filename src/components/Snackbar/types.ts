export interface TSnackbarProps extends IFormCompProps {
  text?: string | JSX.Element
  type?: 'success' | 'error' | 'warning' | 'information'

  className?: string
  iconProps?: {
    name: string
    color: string
  }
  withAction?: boolean
}
