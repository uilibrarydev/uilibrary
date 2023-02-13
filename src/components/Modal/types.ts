export interface TModalPropTypes {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
  title?: string
  size?: 'small' | 'medium' | 'large'
  buttonProps?: {
    confirmButtonText: string
    cancelButtonText: string
  }
  closeIcon?: boolean
  children: JSX.Element
}
