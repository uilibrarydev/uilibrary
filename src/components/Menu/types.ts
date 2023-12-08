export type TMenuItem = {
  label: TItemLabel
  value: TItemValue
  iconProps?: TSelectIconProps
  handler?: TCallBackFn
  disabled?: boolean
  meta?: string
}

export type TMenuProps = {
  menuItems: TMenuItem[]
  parentRef: HTMLElement
  onClose: TCallBackFn
  position?: TTooltipPosition // 'right' | 'left' | 'top' | 'bottom'
  isOpen: boolean
}
