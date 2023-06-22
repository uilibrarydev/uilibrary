export interface TSnackbarProps extends IFormCompProps {
  text?: string | JSX.Element

  className?: string
  iconProps?: {
    name: string
    color: string
  }
  withAction?: boolean
}
