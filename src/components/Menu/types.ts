export type TMenuItem = {
  label: TItemLabel
  value: TItemValue
  iconProps?: TSelectIconProps
  handler?: TCallBackFn
  disabled?: boolean
  dataId?: string
  meta?: string
}

export type TMenuProps = {
  className?: string
  menuItems: TMenuItem[]
  parentRef: HTMLElement
  onClose: TCallBackFn
  position?: TTooltipPosition // 'right' | 'left' | 'top' | 'bottom'
  isOpen: boolean
}
