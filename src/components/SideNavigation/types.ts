export interface TSideNavigationPropTypes {
  actionElm: JSX.Element
  showAction: boolean
  children: JSX.Element
  showToggleIcon?: boolean
  open: boolean
  setOpen: (arg: boolean) => void
}

export interface TBlock {
  children: JSX.Element
  label?: string
  open?: boolean
}
