export type TDialogPropTypes = {
  isOpen: boolean
  onClose: () => void
  onSumbit: () => void
  title: string
  contentText: string
  contentTitle: string
  buttonProps?: {
    confirmButtonText: string
    cancelButtonText: string
  }
}
